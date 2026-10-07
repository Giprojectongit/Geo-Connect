'use client';

import React from 'react';
import { Globe, Users, Calendar, ChevronRight, Plus } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DemoBadge, StatusBadge } from '@/components/ui/badges';
import { mockCommunityPrograms } from '@/lib/mock-data';
import { formatShortDate } from '@/lib/utils';

const categoryColors: Record<string, string> = {
  Training: 'bg-blue-50 text-blue-700',
  UMKM: 'bg-amber-50 text-amber-700',
  'Direct-use': 'bg-emerald-50 text-emerald-700',
  Education: 'bg-purple-50 text-purple-700',
  'Community Development': 'bg-teal-50 text-teal-700',
  Employment: 'bg-green-50 text-green-700',
};

export default function CommunityProgramsPage() {
  return (
    <DashboardLayout title="Program Komunitas">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Program Komunitas</h1>
            <p className="text-gray-500 mt-1">Kelola seluruh program pemberdayaan komunitas lokal.</p>
          </div>
          <div className="flex items-center gap-3">
            <DemoBadge />
            <Button>
              <Plus className="h-4 w-4" /> Buat Program
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Program', value: mockCommunityPrograms.length, color: 'text-gray-900' },
            { label: 'Aktif', value: mockCommunityPrograms.filter(p => p.status === 'active').length, color: 'text-emerald-600' },
            { label: 'Total Target', value: mockCommunityPrograms.reduce((s, p) => s + p.targetParticipants, 0), color: 'text-teal-600' },
            { label: 'Peserta Saat Ini', value: mockCommunityPrograms.reduce((s, p) => s + p.currentParticipants, 0), color: 'text-blue-600' },
          ].map((s) => (
            <div key={s.label} className="text-center p-3 bg-white rounded-lg border border-gray-200">
              <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {mockCommunityPrograms.map((program) => {
            const fillPercent = Math.round((program.currentParticipants / program.targetParticipants) * 100);
            return (
              <Card key={program.id} hover>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <StatusBadge status={program.status} />
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[program.category] || 'bg-gray-100 text-gray-600'}`}>
                          {program.category}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900">{program.name}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{program.industryName}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{program.description}</p>

                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Globe className="h-3.5 w-3.5" />
                      {program.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {program.duration}
                    </span>
                  </div>

                  {/* Progress */}
                  <div>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" /> Peserta
                      </span>
                      <span>{program.currentParticipants}/{program.targetParticipants}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div
                        className={`h-2 rounded-full ${fillPercent >= 80 ? 'bg-emerald-500' : 'bg-teal-400'}`}
                        style={{ width: `${Math.min(fillPercent, 100)}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">{fillPercent}% terisi</div>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500">
                    <span>{formatShortDate(program.startDate)} – {formatShortDate(program.endDate)}</span>
                    <Button size="sm" variant="outline">
                      Detail <ChevronRight className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
