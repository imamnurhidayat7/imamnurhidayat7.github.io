'use client';

import { useState, FormEvent } from 'react';
import { Mail, Github, Linkedin, Instagram, Send, Phone, MapPin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { profile } from '@/data/profile';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  const formspreeEndpoint = formspreeId ? `https://formspree.io/f/${formspreeId}` : null;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formspreeEndpoint) {
      // Fallback: open mailto
      const form = e.currentTarget;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        `Portfolio contact from ${(form.elements.namedItem('name') as HTMLInputElement)?.value || 'someone'}`,
      )}`;
      return;
    }
    setStatus('sending');
    setErrorMsg('');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setErrorMsg(body?.error || 'Something went wrong. Please email me directly.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please email me directly.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-20 dark:bg-gray-900 md:py-28">
      <div className="container-narrow">
        <SectionTitle
          title="Let's Connect"
          subtitle="I'm currently open to new opportunities. Feel free to reach out!"
        />

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Get in touch
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              The fastest way to reach me is via email or LinkedIn. I usually
              respond within 24 hours.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-gray-900 ring-1 ring-gray-200 transition hover:ring-accent hover:text-accent"
            >
              <Mail size={16} />
              {profile.email}
            </a>

            {profile.phone && (
              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                className="mt-3 flex items-center gap-2 text-sm text-gray-700 transition hover:text-accent"
              >
                <Phone size={16} />
                {profile.phone}
              </a>
            )}

            <div className="mt-3 flex items-center gap-2 text-sm text-gray-700">
              <MapPin size={16} />
              {profile.location}
            </div>

            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                Find me on
              </p>
              <div className="mt-3 flex items-center gap-3">
                {profile.social.github && (
                  <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub"
                    className="rounded-md bg-white p-2.5 text-gray-700 ring-1 ring-gray-200 transition hover:text-accent"
                  >
                    <Github size={18} />
                  </a>
                )}
                {profile.social.linkedin && (
                  <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn"
                    className="rounded-md bg-white p-2.5 text-gray-700 ring-1 ring-gray-200 transition hover:text-accent"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
                {profile.social.instagram && (
                  <a
                    href={profile.social.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Instagram"
                    className="rounded-md bg-white p-2.5 text-gray-700 ring-1 ring-gray-200 transition hover:text-accent"
                  >
                    <Instagram size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-gray-200">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1.5 block w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-sm transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1.5 block w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-sm transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1.5 block w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-sm transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
              />
            </div>
            {status === 'success' ? (
              <div className="flex items-start gap-2 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-800">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">Message sent!</p>
                  <p className="text-green-700">Thanks for reaching out — I&apos;ll get back to you soon.</p>
                </div>
              </div>
            ) : (
              <>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
                {status === 'error' && (
                  <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">
                    <AlertCircle size={18} className="mt-0.5 shrink-0" />
                    <p>{errorMsg}</p>
                  </div>
                )}
                <p className="text-xs text-gray-500">
                  {formspreeEndpoint
                    ? 'Your message goes directly to my inbox.'
                    : 'Form not configured yet — this will open your email client as a fallback.'}
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}