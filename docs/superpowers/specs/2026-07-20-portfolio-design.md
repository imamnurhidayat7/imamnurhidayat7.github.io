# Portfolio Website Design Spec

**Date:** 2026-07-20
**Author:** Imam Nurhidayat
**Status:** Draft → Pending Review

## Purpose

Membangun portfolio website profesional yang di-host di GitHub Pages (imamnurhidayat7.github.io) untuk:

1. **First impression** yang kuat bagi recruiter/employer (5-detik rule)
2. Showcase skills, experience, dan projects secara terstruktur
3. Memudahkan calon employer menghubungi (CTA jelas)

## Goals & Non-Goals

### Goals
- Portfolio live di `https://imamnurhidayat7.github.io` dalam 1-2 hari kerja
- Tampilan profesional, modern, minimalist, light mode
- Responsive (mobile + tablet + desktop)
- Lighthouse score: Performance ≥ 95, Accessibility ≥ 95, SEO = 100
- Konten mudah diupdate oleh owner via git commits (TypeScript data files)

### Non-Goals
- Tidak ada backend / database / API server
- Tidak ada CMS dashboard (konten hardcoded di komponen)
- Tidak ada authentication
- Tidak ada blog / commenting system
- Tidak ada analytics integration di fase 1 (bisa ditambah nanti)

## Tech Stack

| Layer | Technology | Alasan |
|-------|-----------|--------|
| Framework | Next.js 14+ (App Router) | Standar modern, static export support, SEO friendly |
| Language | TypeScript | Type safety, IDE autocomplete, refactor aman |
| Styling | Tailwind CSS | Utility-first, cepat, konsisten |
| Hosting | GitHub Pages | Gratis, sudah ada repo `imamnurhidayat7.github.io` |
| CI/CD | GitHub Actions | Auto-deploy saat push ke main |
| Font | Inter (Google Fonts) | Modern, clean, banyak dipakai tech companies |
| Icons | Simple Icons (CDN) atau Lucide React | Untuk tech stack icons |

## Architecture

