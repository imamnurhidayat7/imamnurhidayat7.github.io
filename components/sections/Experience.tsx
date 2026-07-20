import { Briefcase, GraduationCap, LucideIcon } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Badge } from '@/components/ui/Badge';
import { experiences, education } from '@/data/experience';

type TimelineEntry = {
  title: string;
  subtitle: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  techStack: string[];
};

type TimelineListProps = {
  items: TimelineEntry[];
  icon: LucideIcon;
};

function TimelineList({ items, icon: Icon }: TimelineListProps) {
  return (
    <div className="relative">
      {/* Center line */}
      <div className="absolute left-4 top-0 h-full w-px -translate-x-1/2 bg-gray-200 dark:bg-gray-700 md:left-1/2" />

      <div className="space-y-12">
        {items.map((item, i) => (
          <div
            key={`${item.subtitle}-${item.startDate}`}
            className={`relative flex items-start gap-6 md:gap-8 ${
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <div className="absolute left-4 top-2 z-10 -translate-x-1/2 md:left-1/2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white ring-2 ring-accent dark:bg-gray-800 dark:ring-accent">
                <Icon size={14} className="text-accent" />
              </div>
            </div>

            <div className="ml-12 flex-1 md:ml-0 md:w-1/2">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    {item.startDate} — {item.endDate}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent">
                  {item.subtitle}
                  <span className="text-gray-500 dark:text-gray-400"> • {item.location}</span>
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-200">
                  {item.description.map((line, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                {item.techStack.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.techStack.map((tech) => (
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
  );
}

export function Experience() {
  const workItems: TimelineEntry[] = experiences.map((exp) => ({
    title: exp.role,
    subtitle: exp.company,
    location: exp.location,
    startDate: exp.startDate,
    endDate: exp.endDate,
    description: exp.description,
    techStack: exp.techStack,
  }));

  const educationItems: TimelineEntry[] = education.map((edu) => ({
    title: edu.degree,
    subtitle: edu.institution,
    location: edu.location,
    startDate: edu.startDate,
    endDate: edu.endDate,
    description: edu.description,
    techStack: edu.techStack,
  }));

  return (
    <section id="experience" className="bg-white py-20 dark:bg-gray-900 md:py-28">
      <div className="container-narrow">
        <SectionTitle
          title="Experience & Education"
          subtitle="My professional journey and academic background"
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white">
            <Briefcase size={20} className="text-accent" />
            Work Experience
          </h3>
          <TimelineList items={workItems} icon={Briefcase} />

          <h3 className="mb-6 mt-16 flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white">
            <GraduationCap size={20} className="text-accent" />
            Education
          </h3>
          <TimelineList items={educationItems} icon={GraduationCap} />
        </div>
      </div>
    </section>
  );
}