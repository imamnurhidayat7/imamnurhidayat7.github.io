import { Github, Linkedin, Instagram } from 'lucide-react';
import { profile } from '@/data/profile';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white py-10">
      <div className="container-narrow">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-gray-600">
            © {year} {profile.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="text-gray-500 transition hover:text-accent"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="text-gray-500 transition hover:text-accent"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.social.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="text-gray-500 transition hover:text-accent"
            >
              <Instagram size={18} />
            </a>
          </div>

          <p className="text-xs text-gray-500">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}