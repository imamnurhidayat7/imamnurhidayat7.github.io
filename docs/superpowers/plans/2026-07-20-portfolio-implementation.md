# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a professional portfolio website for Imam Nurhidayat at `https://imamnurhidayat7.github.io` using Next.js (App Router) + Tailwind CSS, with content hardcoded in TypeScript data files, deployed via GitHub Actions.

**Architecture:** Single-page Next.js app with static export (`output: 'export'`). All content (profile, experience, projects, skills) defined as typed constants in `data/` folder, imported by section components. Hero → About → Experience → Projects → Skills → Contact → Footer, with sticky navbar and smooth-scroll anchor links. GitHub Actions workflow builds and deploys on push to `main`.

**Tech Stack:**
- Next.js 14+ (App Router) with TypeScript
- Tailwind CSS for styling
- Inter font from Google Fonts (via `next/font`)
- lucide-react for icons
- Formspree for contact form (no backend needed)
- GitHub Pages for hosting
- GitHub Actions for CI/CD

## Global Constraints

- **Repo location:** Initialize Next.js at the root of `/Users/pusdatin06/Documents/SC/Portofolio` (which is the cloned `imamnurhidayat7.github.io` repo)
- **Existing files:** Delete old `index.html`, `style.css` before starting
- **Node version:** Node.js v20.x
- **Package manager:** npm
- **Static export:** `next.config.js` must have `output: 'export'` and `images: { unoptimized: true }`
- **TypeScript strict mode:** enabled
- **No placeholder/TODO content in committed files:** All data fields must be filled with real (or realistic placeholder) content that the user can edit later
- **Responsive breakpoints:** mobile (default), tablet (`md:`), desktop (`lg:`)
- **Color palette:** white/gray background, `#2563eb` accent (use Tailwind `blue-600`)
- **Commit message format:** `type(scope): description` (e.g., `feat(hero): add hero section with CTAs`)

---

## File Structure

```
Portofolio/
├── app/
│   ├── layout.tsx              # Root layout, SEO meta, font setup
│   ├── page.tsx                # Homepage composing all sections
│   ├── globals.css             # Tailwind directives + custom CSS
│   └── not-found.tsx           # 404 page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav with smooth-scroll
│   │   └── Footer.tsx          # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx            # Hero with name, CTAs, social
│   │   ├── About.tsx           # About me with quick facts
│   │   ├── Experience.tsx      # Timeline of experiences
│   │   ├── Projects.tsx        # Projects grid with hover
│   │   ├── Skills.tsx          # Skills by category
│   │   └── Contact.tsx         # Contact section + form
│   └── ui/
│       ├── SectionTitle.tsx    # Reusable section heading
│       └── Badge.tsx           # Tech stack pill badge
├── data/
│   ├── profile.ts              # Profile constants
│   ├── experience.ts           # Experience array
│   ├── projects.ts             # Projects array
│   └── skills.ts               # Skills by category
├── lib/
│   └── utils.ts                # cn() helper for class merging
├── public/
│   ├── images/                 # Profile pic + project thumbnails
│   └── cv-imam-nurhidayat.pdf  # Resume PDF
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deploy workflow
├── next.config.js              # Static export config
├── tailwind.config.ts          # Tailwind theme
├── postcss.config.js           # PostCSS config
├── tsconfig.json               # TypeScript config
├── package.json                # Dependencies
├── .gitignore                  # Git ignore rules
└── README.md                   # Project documentation
```

---

## Task 1: Project Setup — Initialize Next.js with TypeScript and Tailwind

**Files:**
- Delete: `/Users/pusdatin06/Documents/SC/Portofolio/index.html`
- Delete: `/Users/pusdatin06/Documents/SC/Portofolio/style.css`
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/package.json`
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/tsconfig.json`
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/next.config.js`
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/tailwind.config.ts`
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/postcss.config.js`
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/.gitignore`

