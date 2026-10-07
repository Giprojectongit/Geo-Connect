import React from 'react';
import { cn } from '@/lib/utils';
import { getMatchColor } from '@/lib/utils';

interface MatchScoreProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export function MatchScore({ score, size = 'md', showLabel = true, className }: MatchScoreProps) {
  const sizes = {
    sm: { circle: 40, stroke: 3, text: 'text-xs' },
    md: { circle: 56, stroke: 4, text: 'text-sm' },
    lg: { circle: 72, stroke: 5, text: 'text-base' },
  };

  const { circle, stroke, text } = sizes[size];
  const radius = (circle - stroke * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = ((100 - score) / 100) * circumference;

  const getStrokeColor = (s: number) => {
    if (s >= 85) return '#16a34a'; // emerald-600
    if (s >= 70) return '#0d9488'; // teal-600
    if (s >= 55) return '#d97706'; // amber-600
    return '#9ca3af'; // gray-400
  };

  return (
    <div className={cn('flex flex-col items-center gap-1', className)}>
      <svg width={circle} height={circle} className="-rotate-90">
        <circle
          cx={circle / 2}
          cy={circle / 2}
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={stroke}
        />
        <circle
          cx={circle / 2}
          cy={circle / 2}
          r={radius}
          fill="none"
          stroke={getStrokeColor(score)}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className={cn('font-bold fill-current rotate-90', text, getMatchColor(score))}
          transform={`rotate(90, ${circle / 2}, ${circle / 2})`}
          style={{ fontSize: size === 'sm' ? '10px' : size === 'md' ? '13px' : '16px' }}
        >
          {score}%
        </text>
      </svg>
      {showLabel && (
        <span className={cn('font-medium', size === 'sm' ? 'text-xs' : 'text-xs', getMatchColor(score))}>
          Match
        </span>
      )}
    </div>
  );
}

interface MatchBarProps {
  score: number;
  label?: string;
  showScore?: boolean;
  className?: string;
}

export function MatchBar({ score, label, showScore = true, className }: MatchBarProps) {
  const getBarColor = (s: number) => {
    if (s >= 85) return 'bg-emerald-500';
    if (s >= 70) return 'bg-teal-500';
    if (s >= 55) return 'bg-amber-500';
    return 'bg-gray-400';
  };

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {label && <span className="text-xs text-gray-600 w-32 shrink-0">{label}</span>}
      <div className="flex-1 bg-gray-100 rounded-full h-2">
        <div
          className={cn('h-2 rounded-full transition-all duration-700', getBarColor(score))}
          style={{ width: `${score}%` }}
        />
      </div>
      {showScore && (
        <span className={cn('text-xs font-semibold w-10 text-right', getMatchColor(score))}>
          {score}%
        </span>
      )}
    </div>
  );
}
