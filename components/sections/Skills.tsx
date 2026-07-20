import { Code2, Server, Wrench } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { skillCategories } from '@/data/skills';

const categoryIcons = [Code2, Server, Wrench];

export function Skills() {
  return (
    <section id="skills" className="bg-white py-20 dark:bg-gray-900 md:py-28">
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
                className="rounded-xl border border-gray-200 bg-white p-6 transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-accent dark:bg-blue-900/30">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {cat.category}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center rounded-md bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:ring-gray-600"
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