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
    image: '/images/project-1.svg',
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
    slug: 'interactive-maps-uoa',
    title: 'Interactive Maps — University of Auckland',
    description:
      'An interactive maps-style full-stack web app for location discovery with search, filtering, and detail views, built with React, Express, and MongoDB.',
    longDescription: [
      'Interactive Maps is a full-stack web application that delivers a maps-style browsing experience for discovering locations on the University of Auckland campus.',
      'The frontend is built with React and Tailwind CSS, backed by an Express API and MongoDB for data management. It supports search and filtering with interactive UI components for location discovery and detailed views.',
    ],
    image: '/images/project-2.svg',
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
  {
    slug: 'uoa-bingo',
    title: 'UoA Bingo — Full-Stack Web App',
    description:
      'A lightweight interactive bingo web app with dynamic board generation and real-time state updates, built with React, Express, and MongoDB.',
    longDescription: [
      'UoA Bingo is a lightweight interactive web application that generates dynamic bingo boards and supports repeatable gameplay sessions.',
      'The frontend is built with React and Tailwind CSS, with an Express backend and MongoDB for session and state persistence. Real-time state updates keep gameplay in sync across sessions.',
    ],
    image: '/images/project-3.svg',
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
];