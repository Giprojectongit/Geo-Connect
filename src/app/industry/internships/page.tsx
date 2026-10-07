'use client';

export const dynamic = 'force-dynamic';

import React from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { DemoBadge } from '@/components/ui/badges';
import { TrainingCard } from '@/components/opportunities/opportunity-cards';
import { mockInternships } from '@/lib/mock-data';
import { Card, CardContent } from '@/components/ui/card';
import { StatusBadge, SkillTag } from '@/components/ui/badges';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, Calendar, Building2 } from 'lucide-react';
import { formatShortDate } from '@/lib/utils';

export default function IndustryInternshipsPage() {
  return (
    <DashboardLayout title="Program Internship">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Program Internship</h1>
            <p className="text-gray-500 mt-1">Kelola program magang untuk talenta lokal.</p>
          </div>
          <DemoBadge />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {mockInternships.map((internship) => {
            const fillPercent = Math.round((internship.applicants / internship.quota) * 100);
            return (
              <Card key={internship.id} hover>
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <StatusBadge status={internship.status} />
                      <h3 className="font-semibold text-gray-900 text-base mt-2">{internship.title}</h3>
                      <div className="flex items-center gap-1.5 mt-1">
                        <Building2 className="h-3.5 w-3.5 text-gray-400" />
                        <span className="text-sm text-gray-500">{internship.industryName}</span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <MapPin className="h-3.5 w-3.5 text-gray-400" />
                        <span className="text-sm text-gray-500">{internship.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <Clock className="h-3.5 w-3.5 text-gray-400" />
                        <span className="text-sm text-gray-500">{internship.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <Calendar className="h-3.5 w-3.5 text-gray-400" />
                        <span className="text-sm text-gray-500">Mulai {formatShortDate(internship.startDate)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {internship.skills.map(s => (
                      <SkillTag key={s} skill={s} />
                    ))}
                  </div>

                  {internship.allowance && (
                    <div className="mt-3 text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded px-2 py-1">
                      Uang Saku (Simulasi): {internship.allowance}
                    </div>
                  )}

                  <div className="mt-3">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                      <span>Pelamar</span>
                      <span>{internship.applicants}/{internship.quota} kuota</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full">
                      <div
                        className="h-1.5 bg-emerald-500 rounded-full"
                        style={{ width: `${Math.min(fillPercent, 100)}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4 pt-3 border-t border-gray-100">
                    <Button size="sm" variant="outline" className="flex-1">Edit Program</Button>
                    <Button size="sm" className="flex-1">
                      <Users className="h-3.5 w-3.5" /> Lihat Pelamar
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
