'use client';

import React from 'react';
import { Users, CheckCircle, BookOpen, TrendingUp, UserPlus, ArrowRight, MapPin, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { StatCard, Card, CardHeader, CardContent } from '@/components/ui/card';
import { StatusBadge, SkillTag, DemoBadge } from '@/components/ui/badges';
import { Button } from '@/components/ui/button';
import { mockCommunityMembers, mockApplications, mockTrainings } from '@/lib/mock-data';
import { getEducationLabel } from '@/lib/utils';

export default function AgentDashboard() {
  const myMembers = mockCommunityMembers.filter(m => m.agentId === 'agt-001');
  const placements = mockApplications.filter(a => a.status === 'accepted');

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard Community Agent</h1>
            <p className="text-gray-500 mt-1">Kelola anggota komunitas dan bantu mereka menemukan peluang terbaik.</p>
          </div>
          <DemoBadge />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Anggota Komunitas" value={myMembers.length} icon={<Users className="h-5 w-5" />} change={8} changeType="increase" color="green" />
          <StatCard label="Peluang Aktif" value="18" icon={<TrendingUp className="h-5 w-5" />} change={3} changeType="increase" color="teal" />
          <StatCard label="Program Pelatihan" value={mockTrainings.filter(t => t.status !== 'completed').length} icon={<BookOpen className="h-5 w-5" />} color="teal" />
          <StatCard label="Penempatan Sukses" value={placements.length} icon={<CheckCircle className="h-5 w-5" />} change={2} changeType="increase" color="gold" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Members list */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-semibold text-gray-800">Anggota Komunitas Saya</h2>
                    <p className="text-xs text-gray-500 mt-0.5">Daftar anggota yang Anda dampingi</p>
                  </div>
                  <Link href="/agent/members">
                    <Button size="sm" variant="outline">Lihat Semua</Button>
                  </Link>
                </div>
              </CardHeader>
              <div className="overflow-x-auto">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Nama</th>
                      <th>Skill</th>
                      <th>Pendidikan</th>
                      <th>Status</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {myMembers.map((m) => (
                      <tr key={m.id}>
                        <td>
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center">
                              <span className="text-teal-700 text-xs font-bold">{m.name.charAt(0)}</span>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{m.name}</div>
                              <div className="text-xs text-gray-500 flex items-center gap-0.5">
                                <MapPin className="h-3 w-3" /> {m.location}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="flex gap-1">
                            {m.skills.slice(0, 2).map(s => <SkillTag key={s} skill={s} />)}
                          </div>
                        </td>
                        <td>
                          <span className="flex items-center gap-1 text-xs text-gray-600">
                            <GraduationCap className="h-3.5 w-3.5" />
                            {getEducationLabel(m.education)}
                          </span>
                        </td>
                        <td><StatusBadge status={m.status} /></td>
                        <td>
                          <Button size="sm" variant="ghost">Kelola</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Assisted Registration & Quick Actions */}
          <div className="space-y-4">
            {/* Assisted Registration */}
            <Card className="border-2 border-dashed border-teal-300 bg-teal-50/50">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                    <UserPlus className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Assisted Registration</h3>
                    <p className="text-xs text-gray-500">Bantu anggota daftar ke platform</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Bantu masyarakat yang belum melek teknologi untuk membuat profil, memasukkan skill,
                  dan mendaftar peluang yang sesuai.
                </p>
                <Button className="w-full">
                  <UserPlus className="h-4 w-4" /> Daftarkan Anggota Baru
                </Button>
              </CardContent>
            </Card>

            {/* Quick actions */}
            <Card>
              <CardHeader>
                <h3 className="font-semibold text-gray-800">Aksi Cepat</h3>
              </CardHeader>
              <CardContent className="space-y-2 pt-0">
                {[
                  { label: 'Lihat Semua Peluang', href: '/agent/jobs' },
                  { label: 'Program Pelatihan', href: '/agent/training' },
                  { label: 'Tracking Penempatan', href: '/agent/placements' },
                  { label: 'Laporan Komunitas', href: '/agent/reports' },
                ].map((action) => (
                  <Link key={action.label} href={action.href}>
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <span className="text-sm text-gray-700">{action.label}</span>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
