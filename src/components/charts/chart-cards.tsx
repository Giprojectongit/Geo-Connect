'use client';

import React from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { DemoBadge } from '@/components/ui/badges';

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  showDemoBadge?: boolean;
  className?: string;
}

export function ChartCard({ title, subtitle, children, showDemoBadge = true, className }: ChartCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{title}</h3>
            {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
          </div>
          {showDemoBadge && <div className="self-start sm:self-auto"><DemoBadge /></div>}
        </div>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}

interface SocialTrendChartProps {
  data: Array<{ month: string; training: number; hires: number; internship: number }>;
}

export function SocialTrendChart({ data }: SocialTrendChartProps) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} barSize={12}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#9ca3af' }} />
        <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} />
        <Tooltip
          contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '12px' }}
        />
        <Legend wrapperStyle={{ fontSize: '12px' }} />
        <Bar dataKey="training" name="Peserta Pelatihan" fill="#16a34a" radius={[2, 2, 0, 0]} />
        <Bar dataKey="hires" name="Rekrutan Lokal" fill="#0d9488" radius={[2, 2, 0, 0]} />
        <Bar dataKey="internship" name="Peserta Magang" fill="#0891b2" radius={[2, 2, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

interface EconomicPieChartProps {
  data: Array<{ name: string; value: number; color: string }>;
}

export function EconomicPieChart({ data }: EconomicPieChartProps) {
  const formatValue = (value: number) => {
    if (value >= 1000000000) return `Rp ${(value / 1000000000).toFixed(1)}M`;
    if (value >= 1000000) return `Rp ${(value / 1000000).toFixed(0)}Jt`;
    return `Rp ${value.toLocaleString('id-ID')}`;
  };

  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          innerRadius={45}
          dataKey="value"
          label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value) => [formatValue(Number(value)), '']}
          contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '12px' }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

interface DirectUseBarChartProps {
  data: Array<{ name: string; value: number }>;
}

export function DirectUseBarChart({ data }: DirectUseBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} layout="vertical" barSize={18}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={false} />
        <XAxis type="number" tick={{ fontSize: 11, fill: '#9ca3af' }} />
        <YAxis dataKey="name" type="category" tick={{ fontSize: 11, fill: '#6b7280' }} width={90} />
        <Tooltip
          contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '12px' }}
        />
        <Bar dataKey="value" name="Proyek" fill="#16a34a" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

interface GrowthLineChartProps {
  data: Array<{ month: string; members: number; opportunities: number; placements: number }>;
}

export function GrowthLineChart({ data }: GrowthLineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#9ca3af' }} />
        <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} />
        <Tooltip
          contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '12px' }}
        />
        <Legend wrapperStyle={{ fontSize: '12px' }} />
        <Line type="monotone" dataKey="members" name="Anggota" stroke="#16a34a" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="opportunities" name="Peluang" stroke="#0d9488" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="placements" name="Penempatan" stroke="#d97706" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
