import { ExternalLink, Github, ArrowRight, Images } from 'lucide-react';
import Link from 'next/link';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Badge } from '@/components/ui/Badge';
import { projects } from '@/data/projects';

export function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-20 dark:bg-gray-900 md:py-28">
      <div className="container-narrow">
        <SectionTitle
          title="Projects"
          subtitle="A selection of things I've built"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="relative block aspect-video w-full overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100 dark:from-blue-950 dark:to-gray-900"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay for readability */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {/* Gallery count badge */}
                {project.gallery && project.gallery.length > 0 && (
                  <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    <Images size={12} />
                    {project.gallery.length}
                  </div>
                )}
                {/* View detail hint */}
                <div className="absolute bottom-3 left-3 inline-flex translate-y-2 items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-800 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-gray-900/90 dark:text-white">
                  View case study
                  <ArrowRight size={12} />
                </div>
              </Link>

              <div className="flex flex-1 flex-col p-6">
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-lg font-semibold text-gray-900 transition group-hover:text-accent dark:text-white">
                    {project.title}
                  </h3>
                </Link>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition hover:text-accent-dark"
                  >
                    View Details
                    <ArrowRight size={14} />
                  </Link>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 transition hover:text-accent dark:text-gray-200"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 transition hover:text-accent dark:text-gray-200"
                    >
                      <Github size={14} />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}