**Interfaces:**
- Consumes: existing `imamnurhidayat7.github.io` git repo at root
- Produces: working Next.js project with TypeScript and Tailwind configured

- [ ] **Step 1: Delete legacy files**

```bash
cd /Users/pusdatin06/Documents/SC/Portofolio
rm index.html style.css
```

- [ ] **Step 2: Verify deletion**

Run: `ls /Users/pusdatin06/Documents/SC/Portofolio`
Expected: shows only `.git` and `README.md` (plus docs/ we created)

- [ ] **Step 3: Create `package.json`**

```json
{
  "name": "imamnurhidayat7-portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "lucide-react": "^0.400.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.3.0"
  },
  "devDependencies": {
    "@types/node": "^20.12.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.4.0"
  }
}
```

- [ ] **Step 4: Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 5: Create `next.config.js`**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;
```

- [ ] **Step 6: Create `tailwind.config.ts`**

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#2563eb',
          hover: '#1d4ed8',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          '2xl': '1152px',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 7: Create `postcss.config.js`**

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- [ ] **Step 8: Create `.gitignore`**

```
# dependencies
node_modules/
.pnp
.pnp.js

# next.js
.next/
out/
build/

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# typescript
*.tsbuildinfo
next-env.d.ts
```

- [ ] **Step 9: Install dependencies**

Run: `cd /Users/pusdatin06/Documents/SC/Portofolio && npm install`
Expected: `node_modules/` folder created, no errors

- [ ] **Step 10: Commit project setup**

```bash
cd /Users/pusdatin06/Documents/SC/Portofolio
git add package.json package-lock.json tsconfig.json next.config.js tailwind.config.ts postcss.config.js .gitignore
git commit -m "chore: initialize Next.js project with TypeScript and Tailwind"
```

---

## Task 2: Create Global Styles and Root Layout

**Files:**
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/app/globals.css`
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/app/layout.tsx`
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/app/page.tsx` (placeholder)
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/app/not-found.tsx`
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/lib/utils.ts`

**Interfaces:**
- Consumes: Tailwind config from Task 1
- Produces: HTML root template with Inter font, global styles, and a working empty homepage

- [ ] **Step 1: Create `lib/utils.ts`**

```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 2: Create `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-white text-gray-900 antialiased;
  }

  /* Focus visible for keyboard nav */
  *:focus-visible {
    @apply outline-2 outline-offset-2 outline-accent;
  }
}