### Folder Structure
```
portofolio/
├── app/
│   ├── layout.tsx          # Root layout (SEO meta, font, wrapper)
│   ├── page.tsx            # Homepage (semua sections)
│   ├── globals.css         # Tailwind directives + custom vars
│   └── not-found.tsx       # 404 page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav dengan smooth scroll
│   │   └── Footer.tsx      # Footer dengan social links
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About me
│   │   ├── Experience.tsx  # Timeline experience
│   │   ├── Projects.tsx    # Projects grid
│   │   ├── Skills.tsx      # Skills dengan kategori
│   │   └── Contact.tsx     # Contact section + form
│   └── ui/
│       ├── Button.tsx      # Reusable button
│       ├── SectionTitle.tsx # Heading dengan underline accent
│       └── Badge.tsx       # Tech stack badge
├── data/
│   ├── profile.ts          # Data pribadi
│   ├── experience.ts       # Array pengalaman
│   ├── projects.ts         # Array projects
│   └── skills.ts           # Array skills dengan kategori
├── public/
│   ├── images/             # Foto, project thumbnails
│   └── favicon.ico
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deploy workflow
├── next.config.js          # output: 'export', basePath config
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### Data Flow
1. Data didefinisikan sebagai TypeScript objects/arrays di `data/`
2. Komponen di `components/sections/` import data yang relevan
3. Data dirender sebagai JSX di komponen
4. Saat build, Next.js generate static HTML untuk setiap section
5. Static HTML + assets di-push ke GitHub Pages

### Key Decisions
- **Single page (SPA-style with anchors):** Semua sections di 1 halaman, navigasi pakai anchor links (#about, #projects, dll) dengan smooth scroll. Recruiter tidak perlu navigate ke banyak halaman.
- **Static export (`output: 'export'`):** Next.js generate pure HTML/CSS/JS, kompatibel dengan GitHub Pages.
- **No dynamic routing:** Karena single page, tidak perlu `[slug]` atau dynamic routes.

## Design System

### Color Palette (Light Mode)
```
--color-bg-primary:     #ffffff
--color-bg-secondary:   #f8f9fa
--color-text-primary:   #0a0a0a
--color-text-muted:     #6b7280
--color-accent:         #2563eb
--color-accent-hover:   #1d4ed8
--color-border:         #e5e7eb
```

### Typography
- **Font family:** Inter (Google Fonts), weights: 400, 500, 600, 700
- **Scale:**
  - `text-5xl md:text-6xl` — Hero name
  - `text-3xl md:text-4xl` — Section titles
  - `text-xl md:text-2xl` — Sub-headings
  - `text-base md:text-lg` — Body
  - `text-sm` — Captions / meta

### Spacing
- Container: `max-w-6xl mx-auto px-6`
- Section vertical padding: `py-20 md:py-28`
- Consistent 4/8/16/24/32/48/64 px scale (Tailwind defaults)

## Sections Detail

### 1. Hero
**Goal:** 5-detik first impression

**Content:**
- Small greeting: "Hi there 👋"
- Name: "Imam Nurhidayat" (text-5xl/6xl, bold)
- Animated role/title (rotating: "Full-Stack Developer", "Tech Enthusiast", dll)
- 1-2 kalimat tagline
- 2 CTA buttons: "Download CV" (primary) + "Contact Me" (secondary)
- Social icons row: GitHub, LinkedIn, Email, Instagram
- Profile photo di kanan (atau placeholder SVG)

**Layout:** 2 kolom (text left, image right) desktop, stacked mobile

### 2. About
**Content:**
- Heading: "About Me"
- 2-3 paragraf storytelling
- Quick facts grid: Pendidikan, Lokasi, Status, Bahasa

### 3. Experience
**Layout:** Vertical timeline dengan dot + line connector

**Per experience card:**
- Role (bold)
- Company + location
- Date range
- 3-5 achievement bullets (action verbs)
- Tech stack badges

### 4. Projects
**Layout:** Grid 2 kolom desktop, 1 kolom mobile

**Per project card:**
- Thumbnail image (16:9)
- Title + description
- Tech stack badges
- 2 action links: Live Demo + Source Code
- Hover effect: lift + shadow

### 5. Skills
**Layout:** 3 kategori cards

**Kategori:**
- Frontend (React, Next.js, TypeScript, Tailwind, HTML/CSS)
- Backend (Node.js, Express, PostgreSQL, REST API)
- Tools (Git, GitHub, VSCode, Figma, Docker)

**Per skill:** Icon + nama

### 6. Contact
**Content:**
- Heading: "Let's Connect"
- Form: Nama, Email, Pesan (submit via Formspree/Web3Forms — no backend)
- Alternative: Email langsung + social links

### 7. Footer
**Minimal:**
- Copyright
- Social icons
- "Built with Next.js & Tailwind CSS"

## Data Structures

### `data/profile.ts`
```typescript
export const profile = {
  name: "Imam Nurhidayat",
  title: "Full-Stack Developer",
  tagline: "...",
  email: "imamnurhidayat7@email.com",
  location: "Indonesia",
  available: true,
  avatar: "/images/profile.jpg",
  resumeUrl: "/cv-imam-nurhidayat.pdf",
  social: {
    github: "https://github.com/imamnurhidayat7",
    linkedin: "https://linkedin.com/in/imamnurhidayat7",
    instagram: "https://instagram.com/imamnurhidayat7",
  },
} as const;
```

### `data/experience.ts`
```typescript
export type Experience = {
  role: string;
  company: string;
  location: string;
  startDate: string; // "Jan 2024"
  endDate: string | "Present";
  description: string[]; // bullet points
  techStack: string[];
};

export const experiences: Experience[];
```

### `data/projects.ts`
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

export const projects: Project[];
```

### `data/skills.ts`
```typescript
export type Skill = {
  name: string;
  icon: string; // simple-icons slug atau component name
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[];
```

