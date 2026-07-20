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
      { name: 'React.js' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'Vite' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Socket.IO' },
      { name: 'PHP (Laravel)' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'Oracle' },
      { name: 'MongoDB' },
      { name: 'PostgreSQL' },
      { name: 'MariaDB' },
    ],
  },
  {
    category: 'QA & Delivery',
    skills: [
      { name: 'Test Planning' },
      { name: 'Regression Testing' },
      { name: 'Code Review' },
      { name: 'Incident Triage' },
      { name: 'Root-Cause Analysis' },
      { name: 'Production Support (24/7)' },
    ],
  },
  {
    category: 'AI Tools',
    skills: [
      { name: 'Claude Code' },
      { name: 'GitHub Copilot' },
      { name: 'Cursor' },
    ],
  },
];