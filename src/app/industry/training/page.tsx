'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { DemoBadge } from '@/components/ui/badges';
import { TrainingCard } from '@/components/opportunities/opportunity-cards';
import { mockTrainings } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function IndustryTrainingPage() {
  return (
    <DashboardLayout title="Program Training">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Program Pelatihan</h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Buat dan kelola program pelatihan untuk masyarakat lokal.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <DemoBadge />
            <Button size="sm">
              <Plus className="h-4 w-4" /> Buat Training
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {[
            { label: 'Total Program', value: mockTrainings.length },
            { label: 'Total Peserta', value: mockTrainings.reduce((s, t) => s + t.participants, 0) },
            { label: 'Dengan Sertifikat', value: mockTrainings.filter(t => t.certificate).length },
          ].map((s) => (
            <div key={s.label} className="text-center p-3.5 sm:p-4 bg-white rounded-xl border border-gray-200">
              <div className="text-xl sm:text-2xl font-bold text-gray-900">{s.value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {mockTrainings.map((training) => (
            <TrainingCard
              key={training.id}
              training={training}
              showParticipants={true}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
