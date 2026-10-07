import React from 'react';
import { FileSearch } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  title = 'Tidak Ada Data',
  description = 'Belum ada data yang tersedia saat ini.',
  icon,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center py-12 text-center', className)}>
      <div className="mb-4 text-gray-300">
        {icon || <FileSearch className="h-12 w-12" />}
      </div>
      <h3 className="text-gray-700 font-semibold text-base mb-1">{title}</h3>
      <p className="text-gray-400 text-sm max-w-sm">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
