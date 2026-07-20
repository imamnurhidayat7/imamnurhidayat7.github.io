export type Experience = {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  techStack: string[];
};

export type Education = {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  techStack: string[];
};

export const experiences: Experience[] = [
  {
    role: 'Software Developer',
    company: 'Ministry of Agrarian and Spatial Planning / National Land Agency',
    location: 'Indonesia',
    startDate: 'May 2022',
    endDate: 'Feb 2026',
    description: [
      "Delivered and maintained modules for Indonesia's Electronic Land Certificate platform, a secure large-scale government digital service with 24/7 availability requirements.",
      'Built and maintained full-stack features and services, translating policy and operational requirements into reliable digital workflows in close collaboration with stakeholders.',
      'Developed and optimised Oracle SQL queries and data workflows to improve performance, reliability, and data integrity in production environments.',
      'Supported 24/7 service reliability through incident triage, root-cause analysis, and cross-team coordination to restore service and prevent recurrence.',
      'Applied QA-minded delivery practices including test planning, regression testing, and code review to reduce release risk and improve software quality.',
      'Used LLM tools to accelerate debugging, documentation, and test case drafting, with manual validation aligned to government security and compliance requirements.',
    ],
    techStack: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Oracle', 'PostgreSQL', 'Laravel', 'WordPress'],
  },
  {
    role: 'Web Developer',
    company: 'Sarana Solusindo Informatika',
    location: 'Indonesia',
    startDate: '2019',
    endDate: '2022',
    description: [
      'Built and maintained internal company web applications and business tools using Laravel, tailored to operational requirements across departments.',
      'Developed and maintained WordPress-based sites, working directly with stakeholders to translate business needs into functioning web tools.',
    ],
    techStack: ['PHP', 'Laravel', 'WordPress', 'JavaScript', 'MySQL'],
  },
];

export const education: Education[] = [
  {
    degree: 'Master of Information Technology',
    institution: 'University of Auckland',
    location: 'New Zealand',
    startDate: '2025',
    endDate: 'Expected 2027',
    description: [
      'Currently pursuing a Master of Information Technology at the University of Auckland.',
      'Coursework and projects span full-stack web development, databases, and applied software engineering practices.',
    ],
    techStack: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    degree: 'Bachelor of Informatics Engineering',
    institution: 'Brawijaya University',
    location: 'Indonesia',
    startDate: '2015',
    endDate: '2019',
    description: [
      'Earned a Bachelor degree in Informatics Engineering, building foundations in software engineering, data structures, algorithms, and databases.',
    ],
    techStack: ['Java', 'C++', 'PHP', 'SQL'],
  },
];