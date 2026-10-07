import * as React from 'react';
import { cn } from '@/lib/utils';
import { getStatusColor, getStatusLabel } from '@/lib/utils';

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        getStatusColor(status),
        className
      )}
    >
      {getStatusLabel(status)}
    </span>
  );
}

interface SkillTagProps {
  skill: string;
  variant?: 'default' | 'outline' | 'highlight';
  className?: string;
}

export function SkillTag({ skill, variant = 'default', className }: SkillTagProps) {
  const variants = {
    default: 'bg-teal-50 text-teal-700 border border-teal-200',
    outline: 'bg-transparent text-gray-600 border border-gray-300',
    highlight: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {skill}
    </span>
  );
}

interface DemoBadgeProps {
  className?: string;
}

export function DemoBadge({ className }: DemoBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200',
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
      Demo Data
    </span>
  );
}
