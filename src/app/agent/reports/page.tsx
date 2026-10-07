'use client';
import React from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { DemoBadge } from '@/components/ui/badges';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function AgentReportsPage() {
  return (
    <DashboardLayout title="Laporan">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Laporan Komunitas</h1>
          <DemoBadge />
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: 'Laporan Bulanan', desc: 'Ringkasan aktivitas bulan Oktober 2024', icon: '📊' },
            { title: 'Laporan Penempatan', desc: 'Status penempatan anggota per periode', icon: '✅' },
            { title: 'Laporan Pelatihan', desc: 'Partisipasi dan hasil pelatihan', icon: '📚' },
          ].map(r => (
            <Card key={r.title} hover>
              <CardContent className="p-5 text-center">
                <div className="text-3xl mb-3">{r.icon}</div>
                <h3 className="font-semibold text-gray-900">{r.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{r.desc}</p>
                <button className="mt-4 flex items-center gap-1.5 mx-auto text-sm text-teal-600 hover:text-teal-700 font-medium">
                  <FileText className="h-4 w-4" /> Lihat Laporan (Demo)
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
