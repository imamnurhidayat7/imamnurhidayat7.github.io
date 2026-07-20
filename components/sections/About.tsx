import { SectionTitle } from '@/components/ui/SectionTitle';
import { profile } from '@/data/profile';

export function About() {
  return (
    <section id="about" className="bg-gray-50 py-20 dark:bg-gray-900 md:py-28">
      <div className="container-narrow">
        <SectionTitle
          title="About Me"
          subtitle="A little bit about who I am and what I do"
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="space-y-4 text-base leading-relaxed text-gray-700 dark:text-gray-300 md:text-lg">
            {profile.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {profile.quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-xl border border-gray-200 bg-white p-4 text-center dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  {fact.label}
                </div>
                <div className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}