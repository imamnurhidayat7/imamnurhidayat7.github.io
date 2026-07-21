export type Project = {
  /** URL-friendly unique identifier, e.g. "honeybee-b2b-platform". Used in /projects/[slug]. */
  slug: string;
  title: string;
  /** Short summary shown on the projects grid card. */
  description: string;
  /** Longer multi-paragraph description shown on the detail page. */
  longDescription?: string[];
  image: string;
  techStack: string[];
  liveUrl?: string;
  /** Optional secondary live URL, e.g. a separate supplier/admin portal for the same project. */
  liveUrlSecondary?: string;
  repoUrl?: string;
  featured: boolean;
  /** Your role in the project, e.g. "Full-Stack Developer". */
  role?: string;
  /** Year or date range, e.g. "2024" or "Jan 2024 – Mar 2024". */
  timeline?: string;
  /** Bullet-point highlights / key achievements. */
  highlights?: string[];
  /** Key features of the product. */
  features?: string[];
  /** Optional extra screenshot paths (relative to /public). */
  gallery?: string[];
};

export const projects: Project[] = [
  {
    slug: 'honeybee-b2b-platform',
    title: 'HoneyBee — B2B Commerce Platform with AI-Assisted Trade Agreement Generation',
    description:
      'A full-stack B2B platform with two frontends (customer + supplier/admin), real-time collaboration via Socket.IO, and Amazon Bedrock-powered first-draft trade agreement generation.',
    longDescription: [
      'HoneyBee is a full-stack B2B commerce platform built with two separate frontends: a customer-facing site (Next.js + Tailwind CSS) and a supplier/admin portal (React + Vite + Tailwind CSS).',
      'The backend is powered by Node.js (Express) with Socket.IO enabling real-time workflow updates and multi-user collaboration. Amazon Bedrock is integrated to generate first-draft trade agreements from structured inputs, which users can then review and iteratively refine inline.',
      'MongoDB data models were designed to persist users, products, deals, agreement versions, and workflow states across sessions.',
    ],
    image: '/images/portfolio/HoneyBee/01.png',
    gallery: [
      '/images/portfolio/HoneyBee/01.png',
      '/images/portfolio/HoneyBee/02.png',
      '/images/portfolio/HoneyBee/03.png',
      '/images/portfolio/HoneyBee/04.png',
      '/images/portfolio/HoneyBee/05.png',
      '/images/portfolio/HoneyBee/06.png',
      '/images/portfolio/HoneyBee/07.png',
      '/images/portfolio/HoneyBee/08.png',
      '/images/portfolio/HoneyBee/09.png',
      '/images/portfolio/HoneyBee/10.png',
      '/images/portfolio/HoneyBee/11.png',
      '/images/portfolio/HoneyBee/12.png',
    ],
    techStack: ['Next.js', 'React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Socket.IO', 'MongoDB', 'Amazon Bedrock'],
    liveUrl: 'https://honeybee-fe.vercel.app/',
    liveUrlSecondary: 'https://honeybee-khaki.vercel.app/',
    repoUrl: '',
    featured: true,
    role: 'Full-Stack Developer',
    timeline: '2025',
    highlights: [
      'Built two separate frontends sharing a single backend API',
      'Integrated Amazon Bedrock to generate first-draft trade agreements from structured inputs',
      'Enabled real-time multi-user collaboration with Socket.IO',
    ],
    features: [
      'Customer-facing storefront (Next.js + Tailwind CSS)',
      'Supplier/admin portal (React + Vite + Tailwind CSS)',
      'Real-time workflow updates with Socket.IO',
      'AI-assisted trade agreement drafting via Amazon Bedrock',
      'Inline review and iterative refinement of agreements',
      'MongoDB persistence for users, products, deals, and agreement versions',
    ],
  },
  {
    slug: 'ppia-auckland',
    title: 'PPIA Auckland — Official Organizational Platform',
    description:
      'A full-stack web platform for the Indonesian Student Association in Auckland featuring a CMS-driven landing page, admin dashboard, member management, event registration, article publishing, and an integrated election system.',
    longDescription: [
      'PPIA Auckland is the official digital platform for the Perhimpunan Pelajar Indonesia Auckland (Indonesian Student Association in Auckland), built to centralize member engagement, content management, and organizational operations.',
      'The frontend is built with Next.js 16 (App Router, Turbopack) and React 19, styled with Tailwind CSS 4 and animated with Framer Motion. The backend runs on Express 5 with a Prisma ORM layer over MySQL. The platform features a custom block-based Page Builder powered by Craft.js, a rich-text editor via TipTap, JWT authentication, role-based access control, and bilingual support (English/Indonesian).',
    ],
    image: '/images/portfolio/PPIA/01.png',
    gallery: [
      '/images/portfolio/PPIA/01.png',
      '/images/portfolio/PPIA/02.png',
      '/images/portfolio/PPIA/03.png',
      '/images/portfolio/PPIA/04.png',
      '/images/portfolio/PPIA/05.png',
      '/images/portfolio/PPIA/06.png',
      '/images/portfolio/PPIA/07.png',
      '/images/portfolio/PPIA/08.png',
      '/images/portfolio/PPIA/09.png',
      '/images/portfolio/PPIA/10.png',
      '/images/portfolio/PPIA/11.png',
      '/images/portfolio/PPIA/12.png',
      '/images/portfolio/PPIA/13.png',
      '/images/portfolio/PPIA/14.png',
    ],
    techStack: ['Next.js 16', 'Tailwind CSS 4', 'Express 5', 'Prisma', 'PostgreSQL', 'TypeScript'],
    repoUrl: '',
    featured: true,
    role: 'Full-Stack Developer',
    timeline: '2026',
    highlights: [
      'Built a custom block-based Page Builder with Craft.js for drag-and-drop CMS content creation',
      'Implemented a CMS-driven architecture where all landing sections, activity pages, and SEO metadata are editable from the admin dashboard',
      'Designed a bilingual platform (English/Indonesian) with internationalization and a multi-language content layer',
      'Integrated a complete election system (PEMIRA) with candidate management, voting, and real-time state tracking',
    ],
    features: [
      'CMS-driven landing page with dynamic sections (hero, about, events, news, video, membership CTA)',
      'Block-based Page Builder for drag-and-drop page composition with live preview',
      'Admin dashboard with member management and approval workflow',
      'Event management with registration and documentation galleries',
      'Article publishing with rich-text editor, tags, comments, and search',
      'Election system (PEMIRA) with candidate profiles and secure voting',
      'Bilingual support (English/Indonesian) across the platform',
      'Dark mode with full theme consistency across all pages',
      'Media upload system with image optimization via Sharp',
      'Newsletter subscription management',
      'SEO-optimized pages with customizable metadata and Open Graph blocks',
      'Audit logging for admin actions and accountability',
      'Analytics dashboard for tracking page views and engagement',
      'Role-based access control with JWT authentication',
      'QR code generation for event check-ins and sharing',
      'Toast notifications and responsive, mobile-first design',
    ],
  },
   {
    slug: 'uoa-bingo',
    title: 'UoA Bingo — Full-Stack Web App',
    description:
      'A lightweight interactive bingo web app with dynamic board generation and real-time state updates, built with React, Express, and MongoDB.',
    longDescription: [
      'UoA Bingo is a lightweight interactive web application that generates dynamic bingo boards and supports repeatable gameplay sessions.',
      'The frontend is built with React and Tailwind CSS, with an Express backend and MongoDB for session and state persistence. Real-time state updates keep gameplay in sync across sessions.',
    ],
    liveUrl: 'https://uo-a-bingo.vercel.app/',
    image: '/images/portfolio/UoA%20Bingo/01.png',
    gallery: [
      '/images/portfolio/UoA%20Bingo/01.png',
      '/images/portfolio/UoA%20Bingo/02.png',
      '/images/portfolio/UoA%20Bingo/03.png',
      '/images/portfolio/UoA%20Bingo/04.png',
      '/images/portfolio/UoA%20Bingo/05.png',
      '/images/portfolio/UoA%20Bingo/06.png',
      '/images/portfolio/UoA%20Bingo/07.png',
      '/images/portfolio/UoA%20Bingo/08.png',
      '/images/portfolio/UoA%20Bingo/09.png',
      '/images/portfolio/UoA%20Bingo/10.png',
      '/images/portfolio/UoA%20Bingo/11.png',
      '/images/portfolio/UoA%20Bingo/12.png',
      '/images/portfolio/UoA%20Bingo/13.png',
    ],
    techStack: ['React', 'Tailwind CSS', 'Express', 'MongoDB'],
    repoUrl: '',
    featured: false,
    role: 'Full-Stack Developer',
    timeline: '2025',
    highlights: [
      'Implemented dynamic board generation for repeatable gameplay',
      'Used MongoDB for session and state persistence with real-time updates',
    ],
    features: [
      'Dynamic bingo board generation',
      'Real-time state updates',
      'Session persistence via MongoDB',
      'Lightweight, responsive UI with Tailwind CSS',
    ],
  },
  {
    slug: 'interactive-maps-uoa',
    title: 'Interactive Maps — University of Auckland',
    description:
      'An interactive maps-style full-stack web app for location discovery with search, filtering, and detail views, built with React, Express, and MongoDB.',
    longDescription: [
      'Interactive Maps is a full-stack web application that delivers a maps-style browsing experience for discovering locations on the University of Auckland campus.',
      'The frontend is built with React and Tailwind CSS, backed by an Express API and MongoDB for data management. It supports search and filtering with interactive UI components for location discovery and detailed views.',
    ],
    image: '/images/portfolio/UoA%20Map/01.png',
    gallery: [
      '/images/portfolio/UoA%20Map/01.png',
      '/images/portfolio/UoA%20Map/02.png',
    ],
    techStack: ['React', 'Tailwind CSS', 'Express', 'MongoDB'],
    repoUrl: '',
    featured: false,
    role: 'Full-Stack Developer',
    timeline: '2025',
    highlights: [
      'Built a maps-style UX for campus location discovery',
      'Implemented search and filtering with interactive UI components',
    ],
    features: [
      'Interactive map-style browsing experience',
      'Search and filtering functionality',
      'Location detail views',
      'Express API with MongoDB data management',
    ],
  },
 
];