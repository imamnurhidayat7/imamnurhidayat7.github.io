import { Mail, Github, Linkedin, Instagram, Send } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { profile } from '@/data/profile';

export function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20 md:py-28">
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

            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                Find me on
              </p>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub"
                  className="rounded-md bg-white p-2.5 text-gray-700 ring-1 ring-gray-200 transition hover:text-accent hover:ring-accent"
                >
                  <Github size={18} />
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  className="rounded-md bg-white p-2.5 text-gray-700 ring-1 ring-gray-200 transition hover:text-accent hover:ring-accent"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={profile.social.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Instagram"
                  className="rounded-md bg-white p-2.5 text-gray-700 ring-1 ring-gray-200 transition hover:text-accent hover:ring-accent"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

          <form
            action={`mailto:${profile.email}`}
            method="post"
            encType="text/plain"
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1.5 block w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-sm transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1.5 block w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-sm transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1.5 block w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-sm transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-hover"
            >
              <Send size={16} />
              Send Message
            </button>
            <p className="text-xs text-gray-500">
              This form opens your email client. For a hosted form, integrate
              Formspree later.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}