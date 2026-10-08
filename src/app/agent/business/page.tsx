'use client';
import React from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { DemoBadge } from '@/components/ui/badges';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

export default function AgentBusinessPage() {
  return (
    <DashboardLayout title="Peluang Bisnis">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <h1 className="text-2xl font-bold text-gray-900">Peluang Bisnis & UMKM</h1>
          <DemoBadge />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'Katering untuk Karyawan Industri', category: 'Kuliner', quota: '3 UMKM', status: 'Terbuka' },
            { title: 'Supplier Sayuran Segar', category: 'Pertanian', quota: '5 Kelompok Tani', status: 'Terbuka' },
            { title: 'Jasa Transportasi Karyawan', category: 'Transportasi', quota: '2 Usaha', status: 'Terbuka' },
            { title: 'Jasa Laundry Seragam Kerja', category: 'Jasa', quota: '2 UMKM', status: 'Terbatas' },
          ].map(b => (
            <Card key={b.title} hover>
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                    <ShoppingBag className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{b.title}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{b.category} · {b.quota}</p>
                    <span className={`text-xs font-medium mt-2 inline-block px-2 py-0.5 rounded-full ${b.status === 'Terbuka' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                      {b.status}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
