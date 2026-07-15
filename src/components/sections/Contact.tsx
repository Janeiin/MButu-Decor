'use client';

import { useState } from 'react';
import { Mail, MessageCircle, MapPin, Globe } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/lib/site';

const fields = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
  { name: 'studio', label: 'Studio', type: 'text', placeholder: 'Practice or company' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@studio.com' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No backend is wired by default. Connect this to your provider of choice
    // (Formspree, Resend, a route handler) inside this handler.
    setSent(true);
  }

  const details = [
    { Icon: Mail, label: 'Email', value: site.contact.email, href: `mailto:${site.contact.email}` },
    { Icon: MessageCircle, label: 'WhatsApp', value: site.contact.whatsapp, href: site.contact.whatsappLink },
    { Icon: MapPin, label: 'Based in', value: site.contact.location, href: undefined },
    { Icon: Globe, label: 'Serving', value: site.contact.serving, href: undefined },
  ];

  return (
    <section id="contact" className="py-28 sm:py-40">
      <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-24">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Enquiries"
            title={
              <>
                Begin a <span className="accent">conversation.</span>
              </>
            }
          />
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-sm font-body text-base font-light leading-relaxed text-taupe-dark">
              M&rsquo;Butu Collection works with the trade by introduction. Share a
              little about your project and we will respond with availability and
              provenance.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
            {details.map(({ Icon, label, value, href }) => (
              <Reveal key={label} delay={0.05}>
                <div className="flex items-start gap-3 border-t border-line pt-5">
                  <Icon size={17} strokeWidth={1.3} className="mt-1 text-clay" />
                  <div>
                    <p className="eyebrow mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="font-body text-base font-light text-charcoal transition-colors hover:text-clay">
                        {value}
                      </a>
                    ) : (
                      <p className="font-body text-base font-light text-charcoal">{value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.12}>
            {sent ? (
              <div className="flex h-full min-h-[24rem] flex-col items-start justify-center rounded-sm border border-clay/40 bg-sand p-12">
                <p className="font-display text-5xl font-normal text-charcoal">Received.</p>
                <p className="mt-4 max-w-sm font-body font-light leading-relaxed text-taupe-dark">
                  Thank you. Our atelier will be in touch shortly with the next
                  steps for your enquiry.
                </p>
                <button onClick={() => setSent(false)} className="mt-8 font-body text-[12px] font-medium uppercase tracking-wide2 text-clay">
                  Send another &rarr;
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid gap-8 sm:grid-cols-3">
                  {fields.map((f) => (
                    <label key={f.name} className="block">
                      <span className="eyebrow mb-3 block">{f.label}</span>
                      <input
                        type={f.type}
                        name={f.name}
                        required
                        placeholder={f.placeholder}
                        className="w-full border-b border-line bg-transparent pb-3 font-body font-light text-charcoal placeholder:text-taupe/60 transition-colors duration-500 focus:border-clay focus:outline-none"
                      />
                    </label>
                  ))}
                </div>

                <label className="block">
                  <span className="eyebrow mb-3 block">Project</span>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about the space and the materials you are considering."
                    className="w-full resize-none border-b border-line bg-transparent pb-3 font-body font-light text-charcoal placeholder:text-taupe/60 transition-colors duration-500 focus:border-clay focus:outline-none"
                  />
                </label>

                <button type="submit" className="btn-primary group">
                  Discuss Your Project
                  <span className="transition-transform duration-500 group-hover:translate-x-1">&rarr;</span>
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
