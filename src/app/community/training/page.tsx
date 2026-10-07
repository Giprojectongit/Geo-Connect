'use client';
import React from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { TrainingCard } from '@/components/opportunities/opportunity-cards';
import { DemoBadge } from '@/components/ui/badges';
import { mockTrainings } from '@/lib/mock-data';

export default function CommunityTrainingPage() {
  const available = mockTrainings.filter(t => t.status !== 'completed');
  return (
    <DashboardLayout title="Pelatihan">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Program Pelatihan</h1>
            <p className="text-gray-500 mt-1">Ikuti pelatihan untuk meningkatkan skill dan daya saing Anda.</p>
          </div>
          <DemoBadge />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {available.map(t => (
            <TrainingCard
              key={t.id}
              training={t}
              onApply={() => alert(`Demo: Pendaftaran "${t.title}" akan tersedia di versi lengkap`)}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
