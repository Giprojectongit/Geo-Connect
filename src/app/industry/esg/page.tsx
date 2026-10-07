'use client';

import React from 'react';
import { Download, TrendingUp, Users, Building2, Zap, AlertTriangle } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { StatCard } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DemoBadge } from '@/components/ui/badges';
import {
  ChartCard, SocialTrendChart, EconomicPieChart, DirectUseBarChart
} from '@/components/charts/chart-cards';
import { mockESGMetrics, mockESGChartData } from '@/lib/mock-data';
import { formatCurrency } from '@/lib/utils';

export default function ESGDashboardPage() {
  const metric = mockESGMetrics[0];

  return (
    <DashboardLayout title="ESG Impact Dashboard">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">ESG Impact Dashboard</h1>
            <p className="text-gray-500 mt-1">
              Monitoring dampak sosial, ekonomi, dan energi program komunitas. Periode: {metric.period}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <DemoBadge />
            <Button variant="outline">
              <Download className="h-4 w-4" /> Export ESG Report (Demo)
            </Button>
          </div>
        </div>

        {/* Demo notice */}
        <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-700">
            <strong>Data Simulasi:</strong> Seluruh angka di dashboard ini adalah data demo untuk keperluan MVP.
            Tidak merepresentasikan data ESG perusahaan geothermal nyata.
          </p>
        </div>

        {/* Social Impact */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-5 bg-emerald-600 rounded" />
            <h2 className="font-bold text-gray-800">Social Impact</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: 'Peserta Pelatihan', value: metric.social.trainingParticipants, icon: <Users className="h-5 w-5" />, color: 'green' as const },
              { label: 'Rekrutan Lokal', value: metric.social.localHires, icon: <Users className="h-5 w-5" />, color: 'teal' as const },
              { label: 'Peserta Magang', value: metric.social.internshipParticipants, icon: <Users className="h-5 w-5" />, color: 'teal' as const },
              { label: 'Partisipasi Komunitas', value: metric.social.communityParticipation, icon: <Users className="h-5 w-5" />, color: 'green' as const },
              { label: 'Partisipasi Perempuan', value: `${metric.social.womenParticipation}%`, icon: <Users className="h-5 w-5" />, color: 'gold' as const },
            ].map((s) => (
              <StatCard key={s.label} label={s.label} value={s.value} icon={s.icon} color={s.color} />
            ))}
          </div>
        </div>

        {/* Economic Impact */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-5 bg-teal-600 rounded" />
            <h2 className="font-bold text-gray-800">Economic Impact</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Supplier Lokal', value: metric.economic.localSuppliers, icon: <Building2 className="h-5 w-5" />, color: 'green' as const },
              { label: 'UMKM Didukung', value: metric.economic.umkmSupported, icon: <Building2 className="h-5 w-5" />, color: 'teal' as const },
              { label: 'Peluang Bisnis', value: metric.economic.businessOpportunities, icon: <TrendingUp className="h-5 w-5" />, color: 'teal' as const },
              { label: 'Estimasi Belanja Lokal', value: formatCurrency(metric.economic.estimatedLocalSpend), icon: <TrendingUp className="h-5 w-5" />, color: 'gold' as const, description: '(Simulasi)' },
            ].map((s) => (
              <StatCard key={s.label} label={s.label} value={s.value} icon={s.icon} color={s.color} description={s.description} />
            ))}
          </div>
        </div>

        {/* Energy Impact */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-5 bg-amber-500 rounded" />
            <h2 className="font-bold text-gray-800">Energy Impact</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Proyek Direct-Use', value: metric.energy.directUseProjects, icon: <Zap className="h-5 w-5" />, color: 'gold' as const },
              { label: 'Aplikasi Geothermal', value: metric.energy.geothermalApplications, icon: <Zap className="h-5 w-5" />, color: 'teal' as const },
              { label: 'Utilisasi Energi', value: `${metric.energy.energyUtilization}%`, icon: <Zap className="h-5 w-5" />, color: 'green' as const },
            ].map((s) => (
              <StatCard key={s.label} label={s.label} value={s.value} icon={s.icon} color={s.color} />
            ))}
          </div>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          <ChartCard title="Tren Dampak Sosial" subtitle="Kumulatif per bulan (Simulasi)">
            <SocialTrendChart data={mockESGChartData.socialTrend} />
          </ChartCard>

          <ChartCard title="Distribusi Dampak Ekonomi" subtitle="Estimasi (Simulasi)">
            <EconomicPieChart data={mockESGChartData.economicBreakdown} />
          </ChartCard>

          <ChartCard title="Proyek Direct-Use per Kategori" subtitle="Total proyek (Simulasi)" className="lg:col-span-2">
            <DirectUseBarChart data={mockESGChartData.directUseByCategory} />
          </ChartCard>
        </div>

        {/* Export section */}
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-800">Export ESG Report</h3>
                <p className="text-sm text-gray-500 mt-0.5">
                  Unduh laporan ESG dalam format PDF atau Excel untuk pelaporan internal dan stakeholder.
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => alert('Demo: Export PDF akan tersedia di versi full')}>
                  <Download className="h-4 w-4" /> Export PDF (Demo)
                </Button>
                <Button variant="secondary" onClick={() => alert('Demo: Export Excel akan tersedia di versi full')}>
                  <Download className="h-4 w-4" /> Export Excel (Demo)
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
