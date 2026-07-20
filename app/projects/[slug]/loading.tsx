import { ArrowLeft } from 'lucide-react';

export default function Loading() {
  return (
    <div className="container-narrow py-12 md:py-16" role="status" aria-label="Loading project">
      {/* Back link skeleton */}
      <div className="mb-8 flex items-center gap-2 text-sm text-gray-400">
        <ArrowLeft size={16} aria-hidden="true" />
        <span>Back to projects</span>
      </div>

      {/* Hero skeleton */}
      <div className="animate-pulse">
        <div className="h-8 w-2/3 rounded bg-gray-200" />
        <div className="mt-3 h-5 w-5/6 rounded bg-gray-200" />
        <div className="mt-3 h-5 w-4/6 rounded bg-gray-200" />

        {/* Meta row */}
        <div className="mt-6 flex gap-4">
          <div className="h-4 w-24 rounded bg-gray-200" />
          <div className="h-4 w-20 rounded bg-gray-200" />
        </div>

        {/* Image */}
        <div className="mt-8 aspect-video w-full rounded-xl bg-gray-200" />

        {/* Tech stack pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          <div className="h-6 w-16 rounded-full bg-gray-200" />
          <div className="h-6 w-20 rounded-full bg-gray-200" />
          <div className="h-6 w-14 rounded-full bg-gray-200" />
          <div className="h-6 w-24 rounded-full bg-gray-200" />
        </div>

        {/* Content lines */}
        <div className="mt-8 space-y-3">
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-11/12 rounded bg-gray-200" />
          <div className="h-4 w-10/12 rounded bg-gray-200" />
          <div className="h-4 w-9/12 rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
