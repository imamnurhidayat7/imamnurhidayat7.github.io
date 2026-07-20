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