@layer components {
  .container-narrow {
    @apply mx-auto w-full max-w-6xl px-6;
  }
}
```

- [ ] **Step 3: Create `app/layout.tsx`**

```tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://imamnurhidayat7.github.io'),
  title: {
    default: 'Imam Nurhidayat — Full-Stack Developer',
    template: '%s | Imam Nurhidayat',
  },
  description:
    'Portfolio of Imam Nurhidayat, a full-stack developer passionate about building modern web applications.',
  keywords: ['portfolio', 'full-stack developer', 'web developer', 'Indonesia'],
  authors: [{ name: 'Imam Nurhidayat' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://imamnurhidayat7.github.io',
    title: 'Imam Nurhidayat — Full-Stack Developer',
    description: 'Portfolio of Imam Nurhidayat, a full-stack developer.',
    siteName: 'Imam Nurhidayat Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Imam Nurhidayat — Full-Stack Developer',
    description: 'Portfolio of Imam Nurhidayat, a full-stack developer.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

- [ ] **Step 4: Create placeholder `app/page.tsx`**

```tsx
export default function Home() {
  return (
    <main className="container-narrow py-20">
      <h1 className="text-4xl font-bold">Imam Nurhidayat</h1>
      <p className="mt-4 text-gray-600">Portfolio coming soon.</p>
    </main>
  );
}
```

- [ ] **Step 5: Create `app/not-found.tsx`**

```tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container-narrow flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl text-gray-600">Page not found</p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-accent px-6 py-3 font-semibold text-white transition hover:bg-accent-hover"
      >
        Go home
      </Link>
    </main>
  );
}
```

- [ ] **Step 6: Verify dev server runs**

Run: `cd /Users/pusdatin06/Documents/SC/Portofolio && npm run dev`
Expected: starts on `http://localhost:3000`, browser shows "Imam Nurhidayat" heading
Stop server with Ctrl+C after verifying.

- [ ] **Step 7: Commit**

```bash
cd /Users/pusdatin06/Documents/SC/Portofolio
git add app/ lib/
git commit -m "feat(layout): add root layout, globals, and placeholder homepage"
```

---

## Task 3: Create Data Files (Profile, Experience, Projects, Skills)

**Files:**
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/data/profile.ts`
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/data/experience.ts`
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/data/projects.ts`
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/data/skills.ts`

**Interfaces:**
- Consumes: TypeScript types defined inline in each file
- Produces: typed data constants that components will import

**Note:** Content below uses realistic placeholder data. The user can edit these files later to reflect actual experience and projects.

- [ ] **Step 1: Create `data/profile.ts`**

```typescript
export const profile = {
  name: 'Imam Nurhidayat',
  initials: 'IN',
  title: 'Full-Stack Developer',
  tagline:
    'I build modern web applications with a focus on clean code, performance, and great user experience.',
  bio: [
    "Hi, I'm Imam — a passionate full-stack developer who loves turning ideas into real, working products.",
    'I enjoy working across the stack: from crafting intuitive user interfaces to designing robust APIs and databases. I am constantly learning new tools and improving my craft.',
    "I'm currently open to full-time opportunities where I can contribute to meaningful projects and grow alongside a talented team.",
  ],
  email: 'imamnurhidayat7@email.com',
  location: 'Indonesia',
  available: true,
  avatar: '/images/profile.svg',
  resumeUrl: '/cv-imam-nurhidayat.pdf',
  social: {
    github: 'https://github.com/imamnurhidayat7',
    linkedin: 'https://linkedin.com/in/imamnurhidayat7',
    instagram: 'https://instagram.com/imamnurhidayat7',
  },
  quickFacts: [
    { label: 'Role', value: 'Full-Stack Developer' },
    { label: 'Location', value: 'Indonesia' },
    { label: 'Status', value: 'Open to opportunities' },
    { label: 'Languages', value: 'Indonesian, English' },
  ],
} as const;
```

- [ ] **Step 2: Create `data/experience.ts`**

```typescript
export type Experience = {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  techStack: string[];
};

export const experiences: Experience[] = [
  {
    role: 'Full-Stack Developer Intern',
    company: 'Tech Company',
    location: 'Remote',
    startDate: 'Jan 2024',
    endDate: 'Present',
    description: [
      'Built and shipped 3 customer-facing features used by 5,000+ users',
      'Refactored legacy authentication flow, reducing login time by 40%',
      'Collaborated with designers and PMs to define product requirements',
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    role: 'Frontend Developer',
    company: 'University Organization',
    location: 'Indonesia',
    startDate: 'Aug 2023',
    endDate: 'Dec 2023',
    description: [
      'Designed and developed the official website for a student organization of 500+ members',
      'Implemented responsive design and accessibility best practices',
    ],
    techStack: ['React', 'Tailwind CSS', 'JavaScript'],
  },
  {
    role: 'Computer Science Student',
    company: 'University',
    location: 'Indonesia',
    startDate: 'Sep 2021',
    endDate: 'Present',
    description: [
      'Relevant coursework: Data Structures, Algorithms, Web Development, Databases',
      'Active in the coding club and hackathon community',
    ],
    techStack: ['Python', 'Java', 'C++'],
  },
];
```

- [ ] **Step 3: Create `data/projects.ts`**

```typescript
export type Project = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: 'Task Management App',
    description:
      'A full-stack task management application with real-time updates, team collaboration, and dark mode support.',
    image: '/images/project-1.svg',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/imamnurhidayat7/task-app',
    featured: true,
  },
  {
    title: 'E-Commerce Storefront',
    description:
      'Modern e-commerce platform with product catalog, cart functionality, and Stripe payment integration.',
    image: '/images/project-2.svg',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/imamnurhidayat7/ecommerce',
    featured: true,
  },
  {
    title: 'Weather Dashboard',
    description:
      'Real-time weather dashboard with location search, 7-day forecast, and interactive charts.',
    image: '/images/project-3.svg',
    techStack: ['React', 'Chart.js', 'OpenWeather API'],
    repoUrl: 'https://github.com/imamnurhidayat7/weather-dashboard',
    featured: false,
  },
  {
    title: 'University Event Platform',
    description:
      'Platform for university students to discover and register for campus events, with admin dashboard.',
    image: '/images/project-4.svg',
    techStack: ['Next.js', 'Tailwind', 'Supabase'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/imamnurhidayat7/events',
    featured: true,
  },
];
```

- [ ] **Step 4: Create `data/skills.ts`**

```typescript
export type Skill = {
  name: string;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'REST API' },
      { name: 'Prisma' },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Docker' },
      { name: 'Figma' },
      { name: 'Linux' },
    ],
  },
];
```

- [ ] **Step 5: Verify TypeScript compiles**

Run: `cd /Users/pusdatin06/Documents/SC/Portofolio && npx tsc --noEmit`
Expected: no errors

- [ ] **Step 6: Commit**

```bash
cd /Users/pusdatin06/Documents/SC/Portofolio
git add data/
git commit -m "feat(data): add profile, experience, projects, and skills data"
```

---

## Task 4: Create Reusable UI Components (SectionTitle, Badge)

**Files:**
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/components/ui/SectionTitle.tsx`
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/components/ui/Badge.tsx`

**Interfaces:**
- Consumes: `cn()` helper from `lib/utils.ts`
- Produces: reusable SectionTitle and Badge components

- [ ] **Step 1: Create `components/ui/SectionTitle.tsx`**

```tsx
import { cn } from '@/lib/utils';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn('text-center', className)}>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 md:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
    </div>
  );
}
```

- [ ] **Step 2: Create `components/ui/Badge.tsx`**

```tsx
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200',
        className
      )}
    >
      {children}
    </span>
  );
}
```

- [ ] **Step 3: Verify build**

Run: `cd /Users/pusdatin06/Documents/SC/Portofolio && npm run build`
Expected: build succeeds, no errors

- [ ] **Step 4: Commit**

```bash
cd /Users/pusdatin06/Documents/SC/Portofolio
git add components/ui/
git commit -m "feat(ui): add reusable SectionTitle and Badge components"
```

---

## Task 5: Build Navbar Component

**Files:**
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/components/layout/Navbar.tsx`

**Interfaces:**
- Consumes: section IDs (`#home`, `#about`, `#projects`, `#skills`, `#contact`)
- Produces: sticky navbar with smooth-scroll links and mobile hamburger menu

- [ ] **Step 1: Create `components/layout/Navbar.tsx`**

```tsx
'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/80 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <div className="container-narrow flex h-16 items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-gray-900"
        >
          Imam<span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-700 transition hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="rounded-md p-2 text-gray-700 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <ul className="container-narrow flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd /Users/pusdatin06/Documents/SC/Portofolio && npm run build`
Expected: build succeeds

- [ ] **Step 3: Commit**

```bash
cd /Users/pusdatin06/Documents/SC/Portofolio
git add components/layout/Navbar.tsx
git commit -m "feat(navbar): add sticky navbar with smooth scroll and mobile menu"
```

---

## Task 6: Build Hero Section

**Files:**
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/components/sections/Hero.tsx`

**Interfaces:**
- Consumes: `profile` from `data/profile.ts`
- Produces: hero section with greeting, name, title, tagline, CTAs, social links

- [ ] **Step 1: Create `components/sections/Hero.tsx`**

```tsx
import { Download, Mail, Github, Linkedin, Instagram, MapPin } from 'lucide-react';
import { profile } from '@/data/profile';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-16"
    >
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

        {/* Avatar */}
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
```

- [ ] **Step 2: Verify build**

Run: `cd /Users/pusdatin06/Documents/SC/Portofolio && npm run build`
Expected: build succeeds

- [ ] **Step 3: Commit**

```bash
cd /Users/pusdatin06/Documents/SC/Portofolio
git add components/sections/Hero.tsx
git commit -m "feat(hero): add hero section with CTAs, social links, and avatar"
```

---

## Task 7: Build About Section

**Files:**
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/components/sections/About.tsx`

**Interfaces:**
- Consumes: `profile` from `data/profile.ts`
- Produces: about section with bio paragraphs and quick facts grid

- [ ] **Step 1: Create `components/sections/About.tsx`**

```tsx
import { SectionTitle } from '@/components/ui/SectionTitle';
import { profile } from '@/data/profile';

export function About() {
  return (
    <section id="about" className="bg-gray-50 py-20 md:py-28">
      <div className="container-narrow">
        <SectionTitle
          title="About Me"
          subtitle="A little bit about who I am and what I do"
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
            {profile.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {profile.quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-xl border border-gray-200 bg-white p-4 text-center"
              >
                <div className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  {fact.label}
                </div>
                <div className="mt-1 text-sm font-semibold text-gray-900">
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd /Users/pusdatin06/Documents/SC/Portofolio && npm run build`
Expected: build succeeds

- [ ] **Step 3: Commit**

```bash
cd /Users/pusdatin06/Documents/SC/Portofolio
git add components/sections/About.tsx
git commit -m "feat(about): add about section with bio and quick facts"
```

---

## Task 8: Build Experience Section

**Files:**
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/components/sections/Experience.tsx`

**Interfaces:**
- Consumes: `experiences` from `data/experience.ts`
- Produces: vertical timeline of experience cards

- [ ] **Step 1: Create `components/sections/Experience.tsx`**

```tsx
import { Briefcase } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Badge } from '@/components/ui/Badge';
import { experiences } from '@/data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container-narrow">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey and key milestones"
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 h-full w-px bg-gray-200 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <div
                  key={`${exp.company}-${exp.startDate}`}
                  className={`relative flex items-start gap-6 md:gap-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 top-2 z-10 -translate-x-1/2 md:left-1/2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white ring-2 ring-accent">
                      <Briefcase size={14} className="text-accent" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="ml-12 flex-1 md:ml-0 md:w-1/2">
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {exp.role}
                        </h3>
                        <span className="text-xs font-medium text-gray-500">
                          {exp.startDate} — {exp.endDate}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-accent">
                        {exp.company}
                        <span className="text-gray-500"> • {exp.location}</span>
                      </p>

                      <ul className="mt-4 space-y-2 text-sm text-gray-700">
                        {exp.description.map((line, j) => (
                          <li key={j} className="flex gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>

                      {exp.techStack.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.techStack.map((tech) => (
                            <Badge key={tech}>{tech}</Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd /Users/pusdatin06/Documents/SC/Portofolio && npm run build`
Expected: build succeeds

- [ ] **Step 3: Commit**

```bash
cd /Users/pusdatin06/Documents/SC/Portofolio
git add components/sections/Experience.tsx
git commit -m "feat(experience): add timeline section with experience cards"
```

---

## Task 9: Build Projects Section

**Files:**
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/components/sections/Projects.tsx`

**Interfaces:**
- Consumes: `projects` from `data/projects.ts`
- Produces: 2-column grid of project cards with hover effects

- [ ] **Step 1: Create `components/sections/Projects.tsx`**

```tsx
import { ExternalLink, Github, Folder } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Badge } from '@/components/ui/Badge';
import { projects } from '@/data/projects';

export function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-20 md:py-28">
      <div className="container-narrow">
        <SectionTitle
          title="Projects"
          subtitle="A selection of things I've built"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100">
                <div className="flex h-full items-center justify-center text-gray-400">
                  <Folder size={48} />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-4 border-t border-gray-100 pt-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 transition hover:text-accent"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 transition hover:text-accent"
                    >
                      <Github size={14} />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd /Users/pusdatin06/Documents/SC/Portofolio && npm run build`
Expected: build succeeds

- [ ] **Step 3: Commit**

```bash
cd /Users/pusdatin06/Documents/SC/Portofolio
git add components/sections/Projects.tsx
git commit -m "feat(projects): add projects grid with hover effects and tech badges"
```

---

## Task 10: Build Skills Section

**Files:**
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/components/sections/Skills.tsx`

**Interfaces:**
- Consumes: `skillCategories` from `data/skills.ts`
- Produces: 3-category cards with skill pills

- [ ] **Step 1: Create `components/sections/Skills.tsx`**

```tsx
import { Code2, Server, Wrench } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { skillCategories } from '@/data/skills';

const categoryIcons = [Code2, Server, Wrench];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container-narrow">
        <SectionTitle
          title="Skills & Tools"
          subtitle="Technologies I work with day to day"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = categoryIcons[i] ?? Code2;
            return (
              <div
                key={cat.category}
                className="rounded-xl border border-gray-200 bg-white p-6 transition hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-accent">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {cat.category}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center rounded-md bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-200"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd /Users/pusdatin06/Documents/SC/Portofolio && npm run build`
Expected: build succeeds

- [ ] **Step 3: Commit**

```bash
cd /Users/pusdatin06/Documents/SC/Portofolio
git add components/sections/Skills.tsx
git commit -m "feat(skills): add skills section with categorized tech pills"
```

---

## Task 11: Build Contact Section

**Files:**
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/components/sections/Contact.tsx`

**Interfaces:**
- Consumes: `profile` from `data/profile.ts`
- Produces: contact section with email CTA and Formspree-style external form instructions

**Note:** Without a backend, the form will use `mailto:` fallback. For real submission, user can integrate Formspree later.

- [ ] **Step 1: Create `components/sections/Contact.tsx`**

```tsx
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
          {/* Left: contact info */}
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

          {/* Right: simple mailto form */}
          <form
            action={`mailto:${profile.email}`}
            method="post"
            encType="text/plain"
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900"
              >
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
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
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
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-900"
              >
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
```

- [ ] **Step 2: Verify build**

Run: `cd /Users/pusdatin06/Documents/SC/Portofolio && npm run build`
Expected: build succeeds

- [ ] **Step 3: Commit**

```bash
cd /Users/pusdatin06/Documents/SC/Portofolio
git add components/sections/Contact.tsx
git commit -m "feat(contact): add contact section with mailto form and social links"
```

---

## Task 12: Build Footer Component

**Files:**
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/components/layout/Footer.tsx`

**Interfaces:**
- Consumes: `profile` from `data/profile.ts`
- Produces: minimal footer with copyright and social links

- [ ] **Step 1: Create `components/layout/Footer.tsx`**

```tsx
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
```

- [ ] **Step 2: Verify build**

Run: `cd /Users/pusdatin06/Documents/SC/Portofolio && npm run build`
Expected: build succeeds

- [ ] **Step 3: Commit**

```bash
cd /Users/pusdatin06/Documents/SC/Portofolio
git add components/layout/Footer.tsx
git commit -m "feat(footer): add footer with copyright and social links"
```

---

## Task 13: Compose Homepage

**Files:**
- Modify: `/Users/pusdatin06/Documents/SC/Portofolio/app/page.tsx`

**Interfaces:**
- Consumes: all section components (Hero, About, Experience, Projects, Skills, Contact) + Navbar + Footer
- Produces: complete homepage rendering all sections in order

- [ ] **Step 1: Replace `app/page.tsx` content**

```tsx
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd /Users/pusdatin06/Documents/SC/Portofolio && npm run build`
Expected: build succeeds, output shows static export generated

- [ ] **Step 3: Verify build output**

Run: `ls /Users/pusdatin06/Documents/SC/Portofolio/out`
Expected: shows `index.html`, `_next/`, `404.html`, etc.

- [ ] **Step 4: Run dev server and visually verify**

Run: `cd /Users/pusdatin06/Documents/SC/Portofolio && npm run dev`
Expected: opens at `http://localhost:3000`, shows all sections, responsive
Stop server with Ctrl+C.

- [ ] **Step 5: Commit**

```bash
cd /Users/pusdatin06/Documents/SC/Portofolio
git add app/page.tsx
git commit -m "feat(home): compose homepage with all sections"
```

---

## Task 14: Add GitHub Actions Deploy Workflow

**Files:**
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/.github/workflows/deploy.yml`

**Interfaces:**
- Consumes: pushes to `main` branch
- Produces: static site deployed to GitHub Pages

- [ ] **Step 1: Create `.github/workflows/deploy.yml`**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Verify workflow file syntax**

Run: `cd /Users/pusdatin06/Documents/SC/Portofolio && cat .github/workflows/deploy.yml`
Expected: shows the YAML content without errors

- [ ] **Step 3: Update `.gitignore` to NOT ignore `.github`**

Verify `.gitignore` does NOT contain `.github/`. If it does, remove that line.

- [ ] **Step 4: Commit**

```bash
cd /Users/pusdatin06/Documents/SC/Portofolio
git add .github/workflows/deploy.yml
git commit -m "ci: add GitHub Actions workflow for Pages deploy"
```

---

## Task 15: Configure GitHub Pages Settings & Write README

**Files:**
- Create: `/Users/pusdatin06/Documents/SC/Portofolio/README.md`
- Modify: `/Users/pusdatin06/Documents/SC/Portofolio/README.md` (replace)

**Interfaces:**
- Consumes: GitHub repo settings UI
- Produces: README documentation and configured Pages

- [ ] **Step 1: Replace `README.md`**

```markdown
# Imam Nurhidayat — Portfolio

Personal portfolio website built with Next.js (App Router) + Tailwind CSS, deployed on GitHub Pages.

🌐 **Live:** [https://imamnurhidayat7.github.io](https://imamnurhidayat7.github.io)

## Tech Stack

- Next.js 14 (App Router) with TypeScript
- Tailwind CSS
- lucide-react icons
- Static export for GitHub Pages
- GitHub Actions for CI/CD

## Local Development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
```

Outputs static files to `./out/`.

## Updating Content

All content lives in the `data/` folder as typed TypeScript constants:

| File | What to edit |
|------|--------------|
| `data/profile.ts` | Name, title, tagline, bio, email, social links, quick facts |
| `data/experience.ts` | Job experience entries (role, company, dates, bullets, tech) |
| `data/projects.ts` | Portfolio projects (title, description, tech, links) |
| `data/skills.ts` | Skills organized by category |

After editing, commit and push to `main` — GitHub Actions will rebuild and deploy automatically.

## Deployment

Pushes to `main` trigger the `.github/workflows/deploy.yml` workflow, which:

1. Installs dependencies
2. Builds the static site
3. Deploys to GitHub Pages

To deploy manually, use the Actions tab → "Deploy to GitHub Pages" → "Run workflow".

### GitHub Pages Setup (one-time)

1. Go to repo **Settings → Pages**
2. Source: **GitHub Actions**
3. Save

The workflow will then handle deployments on every push to `main`.

## Project Structure

```
.
├── app/              # Next.js App Router (layout, page, globals)
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Experience, Projects, Skills, Contact
│   └── ui/           # Reusable: SectionTitle, Badge
├── data/             # Typed content (profile, experience, projects, skills)
├── lib/              # Utilities (cn helper)
├── public/           # Static assets (images, CV PDF)
└── .github/workflows/ # GitHub Actions
```

## License

MIT
```

- [ ] **Step 2: Document GitHub Pages setup steps in commit message**

After committing, also document that the user needs to:
1. Visit repo **Settings → Pages** on GitHub
2. Set Source to "GitHub Actions"
3. Save

- [ ] **Step 3: Commit**

```bash
cd /Users/pusdatin06/Documents/SC/Portofolio
git add README.md
git commit -m "docs: add README with setup and maintenance instructions"
```

---

## Task 16: Final Verification & Push

**Files:** None (verification + push only)

**Interfaces:**
- Consumes: full project from Tasks 1-15
- Produces: deployed live site at `https://imamnurhidayat7.github.io`

- [ ] **Step 1: Run final build to ensure everything compiles**

Run: `cd /Users/pusdatin06/Documents/SC/Portofolio && npm run build`
Expected: build succeeds with no errors

- [ ] **Step 2: Verify all sections present in build output**

Run: `cat /Users/pusdatin06/Documents/SC/Portofolio/out/index.html | grep -E "id=\"(home|about|experience|projects|skills|contact)\""`
Expected: shows all 6 section IDs present

- [ ] **Step 3: Run type check**

Run: `cd /Users/pusdatin06/Documents/SC/Portofolio && npx tsc --noEmit`
Expected: no TypeScript errors

- [ ] **Step 4: Check git status**

Run: `cd /Users/pusdatin06/Documents/SC/Portofolio && git status`
Expected: clean working tree (everything committed)

- [ ] **Step 5: Push to GitHub**

```bash
cd /Users/pusdatin06/Documents/SC/Portofolio
git push origin main
```

Expected: all commits pushed successfully.

- [ ] **Step 6: Verify GitHub Actions ran**

Run: visit `https://github.com/imamnurhidayat7/imamnurhidayat7.github.io/actions`
Expected: workflow run completed with green checkmark

- [ ] **Step 7: Configure GitHub Pages source (one-time manual step)**

Visit `https://github.com/imamnurhidayat7/imamnurhidayat7.github.io/settings/pages`:
1. Set **Source** to "GitHub Actions"
2. Click **Save**

- [ ] **Step 8: Wait for deployment and visit live site**

Visit `https://imamnurhidayat7.github.io`
Expected: portfolio loads with all sections, professional appearance

- [ ] **Step 9: Manual visual verification checklist**

Verify on the live site:
- [ ] Hero shows name, title, CTAs, social links
- [ ] Navbar smooth-scroll works
- [ ] About section shows bio and quick facts
- [ ] Experience timeline renders correctly
- [ ] Projects grid shows 4 cards with hover effects
- [ ] Skills section shows 3 categories
- [ ] Contact section shows email and form
- [ ] Footer shows copyright and social
- [ ] Mobile responsive (test on phone or DevTools)
- [ ] Lighthouse score ≥ 95 (run from DevTools)

---

## Self-Review Checklist

After completing all tasks, verify:

- [ ] All files match the planned structure
- [ ] No `TODO` / `TBD` / placeholder content in committed files (all data is realistic placeholder, easy to edit)
- [ ] Type names consistent across files (`Experience`, `Project`, `Skill`, `SkillCategory`)
- [ ] Function names consistent (all components use PascalCase exports)
- [ ] All commits use `type(scope): description` format
- [ ] Build succeeds without errors
- [ ] TypeScript compiles without errors
- [ ] Live site renders all sections correctly
- [ ] Responsive design works on mobile

## Post-Deployment Enhancements (Optional, Future)

- Replace avatar placeholder with real profile photo (`public/images/profile.jpg`)
- Add real CV PDF at `public/cv-imam-nurhidayat.pdf`
- Add project thumbnails (replace `.svg` placeholders with real screenshots)
- Integrate Formspree for hosted contact form (replace `mailto:` form)
- Add Google Analytics / Plausible for traffic tracking
- Add dark mode toggle
- Add blog section with MDX