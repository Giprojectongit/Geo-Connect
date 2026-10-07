'use client';

export const dynamic = 'force-dynamic';

import React from 'react';
import { Users, Briefcase, BookOpen, TrendingUp, ArrowRight, Building2, CheckCircle, Network } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { StatCard, Card, CardHeader, CardContent } from '@/components/ui/card';
import { StatusBadge, SkillTag, DemoBadge } from '@/components/ui/badges';
import { Button } from '@/components/ui/button';
import { MatchScore } from '@/components/ui/match-score';
import { mockCommunityMembers, mockJobs } from '@/lib/mock-data';
import Link from 'next/link';

export default function IndustryDashboard() {
  const topCandidates = mockCommunityMembers
    .filter(m => m.status === 'available')
    .sort((a, b) => (b.matchScore ?? 0) - (a.matchScore ?? 0))
    .slice(0, 5);

  const openJobs = mockJobs.filter(j => j.status === 'open').slice(0, 3);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Selamat Datang, PT Geothermal Demo</h1>
            <p className="text-gray-500 mt-1">Pantau aktivitas platform dan kelola program komunitas Anda.</p>
          </div>
          <DemoBadge />
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Kandidat Lokal"
            value="87"
            icon={<Users className="h-5 w-5" />}
            change={15}
            changeType="increase"
            description="Terdaftar di platform"
            color="green"
          />
          <StatCard
            label="Supplier Lokal"
            value="12"
            icon={<Building2 className="h-5 w-5" />}
            change={3}
            changeType="increase"
            description="Terverifikasi"
            color="teal"
          />
          <StatCard
            label="Program Komunitas"
            value="5"
            icon={<Network className="h-5 w-5" />}
            change={2}
            changeType="increase"
            description="Aktif berjalan"
            color="teal"
          />
          <StatCard
            label="Dampak Terukur"
            value="145"
            icon={<TrendingUp className="h-5 w-5" />}
            change={22}
            changeType="increase"
            description="Peserta pelatihan"
            color="gold"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Talent Pipeline */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-semibold text-gray-800">Talent Pipeline</h2>
                    <p className="text-xs text-gray-500 mt-0.5">Kandidat lokal dengan skor tertinggi</p>
                  </div>
                  <Link href="/industry/talent">
                    <Button size="sm" variant="outline">
                      Lihat Semua <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <div className="overflow-x-auto">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Nama</th>
                      <th>Skill Utama</th>
                      <th>Lokasi</th>
                      <th>Status</th>
                      <th>Match</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topCandidates.map((member) => (
                      <tr key={member.id}>
                        <td>
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center">
                              <span className="text-emerald-700 text-xs font-bold">{member.name.charAt(0)}</span>
                            </div>
                            <span className="font-medium text-gray-900">{member.name}</span>
                          </div>
                        </td>
                        <td>
                          <div className="flex gap-1 flex-wrap">
                            {member.skills.slice(0, 2).map(s => (
                              <SkillTag key={s} skill={s} />
                            ))}
                          </div>
                        </td>
                        <td className="text-gray-500">{member.district}</td>
                        <td><StatusBadge status={member.status} /></td>
                        <td>
                          <span className={`font-bold text-sm ${(member.matchScore ?? 0) >= 85 ? 'text-emerald-600' : 'text-teal-600'}`}>
                            {member.matchScore}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Opportunity Matching */}
          <div>
            <Card>
              <CardHeader>
                <h2 className="font-semibold text-gray-800">Opportunity Matching</h2>
                <p className="text-xs text-gray-500 mt-0.5">Status lowongan aktif</p>
              </CardHeader>
              <CardContent className="space-y-3">
                {openJobs.map((job) => (
                  <div key={job.id} className="p-3 rounded-lg border border-gray-100 bg-gray-50">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-800 truncate">{job.title}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {job.matchedCandidates} kandidat
                          </span>
                          <span className="text-xs text-emerald-600 font-medium">
                            Best: {job.bestMatch}%
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link href="/industry/talent">
                      <Button size="sm" variant="outline" className="w-full mt-2 text-xs">
                        Lihat Kandidat
                      </Button>
                    </Link>
                  </div>
                ))}
                <Link href="/industry/jobs">
                  <Button variant="ghost" size="sm" className="w-full text-emerald-600 hover:text-emerald-700">
                    Kelola Semua Lowongan â†’
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Buka Lowongan Baru', href: '/industry/jobs', icon: <Briefcase className="h-5 w-5" />, color: 'emerald' },
            { label: 'Buat Program Training', href: '/industry/training', icon: <BookOpen className="h-5 w-5" />, color: 'teal' },
            { label: 'Lihat ESG Report', href: '/industry/esg', icon: <TrendingUp className="h-5 w-5" />, color: 'gold' },
            { label: 'Verifikasi Supplier', href: '/industry/suppliers', icon: <CheckCircle className="h-5 w-5" />, color: 'green' },
          ].map((action) => (
            <Link key={action.label} href={action.href}>
              <div className={`p-4 rounded-xl border cursor-pointer hover:shadow-md transition-all group
                ${action.color === 'emerald' ? 'border-emerald-200 bg-emerald-50 hover:border-emerald-300' : ''}
                ${action.color === 'teal' ? 'border-teal-200 bg-teal-50 hover:border-teal-300' : ''}
                ${action.color === 'gold' ? 'border-amber-200 bg-amber-50 hover:border-amber-300' : ''}
                ${action.color === 'green' ? 'border-emerald-200 bg-emerald-50 hover:border-emerald-300' : ''}
              `}>
                <div className={`mb-2
                  ${action.color === 'emerald' || action.color === 'green' ? 'text-emerald-600' : ''}
                  ${action.color === 'teal' ? 'text-teal-600' : ''}
                  ${action.color === 'gold' ? 'text-amber-600' : ''}
                `}>
                  {action.icon}
                </div>
                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{action.label}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
