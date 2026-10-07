'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardContent } from '@/components/ui/card';
import { DemoBadge } from '@/components/ui/badges';

export default function IndustrySettingsPage() {
  return (
    <DashboardLayout title="Pengaturan">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Pengaturan Perusahaan</h1>
          <DemoBadge />
        </div>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              {[
                { label: 'Nama Perusahaan', value: 'PT Geothermal Demo' },
                { label: 'Lokasi Operasi', value: 'Kabupaten Demo Selatan' },
                { label: 'Kontak', value: 'budi@geothermaldemo.id' },
                { label: 'Status Verifikasi', value: 'Terverifikasi ✓' },
              ].map((field) => (
                <div key={field.label} className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-700">{field.label}</span>
                  <span className="text-sm text-gray-600">{field.value}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-amber-600 mt-4 bg-amber-50 border border-amber-200 rounded p-2">
              ⚠️ Pengaturan ini adalah simulasi MVP. Perubahan tidak akan tersimpan.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
