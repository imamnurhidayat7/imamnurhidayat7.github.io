import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200 dark:bg-gray-800 dark:text-gray-200',
        className
      )}
    >
      {children}
    </span>
  );
}