'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProjectError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Project page error:', error);
  }, [error]);

  return (
    <div className="container-narrow py-20 md:py-28">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 transition hover:text-accent"
      >
        <ArrowLeft size={16} />
        Back to projects
      </Link>
      <div className="mt-10 max-w-md">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
          <AlertTriangle className="h-7 w-7 text-red-600" aria-hidden="true" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Couldn’t load this project</h1>
        <p className="mt-2 text-sm text-gray-600">
          Something went wrong while rendering this page. Please try again.
        </p>
        {error.digest && (
          <p className="mt-2 font-mono text-xs text-gray-400">Error ID: {error.digest}</p>
        )}
        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-hover"
        >
          <RefreshCw size={16} />
          Try again
        </button>
      </div>
    </div>
  );
}
