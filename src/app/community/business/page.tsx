'use client';
import React from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { DemoBadge } from '@/components/ui/badges';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, ShoppingBag } from 'lucide-react';

const businessOpps = [
  { title: 'Katering Harian Karyawan', desc: 'Menyediakan makan siang untuk karyawan PT Geothermal Demo (±50 porsi/hari)', category: 'Kuliner', benefit: 'Pendapatan stabil bulanan', icon: '🍱' },
  { title: 'Supplier Sayuran Segar', desc: 'Memasok sayuran segar untuk kantin industri dan kebutuhan program komunitas', category: 'Pertanian', benefit: 'Kontrak jangka panjang', icon: '🥬' },
  { title: 'Jasa Laundry Seragam Kerja', desc: 'Layanan cuci dan setrika seragam karyawan di area operasi', category: 'Jasa', benefit: 'Volume besar, rutin', icon: '👔' },
  { title: 'Homestay & Akomodasi', desc: 'Menyediakan tempat tinggal untuk karyawan atau tamu perusahaan', category: 'Pariwisata', benefit: 'Peluang usaha berkelanjutan', icon: '🏠' },
];

export default function CommunityBusinessPage() {
  return (
    <DashboardLayout title="Peluang Usaha">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Peluang Usaha</h1>
            <p className="text-gray-500 mt-1">Peluang bisnis dan UMKM yang bisa Anda manfaatkan dari ekosistem geothermal.</p>
          </div>
          <DemoBadge />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {businessOpps.map(b => (
            <Card key={b.title} hover>
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{b.icon}</div>
                  <div className="flex-1">
                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">{b.category}</span>
                    <h3 className="font-semibold text-gray-900 mt-2">{b.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{b.desc}</p>
                    <div className="flex items-center gap-1.5 mt-3 text-xs text-emerald-600 font-medium">
                      <TrendingUp className="h-3.5 w-3.5" /> {b.benefit}
                    </div>
                    <Button size="sm" className="mt-3" onClick={() => alert('Demo: Fitur daftar peluang bisnis akan tersedia di versi lengkap')}>
                      Saya Tertarik
                    </Button>
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
