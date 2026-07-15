'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Ambient sound toggle. Muted by default (browsers block autoplay anyway).
 * The audio file lives at /public/audio/ambience.mp3 and is a soft looping
 * placeholder. Replace that single file to change the ambience.
 */
export default function AmbientSound() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.volume = 0;
  }, []);

  function fade(el: HTMLAudioElement, to: number, done?: () => void) {
    const step = to > el.volume ? 0.04 : -0.04;
    const id = setInterval(() => {
      const next = Math.min(1, Math.max(0, el.volume + step));
      el.volume = next;
      if ((step > 0 && next >= to) || (step < 0 && next <= to)) {
        clearInterval(id);
        done?.();
      }
    }, 40);
  }

  async function toggle() {
    const el = audioRef.current;
    if (!el) return;
    if (!on) {
      try {
        await el.play();
        setOn(true);
        fade(el, 0.35);
      } catch {
        // Autoplay blocked until gesture; the click itself is the gesture,
        // so this rarely fires, but we fail quietly if it does.
      }
    } else {
      fade(el, 0, () => el.pause());
      setOn(false);
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/audio/ambience.mp3" loop preload="none" />
      <button
        onClick={toggle}
        aria-pressed={on}
        aria-label={on ? 'Mute ambience' : 'Play ambience'}
        className="fixed bottom-6 left-6 z-[65] flex items-center gap-3 rounded-full border border-charcoal-line bg-ink/60 px-4 py-2.5 backdrop-blur transition-colors duration-500 hover:border-gold-dim"
      >
        <span className="flex h-3 items-end gap-[3px]">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`w-[2px] rounded-full bg-gold transition-all duration-500 ${
                on ? 'animate-floatUp' : ''
              }`}
              style={{
                height: on ? `${6 + ((i * 5) % 11)}px` : '3px',
                animationDelay: `${i * 0.18}s`,
              }}
            />
          ))}
        </span>
        <span className="hidden font-body text-[10px] uppercase tracking-widest text-ivory-dim sm:inline">
          {on ? 'Sound On' : 'Ambience'}
        </span>
      </button>
    </>
  );
}
