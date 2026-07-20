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
            <div className="absolute left-4 top-0 h-full w-px bg-gray-200 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <div
                  key={`${exp.company}-${exp.startDate}`}
                  className={`relative flex items-start gap-6 md:gap-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-4 top-2 z-10 -translate-x-1/2 md:left-1/2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white ring-2 ring-accent">
                      <Briefcase size={14} className="text-accent" />
                    </div>
                  </div>

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