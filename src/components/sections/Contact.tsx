'use client';

import { useState } from 'react';
import { Mail, MessageCircle, MapPin } from 'lucide-react';
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
    // No backend is wired by default. Connect this to your provider of
    // choice (Formspree, Resend, a route handler) inside this handler.
    setSent(true);
  }

  return (
    <section id="contact" className="relative border-t border-charcoal-line py-28 sm:py-36">
      <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <SectionHeading
            index="06"
            eyebrow="Enquiries"
            title={
              <>
                Begin a{' '}
                <span className="italic text-lux">conversation.</span>
              </>
            }
          />
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-sm font-body text-base font-light leading-relaxed text-ivory-dim">
              M&rsquo;Butu works with the trade by introduction. Share a little
              about your project and we will respond with availability and
              provenance.
            </p>
          </Reveal>

          <div className="mt-12 space-y-6">
            {[
              { Icon: Mail, label: 'Email', value: site.contact.email, href: `mailto:${site.contact.email}` },
              { Icon: MessageCircle, label: 'WhatsApp', value: site.contact.whatsapp, href: site.contact.whatsappLink },
              { Icon: MapPin, label: 'Location', value: site.contact.location, href: undefined },
            ].map(({ Icon, label, value, href }) => (
              <Reveal key={label} delay={0.05}>
                <div className="flex items-center gap-4 border-t border-charcoal-line pt-6">
                  <Icon size={18} strokeWidth={1.2} className="text-gold-dim" />
                  <div>
                    <p className="eyebrow mb-1">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="font-body text-lg font-light text-ivory transition-colors hover:text-gold-bright"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-body text-lg font-light text-ivory">{value}</p>
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
              <div className="flex h-full min-h-[24rem] flex-col items-start justify-center rounded-sm border border-gold-dim/40 bg-charcoal/40 p-12">
                <p className="font-display text-4xl font-light text-lux">Received.</p>
                <p className="mt-4 max-w-sm font-body font-light leading-relaxed text-ivory-dim">
                  Thank you. Our atelier will be in touch shortly with the next
                  steps for your enquiry.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 font-body text-[12px] uppercase tracking-widest text-gold-bright"
                >
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
                        className="w-full border-b border-charcoal-line bg-transparent pb-3 font-body font-light text-ivory placeholder:text-ivory-faint/60 transition-colors duration-500 focus:border-gold focus:outline-none"
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
                    className="w-full resize-none border-b border-charcoal-line bg-transparent pb-3 font-body font-light text-ivory placeholder:text-ivory-faint/60 transition-colors duration-500 focus:border-gold focus:outline-none"
                  />
                </label>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 rounded-full bg-ivory px-9 py-4 font-body text-[13px] uppercase tracking-widest text-ink transition-colors duration-500 hover:bg-gold-bright"
                >
                  Send Enquiry
                  <span className="transition-transform duration-500 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
