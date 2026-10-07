'use client';

export const dynamic = 'force-dynamic';

import React from 'react';
import { Info } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { DemoBadge } from '@/components/ui/badges';
import { MatchResultCard } from '@/components/opportunities/opportunity-cards';
import { MatchBar } from '@/components/ui/match-score';
import { Card, CardContent } from '@/components/ui/card';
import { mockMatchResults, mockCommunityMembers } from '@/lib/mock-data';

export default function CommunityMatchingPage() {
  const member = mockCommunityMembers[0];

  return (
    <DashboardLayout title="Matching Peluang">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Rekomendasi untuk Anda</h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Peluang yang paling sesuai berdasarkan profil, skill, dan lokasi Anda.</p>
          </div>
          <div className="self-start">
            <DemoBadge />
          </div>
        </div>

        {/* Info notice */}
        <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-blue-800 font-semibold text-sm">Opportunity Matching Engine (Simulasi)</p>
            <p className="text-blue-700 text-sm mt-0.5">
              Skor matching dihitung berdasarkan kesesuaian skill, lokasi, dan minat pada profil Anda.
              Ini adalah algoritma berbasis aturan sederhana untuk keperluan MVP demo â€” bukan AI/ML.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile summary */}
          <div>
            <Card>
              <CardContent className="p-5">
                <h3 className="font-semibold text-gray-800 mb-4">Profil Anda (Demo)</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Skill yang Dimiliki</p>
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map(s => (
                        <span key={s} className="text-xs bg-teal-50 text-teal-700 border border-teal-200 px-2 py-0.5 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Minat</p>
                    <div className="flex flex-wrap gap-1.5">
                      {member.interests.map(i => (
                        <span key={i} className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded">
                          {i}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Lokasi</p>
                    <p className="text-sm text-gray-700">{member.location}</p>
                  </div>
                </div>

                {/* Match score breakdown */}
                <div className="mt-5">
                  <p className="text-xs font-semibold text-gray-600 mb-3 uppercase tracking-wide">Kekuatan Profil</p>
                  <div className="space-y-2.5">
                    <MatchBar label="Kelengkapan Profil" score={member.profileCompletion} />
                    <MatchBar label="Skill Relevan" score={85} />
                    <MatchBar label="Lokasi Match" score={90} />
                    <MatchBar label="Pengalaman" score={70} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">{mockMatchResults.length}</span> peluang ditemukan untuk Anda
              </p>
              <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 focus:outline-none">
                <option>Urutkan: Skor Tertinggi</option>
                <option>Terbaru</option>
                <option>Deadline Terdekat</option>
              </select>
            </div>

            {mockMatchResults.map((result) => (
              <MatchResultCard
                key={result.opportunityId}
                result={result}
                onApply={() => alert(`Demo: Lamaran untuk "${result.opportunityTitle}" akan diproses di versi lengkap`)}
              />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
