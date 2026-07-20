import { Download, Mail, Github, Linkedin, Instagram, MapPin } from 'lucide-react';
import { profile } from '@/data/profile';

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-16">
      <div className="container-narrow grid w-full grid-cols-1 items-center gap-12 py-16 md:grid-cols-2">
        <div className="animate-fade-in">
          <p className="text-base font-medium text-accent">Hi there, I'm</p>
          <h1 className="mt-2 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-gray-700 md:text-3xl">
            {profile.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-hover hover:shadow-md"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-accent hover:text-accent"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="text-gray-600 transition hover:text-accent"
            >
              <Github size={22} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="text-gray-600 transition hover:text-accent"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={profile.social.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="text-gray-600 transition hover:text-accent"
            >
              <Instagram size={22} />
            </a>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
            <MapPin size={14} />
            <span>{profile.location}</span>
            {profile.available && (
              <>
                <span className="mx-2">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  Available for work
                </span>
              </>
            )}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative h-64 w-64 md:h-80 md:w-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-blue-400 opacity-20 blur-2xl" />
            <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-gray-100 ring-1 ring-gray-200">
              <span className="text-7xl font-bold text-accent md:text-8xl">
                {profile.initials}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}