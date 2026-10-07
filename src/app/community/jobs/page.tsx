'use client';

export const dynamic = 'force-dynamic';
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { JobCard } from '@/components/opportunities/opportunity-cards';
import { SearchBar, FilterSelect } from '@/components/ui/search';
import { Card } from '@/components/ui/card';
import { DemoBadge } from '@/components/ui/badges';
import { mockJobs } from '@/lib/mock-data';

const typeOptions = [
  { value: 'all', label: 'Semua Tipe' },
  { value: 'full-time', label: 'Full Time' },
  { value: 'part-time', label: 'Part Time' },
  { value: 'contract', label: 'Kontrak' },
];

export default function CommunityJobsPage() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');

  const filtered = mockJobs.filter(j => {
    const matchSearch = j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.skills.some(s => s.toLowerCase().includes(search.toLowerCase()));
    const matchType = typeFilter === 'all' || j.type === typeFilter;
    return j.status === 'open' && matchSearch && matchType;
  });

  return (
    <DashboardLayout title="Peluang Kerja">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Peluang Kerja</h1>
            <p className="text-gray-500 mt-1">Temukan pekerjaan yang sesuai dengan skill dan lokasi Anda.</p>
          </div>
          <DemoBadge />
        </div>
        <Card>
          <div className="p-4 flex flex-wrap gap-3">
            <SearchBar placeholder="Cari posisi atau skill..." value={search} onChange={setSearch} className="flex-1 min-w-48" />
            <FilterSelect options={typeOptions} value={typeFilter} onChange={setTypeFilter} />
          </div>
        </Card>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              variant="community"
              showMatchScore
              matchScore={job.bestMatch}
              onApply={() => alert(`Demo: Lamaran untuk "${job.title}" akan diproses di versi lengkap`)}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
