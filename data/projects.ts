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