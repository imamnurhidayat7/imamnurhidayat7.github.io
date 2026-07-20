import { Download, Mail, Github, Linkedin, Instagram, MapPin, Sparkles } from 'lucide-react';
import { profile } from '@/data/profile';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Base gradient background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white via-blue-50/60 to-indigo-50/60 dark:from-gray-900 dark:via-gray-800/60 dark:to-indigo-950/60" />

      {/* Decorative gradient blobs */}
      <div className="absolute -top-32 -left-32 -z-10 h-96 w-96 rounded-full bg-blue-300/40 blur-3xl dark:bg-blue-900/40" />
      <div className="absolute top-1/3 -right-32 -z-10 h-96 w-96 rounded-full bg-indigo-300/40 blur-3xl dark:bg-indigo-900/40" />
      <div className="absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-950/40" />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)]" />

      <div className="container-narrow grid w-full grid-cols-1 items-center gap-12 py-16 md:grid-cols-2">
        <div className="animate-fade-in">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-blue-700 shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available for opportunities
          </div>

          <p className="mt-6 text-base font-medium text-accent">Hi there, I'm</p>
          <h1 className="mt-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <h2 className="mt-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">
            {profile.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-300 md:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:from-blue-700 hover:to-indigo-700"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm backdrop-blur-sm transition hover:border-accent hover:text-accent dark:border-gray-700 dark:bg-gray-800/80 dark:text-white dark:hover:border-accent"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            {profile.social.github && (
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="text-gray-600 transition hover:text-accent dark:text-gray-300"
              >
                <Github size={22} />
              </a>
            )}
            {profile.social.linkedin && (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="text-gray-600 transition hover:text-accent dark:text-gray-300"
              >
                <Linkedin size={22} />
              </a>
            )}
            {profile.social.instagram && (
              <a
                href={profile.social.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="text-gray-600 transition hover:text-accent dark:text-gray-300"
              >
                <Instagram size={22} />
              </a>
            )}
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <MapPin size={14} />
            <span>{profile.location}</span>
          </div>
        </div>

        {/* Avatar with gradient ring and floating elements */}
        <div className="relative flex justify-center md:justify-end">
          {/* Floating decorative elements */}
          <div className="absolute -top-4 right-4 -z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-lg ring-1 ring-gray-200 animate-fade-in md:-right-8">
            <Sparkles className="h-5 w-5 text-indigo-500" />
          </div>
          <div className="absolute -bottom-2 left-4 -z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 animate-fade-in md:-left-8">
            <span className="text-xs font-bold text-blue-600">{'</>'}</span>
          </div>

          {/* Main avatar with gradient ring */}
          <div className="relative h-64 w-64 md:h-80 md:w-80">
            {/* Gradient ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 opacity-90 blur-sm" />
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500" />

            {/* Inner circle */}
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-50 to-indigo-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.avatar}
                alt={profile.name}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-fade-in flex-col items-center gap-1 text-xs text-gray-400 md:flex">
        <span>Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-gray-400 to-transparent" />
      </div>
    </section>
  );
}