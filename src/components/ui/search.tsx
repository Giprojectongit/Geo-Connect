'use client';

import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function SearchBar({
  placeholder = 'Cari...',
  value,
  onChange,
  className,
  size = 'md',
}: SearchBarProps) {
  const [internalValue, setInternalValue] = useState('');
  const currentValue = value !== undefined ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (value === undefined) setInternalValue(newValue);
    onChange?.(newValue);
  };

  const handleClear = () => {
    if (value === undefined) setInternalValue('');
    onChange?.('');
  };

  const sizes = {
    sm: 'py-1.5 pl-8 pr-3 text-sm',
    md: 'py-2 pl-10 pr-4 text-sm',
    lg: 'py-3 pl-11 pr-4 text-base',
  };

  const iconSizes = {
    sm: 'h-3.5 w-3.5 left-2.5',
    md: 'h-4 w-4 left-3',
    lg: 'h-5 w-5 left-3.5',
  };

  return (
    <div className={cn('relative', className)}>
      <Search className={cn('absolute top-1/2 -translate-y-1/2 text-gray-400', iconSizes[size])} />
      <input
        type="text"
        value={currentValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={cn(
          'w-full rounded-lg border border-gray-300 bg-white',
          'focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500',
          'placeholder:text-gray-400 text-gray-900',
          'transition-all duration-150',
          sizes[size],
          currentValue ? 'pr-8' : ''
        )}
      />
      {currentValue && (
        <button
          onClick={handleClear}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

interface FilterOption {
  value: string;
  label: string;
}

interface FilterSelectProps {
  label?: string;
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function FilterSelect({ label, options, value, onChange, className }: FilterSelectProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      {label && <label className="text-xs text-gray-500 font-medium">{label}</label>}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-8 text-sm text-gray-900
          focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
          transition-all duration-150"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
