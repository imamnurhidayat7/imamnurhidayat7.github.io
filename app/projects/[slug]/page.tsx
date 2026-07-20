import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft, ExternalLink, Github, Calendar, Briefcase, CheckCircle2, Folder } from 'lucide-react';
import Link from 'next/link';
import { projects, type Project } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: 'Project Not Found' };
  }
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project: Project | undefined = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white pt-24 pb-20">
      <div className="container-narrow">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 transition hover:text-accent"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        {/* Header */}
        <header className="mt-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-gray-600">
            {project.description}
          </p>

          {/* Meta row */}
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-600">
            {project.role && (
              <span className="inline-flex items-center gap-1.5">
                <Briefcase size={16} className="text-accent" />
                {project.role}
              </span>
            )}
            {project.timeline && (
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={16} className="text-accent" />
                {project.timeline}
              </span>
            )}
          </div>

          {/* Links */}
          {(project.liveUrl || project.repoUrl) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-dark"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-accent hover:text-accent"
                >
                  <Github size={16} />
                  Source Code
                </a>
              )}
            </div>
          )}
        </header>

        {/* Cover image */}
        <div className="mt-8 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50 to-gray-100">
          <div className="flex flex-col items-center gap-3 text-gray-400">
            <Folder size={56} />
            <span className="text-xs font-medium text-gray-400">
              Project preview coming soon
            </span>
          </div>
        </div>

        {/* Tech stack */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">Tech Stack</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </section>

        {/* Long description */}
        {project.longDescription && project.longDescription.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-gray-900">Overview</h2>
            <div className="mt-3 space-y-4 text-gray-700 leading-relaxed">
              {project.longDescription.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </section>
        )}

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-gray-900">Highlights</h2>
            <ul className="mt-3 space-y-2">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-gray-900">Key Features</h2>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Gallery (optional) */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-gray-900">Gallery</h2>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.gallery.map((img, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Footer CTA */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 transition hover:text-accent"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
        </div>
      </div>
    </article>
  );
}
