'use client';

import React, { useState } from 'react';
import { UserPlus, MapPin, GraduationCap, Search } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DemoBadge, StatusBadge, SkillTag } from '@/components/ui/badges';
import { SearchBar } from '@/components/ui/search';
import { mockCommunityMembers } from '@/lib/mock-data';
import { getEducationLabel } from '@/lib/utils';

export default function AgentMembersPage() {
  const [search, setSearch] = useState('');
  const [showRegistration, setShowRegistration] = useState(false);

  const filtered = mockCommunityMembers.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.skills.some(s => s.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <DashboardLayout title="Manajemen Anggota">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Anggota Komunitas</h1>
            <p className="text-gray-500 mt-1">Kelola dan dampingi anggota komunitas Anda.</p>
          </div>
          <div className="flex gap-3">
            <DemoBadge />
            <Button onClick={() => setShowRegistration(true)}>
              <UserPlus className="h-4 w-4" /> Daftar Anggota Baru
            </Button>
          </div>
        </div>

        <div className="flex gap-3">
          <SearchBar
            placeholder="Cari anggota atau skill..."
            value={search}
            onChange={setSearch}
            className="flex-1"
          />
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((m) => (
            <Card key={m.id} hover>
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                    <span className="text-teal-700 font-bold">{m.name.charAt(0)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900">{m.name}</div>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {m.location}
                    </div>
                  </div>
                  <StatusBadge status={m.status} />
                </div>

                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <GraduationCap className="h-3.5 w-3.5" />
                    {getEducationLabel(m.education)}
                  </span>
                  <span>Profil {m.profileCompletion}%</span>
                </div>

                {/* Profile progress */}
                <div className="h-1.5 bg-gray-100 rounded-full mb-3">
                  <div
                    className="h-1.5 bg-teal-500 rounded-full"
                    style={{ width: `${m.profileCompletion}%` }}
                  />
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {m.skills.slice(0, 3).map(s => (
                    <SkillTag key={s} skill={s} />
                  ))}
                  {m.skills.length > 3 && (
                    <span className="text-xs text-gray-400">+{m.skills.length - 3}</span>
                  )}
                </div>

                <div className="flex gap-2 pt-3 border-t border-gray-100">
                  <Button size="sm" variant="outline" className="flex-1">Edit Profil</Button>
                  <Button size="sm" className="flex-1">Carikan Peluang</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Assisted Registration Modal */}
        {showRegistration && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Daftarkan Anggota Baru</h3>
              <p className="text-sm text-gray-500 mb-4">Assisted Registration — Agent membantu pengisian profil</p>
              <div className="space-y-3">
                {[
                  { label: 'Nama Lengkap', placeholder: 'Nama anggota' },
                  { label: 'Lokasi/Desa', placeholder: 'Nama desa/kelurahan' },
                  { label: 'Nomor HP', placeholder: '08xx-xxxx-xxxx' },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="text-sm font-medium text-gray-700 block mb-1">{f.label}</label>
                    <input
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder={f.placeholder}
                    />
                  </div>
                ))}
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Skill Utama</label>
                  <div className="flex flex-wrap gap-2 p-3 border border-gray-300 rounded-lg">
                    {['IoT', 'Pertanian', 'Perikanan', 'Konstruksi', 'Kuliner', 'Pariwisata'].map(skill => (
                      <button key={skill}
                        className="px-2 py-1 rounded text-xs border border-gray-200 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-700 transition-colors">
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="p-3 bg-teal-50 border border-teal-200 rounded-lg">
                  <p className="text-xs text-teal-700">
                    ℹ️ Fitur Assisted Registration adalah simulasi UI. Data tidak akan tersimpan di versi MVP ini.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mt-5">
                <Button variant="outline" onClick={() => setShowRegistration(false)} className="flex-1">Batal</Button>
                <Button onClick={() => setShowRegistration(false)} className="flex-1">Daftarkan (Demo)</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
