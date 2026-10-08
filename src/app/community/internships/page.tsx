'use client';

export const dynamic = 'force-dynamic';
import React from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { DemoBadge, StatusBadge, SkillTag } from '@/components/ui/badges';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockInternships } from '@/lib/mock-data';
import { MapPin, Clock, Building2, Calendar } from 'lucide-react';
import { formatShortDate } from '@/lib/utils';

export default function CommunityInternshipsPage() {
  return (
    <DashboardLayout title="Magang">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Program Magang</h1>
            <p className="text-gray-500 mt-1">Dapatkan pengalaman kerja di industri geothermal.</p>
          </div>
          <DemoBadge />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {mockInternships.map(int => (
            <Card key={int.id} hover>
              <CardContent className="p-5">
                <StatusBadge status={int.status} />
                <h3 className="font-semibold text-gray-900 text-base mt-2">{int.title}</h3>
                <div className="space-y-1 mt-2">
                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <Building2 className="h-3.5 w-3.5" /> {int.industryName}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <MapPin className="h-3.5 w-3.5" /> {int.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <Clock className="h-3.5 w-3.5" /> {int.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <Calendar className="h-3.5 w-3.5" /> Mulai {formatShortDate(int.startDate)}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {int.skills.map(s => <SkillTag key={s} skill={s} />)}
                </div>
                {int.allowance && (
                  <div className="mt-3 text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded px-2 py-1">
                    ðŸ’° Uang saku (simulasi): {int.allowance}
                  </div>
                )}
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <Button className="w-full" onClick={() => alert('Demo: Lamaran magang akan diproses di versi lengkap')}>
                    Daftar Magang
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
