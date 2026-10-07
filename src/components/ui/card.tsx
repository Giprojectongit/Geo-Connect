import * as React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export function Card({ children, className, hover = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl border border-gray-200 shadow-sm',
        hover && 'hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('px-4 py-3.5 sm:px-6 sm:py-4 border-b border-gray-100', className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('px-4 py-3.5 sm:px-6 sm:py-4', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('px-4 py-3.5 sm:px-6 sm:py-4 border-t border-gray-100', className)} {...props}>
      {children}
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  change?: number;
  changeType?: 'increase' | 'decrease' | 'neutral';
  description?: string;
  color?: 'green' | 'teal' | 'gold' | 'gray';
  className?: string;
}

export function StatCard({
  label,
  value,
  icon,
  change,
  changeType = 'neutral',
  description,
  color = 'green',
  className,
}: StatCardProps) {
  const colorMap = {
    green: 'bg-emerald-50 text-emerald-600',
    teal: 'bg-teal-50 text-teal-600',
    gold: 'bg-amber-50 text-amber-600',
    gray: 'bg-gray-100 text-gray-600',
  };

  return (
    <Card className={cn('p-3.5 sm:p-5', className)}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm text-gray-500 font-medium truncate">{label}</p>
          <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-0.5 sm:mt-1">{value}</p>
          {description && (
            <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5 truncate">{description}</p>
          )}
          {change !== undefined && (
            <div className="flex items-center mt-1.5 sm:mt-2 gap-1 flex-wrap">
              <span
                className={cn(
                  'text-[11px] sm:text-xs font-medium',
                  changeType === 'increase' && 'text-emerald-600',
                  changeType === 'decrease' && 'text-red-500',
                  changeType === 'neutral' && 'text-gray-500'
                )}
              >
                {changeType === 'increase' && '↑ '}
                {changeType === 'decrease' && '↓ '}
                {change > 0 ? '+' : ''}{change}% <span className="hidden sm:inline">bulan ini</span>
              </span>
            </div>
          )}
        </div>
        <div className={cn('p-2 sm:p-2.5 rounded-lg shrink-0', colorMap[color])}>
          {icon}
        </div>
      </div>
    </Card>
  );
}
