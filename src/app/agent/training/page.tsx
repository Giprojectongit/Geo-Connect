'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { TrainingCard } from '@/components/opportunities/opportunity-cards';
import { DemoBadge } from '@/components/ui/badges';
import { mockTrainings } from '@/lib/mock-data';

export default function AgentTrainingPage() {
  return (
    <DashboardLayout title="Pelatihan">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Program Pelatihan</h1>
            <p className="text-gray-500 mt-1">Program pelatihan yang tersedia untuk anggota komunitas Anda.</p>
          </div>
          <DemoBadge />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {mockTrainings.map(t => (
            <TrainingCard key={t.id} training={t} onApply={() => {}} showParticipants />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
