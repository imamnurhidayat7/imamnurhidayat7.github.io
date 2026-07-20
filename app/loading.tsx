import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-label="Loading">
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="h-10 w-10 animate-spin text-accent" aria-hidden="true" />
        <span className="text-sm font-medium text-gray-500">Loading…</span>
      </div>
    </div>
  );
}
