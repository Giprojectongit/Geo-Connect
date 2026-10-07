'use client';

export const dynamic = 'force-dynamic';

import React from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { JobCard } from '@/components/opportunities/opportunity-cards';
import { DemoBadge } from '@/components/ui/badges';
import { mockJobs } from '@/lib/mock-data';

export default function AgentJobsPage() {
  return (
    <DashboardLayout title="Lowongan">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Informasi Lowongan</h1>
            <p className="text-gray-500 mt-1">Daftar lowongan yang dapat Anda rekomendasikan ke anggota komunitas.</p>
          </div>
          <DemoBadge />
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {mockJobs.filter(j => j.status === 'open').map(job => (
            <JobCard key={job.id} job={job} variant="community" onApply={() => {}} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