## Build & Deploy

### Local Development
```bash
npm install
npm run dev          # localhost:3000
npm run build        # generate static files di /out
npm run start        # preview production build
```

### Production Build
```bash
npm run build
# Output: folder /out berisi static HTML/CSS/JS/images
```

### Deployment Strategy
**Pilihan:** GitHub Actions auto-deploy ke GitHub Pages

**Workflow file:** `.github/workflows/deploy.yml`

**Trigger:** Push ke branch `main`

**Steps:**
1. Checkout repo
2. Setup Node.js (v20)
3. `npm ci` (install deps)
4. `npm run build` (generate /out)
5. Upload `/out` sebagai artifact
6. Deploy ke GitHub Pages

### Repo Setup Plan
Repo `imamnurhidayat7.github.io` sudah ada dan aktif. Langkah:
1. Backup file lama (jika perlu) — saat ini hanya README + index.html + style.css dari eksperimen awal
2. Hapus file lama yang tidak dipakai (index.html, style.css — akan direplace dengan Next.js build output)
3. Initialize Next.js project di **root repo** (replace konten lama)
4. Setup GitHub Actions workflow
5. Push ke main → auto deploy

**Keputusan:** Next.js di-init di **root repo** karena `imamnurhidayat7.github.io` adalah personal site URL yang standar untuk portfolio pribadi. URL utama `https://imamnurhidayat7.github.io` langsung menampilkan portfolio tanpa prefix path.

## Performance & SEO

### Performance Targets
- Lighthouse Performance: ≥ 95
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Total bundle size: < 200KB gzipped

### SEO Implementation
- Metadata di `app/layout.tsx`:
  - `title`, `description`
  - OpenGraph tags (image, url, type)
  - Twitter card tags
- Sitemap (Next.js auto-generate)
- robots.txt
- Semantic HTML (`<main>`, `<section>`, `<article>`)
- Alt text untuk semua images

### Accessibility
- Color contrast ratio ≥ 4.5:1 untuk body text
- Focus visible untuk keyboard navigation
- Skip to main content link
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels untuk icon-only buttons

## Testing Strategy

### Manual Testing Checklist
- [ ] All sections render correctly
- [ ] Responsive di mobile (375px), tablet (768px), desktop (1440px)
- [ ] Navbar smooth scroll berfungsi
- [ ] Social links membuka di tab baru
- [ ] CV download button works
- [ ] Contact form submit (via Formspree) terkirim ke email
- [ ] Lighthouse score sesuai target
- [ ] SEO meta tags muncul di preview (Twitter card, OG image)

### Automated Testing
- ESLint + TypeScript check di CI (GitHub Actions)
- Optional: Playwright untuk E2E test section utama

## Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| GitHub Pages tidak support `next/image` optimization | Pakai `<img>` biasa atau setup loader khusus |
| App Router static export limitasi (no ISR, no API routes) | Accept — pakai Formspree untuk form, no API needed |
| User lupa push ke main → site tidak update | Dokumentasi di README + reminder di PR template |
| Foto profil berat → slow load | Compress ke WebP, max 200KB |
| Recruiter buka di slow connection | Minimal JS, prioritize content, lazy load images |

## Success Criteria

Project dianggap sukses bila:
1. ✅ Site live di `https://imamnurhidayat7.github.io` dalam 2 hari kerja
2. ✅ Semua 6 sections render sempurna
3. ✅ Lighthouse score: Performance ≥ 95, Accessibility ≥ 95, SEO = 100
4. ✅ Responsive tested di 3 breakpoints
5. ✅ CV download berfungsi
6. ✅ Contact form submit berfungsi
7. ✅ README dokumentasi maintenance jelas

## Out of Scope (Future Enhancements)

- Blog / writing section
- Multi-language (i18n)
- Dark mode toggle
- Analytics (Plausible / Google Analytics)
- Testimonials section
- Case studies per project
- Animations lebih kompleks (parallax, 3D)