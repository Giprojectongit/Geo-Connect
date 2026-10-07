'use client';

import React from 'react';
import { Building2, Users, Briefcase, Globe, AlertCircle, CheckCircle, XCircle, TrendingUp } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { StatCard, Card, CardHeader, CardContent } from '@/components/ui/card';
import { DemoBadge, StatusBadge } from '@/components/ui/badges';
import { Button } from '@/components/ui/button';
import { GrowthLineChart, ChartCard } from '@/components/charts/chart-cards';
import { mockAdminStats } from '@/lib/mock-data';

const growthData = [
  { month: 'Jan', members: 12, opportunities: 5, placements: 3 },
  { month: 'Feb', members: 18, opportunities: 8, placements: 5 },
  { month: 'Mar', members: 25, opportunities: 12, placements: 8 },
  { month: 'Apr', members: 38, opportunities: 15, placements: 11 },
  { month: 'Mei', members: 52, opportunities: 18, placements: 14 },
  { month: 'Jun', members: 63, opportunities: 20, placements: 17 },
  { month: 'Jul', members: 71, opportunities: 22, placements: 19 },
  { month: 'Agu', members: 79, opportunities: 23, placements: 21 },
  { month: 'Sep', members: 87, opportunities: 24, placements: 24 },
];

const pendingItems = [
  { type: 'Lowongan', title: 'Operator Lapangan Baru', company: 'PT Energi Bumi Nusantara', time: '2 jam lalu' },
  { type: 'Supplier', title: 'CV Demo Teknik Mandiri', company: 'Kecamatan Demo Utara', time: '3 jam lalu' },
  { type: 'Pelatihan', title: 'Pelatihan Las Industri', company: 'PT Geothermal Demo', time: '5 jam lalu' },
  { type: 'Program', title: 'Program Budidaya Ikan', company: 'PT Energi Bumi Nusantara', time: '1 hari lalu' },
];

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Overview platform dan moderasi konten.</p>
          </div>
          <div className="self-start">
            <DemoBadge />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <StatCard label="Total Industri" value={mockAdminStats.totalIndustries} icon={<Building2 className="h-5 w-5" />} change={1} changeType="increase" color="green" />
          <StatCard label="Total Anggota" value={mockAdminStats.totalCommunityMembers} icon={<Users className="h-5 w-5" />} change={mockAdminStats.monthlyGrowth.members} changeType="increase" color="teal" />
          <StatCard label="Total Peluang" value={mockAdminStats.totalOpportunities} icon={<Briefcase className="h-5 w-5" />} change={mockAdminStats.monthlyGrowth.opportunities} changeType="increase" color="teal" />
          <StatCard label="Total Program" value={mockAdminStats.totalPrograms} icon={<Globe className="h-5 w-5" />} change={3} changeType="increase" color="gold" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Pending Approvals */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-semibold text-gray-800">Antrian Moderasi</h2>
                    <p className="text-xs text-gray-500 mt-0.5">Item yang memerlukan persetujuan admin</p>
                  </div>
                  <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full">
                    {Object.values(mockAdminStats.pendingApprovals).reduce((a, b) => a + b, 0)} pending
                  </span>
                </div>
              </CardHeader>
              <div className="divide-y divide-gray-50">
                {pendingItems.map((item, i) => (
                  <div key={i} className="px-6 py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-medium">{item.type}</span>
                          <span className="text-sm font-medium text-gray-900">{item.title}</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">{item.company} · {item.time}</div>
                      </div>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <button className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors" title="Setujui">
                        <CheckCircle className="h-4 w-4" />
                      </button>
                      <button className="p-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors" title="Tolak">
                        <XCircle className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Pending counts */}
          <div>
            <Card>
              <CardHeader>
                <h2 className="font-semibold text-gray-800">Status Pending</h2>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { label: 'Lowongan', count: mockAdminStats.pendingApprovals.jobs, color: 'text-blue-600 bg-blue-50' },
                  { label: 'Supplier', count: mockAdminStats.pendingApprovals.suppliers, color: 'text-amber-600 bg-amber-50' },
                  { label: 'Program Training', count: mockAdminStats.pendingApprovals.trainings, color: 'text-purple-600 bg-purple-50' },
                  { label: 'Program Komunitas', count: mockAdminStats.pendingApprovals.programs, color: 'text-teal-600 bg-teal-50' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                    <span className="text-sm text-gray-700">{item.label}</span>
                    <span className={`text-sm font-bold px-2 py-0.5 rounded-full ${item.color}`}>
                      {item.count} pending
                    </span>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-2">
                  Kelola Moderasi →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Growth chart */}
        <ChartCard title="Pertumbuhan Platform" subtitle="Anggota, peluang, dan penempatan (Simulasi)">
          <GrowthLineChart data={growthData} />
        </ChartCard>
      </div>
    </DashboardLayout>
  );
}
