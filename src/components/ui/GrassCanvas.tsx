'use client';

import { useEffect, useRef } from 'react';

/**
 * Ambient hero background rendered on a single canvas:
 *  - a warm sunrise light that breathes across the frame
 *  - silhouettes of tall grass swaying in wind
 *  - fine dust motes drifting through the light
 * Kept intentionally sparse for performance. Falls back to a static
 * frame when the visitor prefers reduced motion.
 */
export default function GrassCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current!;
    if (!cv) return;
    const ctx = cv.getContext('2d')!;
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let h = 0;
    let raf = 0;
    let t = 0;

    type Blade = { x: number; height: number; width: number; phase: number; speed: number; lean: number };
    type Mote = { x: number; y: number; r: number; vx: number; vy: number; a: number; tw: number };

    let blades: Blade[] = [];
    let motes: Mote[] = [];

    function build() {
      const bladeCount = Math.max(60, Math.floor(w / 9));
      blades = Array.from({ length: bladeCount }, () => ({
        x: Math.random() * w,
        height: h * (0.18 + Math.random() * 0.4),
        width: 1 + Math.random() * 3.5,
        phase: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 0.7,
        lean: (Math.random() - 0.5) * 40,
      }));

      const moteCount = Math.max(28, Math.floor((w * h) / 42000));
      motes = Array.from({ length: moteCount }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.4 + Math.random() * 1.8,
        vx: 0.1 + Math.random() * 0.3,
        vy: -(0.05 + Math.random() * 0.22),
        a: 0.1 + Math.random() * 0.5,
        tw: Math.random() * Math.PI * 2,
      }));
    }

    function resize() {
      w = cv.clientWidth;
      h = cv.clientHeight;
      cv.width = w * dpr;
      cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    }

    function drawLight() {
      // Base wash
      ctx.fillStyle = '#0a0908';
      ctx.fillRect(0, 0, w, h);

      // Breathing sunrise glow, low on the frame
      const cx = w * (0.62 + Math.sin(t * 0.00008) * 0.06);
      const cy = h * (0.86 + Math.cos(t * 0.0001) * 0.03);
      const rad = Math.max(w, h) * (0.7 + Math.sin(t * 0.00012) * 0.05);
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
      g.addColorStop(0, 'rgba(120, 92, 48, 0.42)');
      g.addColorStop(0.35, 'rgba(74, 59, 40, 0.22)');
      g.addColorStop(1, 'rgba(10, 9, 8, 0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    }

    function drawGrass() {
      for (const b of blades) {
        const sway = reduce ? 0 : Math.sin(t * 0.0006 * b.speed + b.phase) * (12 + b.height * 0.05);
        const tipX = b.x + b.lean + sway;
        const tipY = h - b.height;
        const ctrlX = b.x + (b.lean + sway) * 0.4;
        const ctrlY = h - b.height * 0.55;

        const grad = ctx.createLinearGradient(b.x, h, tipX, tipY);
        grad.addColorStop(0, 'rgba(8, 7, 6, 0.95)');
        grad.addColorStop(0.7, 'rgba(20, 16, 12, 0.85)');
        grad.addColorStop(1, 'rgba(51, 41, 27, 0.55)');

        ctx.beginPath();
        ctx.moveTo(b.x - b.width / 2, h);
        ctx.quadraticCurveTo(ctrlX - b.width / 2, ctrlY, tipX, tipY);
        ctx.quadraticCurveTo(ctrlX + b.width / 2, ctrlY, b.x + b.width / 2, h);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();
      }
    }

    function drawMotes() {
      for (const m of motes) {
        if (!reduce) {
          m.x += m.vx;
          m.y += m.vy;
          m.tw += 0.02;
          if (m.y < -10) {
            m.y = h + 10;
            m.x = Math.random() * w;
          }
          if (m.x > w + 10) m.x = -10;
        }
        const twinkle = 0.55 + Math.sin(m.tw) * 0.45;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(216, 188, 134, ${m.a * twinkle * 0.6})`;
        ctx.fill();
      }
    }

    function frame() {
      t += 16;
      drawLight();
      drawMotes();
      drawGrass();
      raf = requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener('resize', resize);

    if (reduce) {
      // One static, composed frame.
      drawLight();
      drawMotes();
      drawGrass();
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden />;
}
