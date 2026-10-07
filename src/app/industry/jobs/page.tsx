'use client';

import React, { useState } from 'react';
import { Plus, Filter } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SearchBar, FilterSelect } from '@/components/ui/search';
import { DemoBadge, StatusBadge, SkillTag } from '@/components/ui/badges';
import { JobCard } from '@/components/opportunities/opportunity-cards';
import { mockJobs } from '@/lib/mock-data';

const statusOptions = [
  { value: 'all', label: 'Semua Status' },
  { value: 'open', label: 'Dibuka' },
  { value: 'closed', label: 'Ditutup' },
  { value: 'draft', label: 'Draf' },
];

const typeOptions = [
  { value: 'all', label: 'Semua Tipe' },
  { value: 'full-time', label: 'Full Time' },
  { value: 'part-time', label: 'Part Time' },
  { value: 'contract', label: 'Kontrak' },
];

export default function IndustryJobsPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const filtered = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.skills.some(s => s.toLowerCase().includes(search.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || job.status === statusFilter;
    const matchesType = typeFilter === 'all' || job.type === typeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <DashboardLayout title="Manajemen Lowongan">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Lowongan Kerja</h1>
            <p className="text-gray-500 mt-1">Kelola dan pantau semua lowongan aktif perusahaan Anda.</p>
          </div>
          <div className="flex items-center gap-3">
            <DemoBadge />
            <Button onClick={() => setShowCreateModal(true)}>
              <Plus className="h-4 w-4" /> Buat Lowongan
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card>
          <div className="p-4 flex flex-wrap gap-3 items-center">
            <SearchBar
              placeholder="Cari lowongan atau skill..."
              value={search}
              onChange={setSearch}
              className="flex-1 min-w-48"
            />
            <FilterSelect
              options={statusOptions}
              value={statusFilter}
              onChange={setStatusFilter}
            />
            <FilterSelect
              options={typeOptions}
              value={typeFilter}
              onChange={setTypeFilter}
            />
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Total Lowongan', value: mockJobs.length, color: 'text-gray-900' },
            { label: 'Dibuka', value: mockJobs.filter(j => j.status === 'open').length, color: 'text-emerald-600' },
            { label: 'Total Pelamar', value: mockJobs.reduce((s, j) => s + j.applicants, 0), color: 'text-blue-600' },
          ].map((s) => (
            <div key={s.label} className="text-center p-3 bg-white rounded-lg border border-gray-200">
              <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Jobs grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              variant="industry"
              onViewCandidates={() => {}}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <p className="text-lg font-medium">Tidak ada lowongan yang sesuai</p>
            <p className="text-sm">Coba ubah filter pencarian Anda</p>
          </div>
        )}

        {/* Simple Create Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Buat Lowongan Baru</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Judul Posisi</label>
                  <input className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Contoh: IoT Technician" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Lokasi</label>
                  <input className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Area Operasi" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Deskripsi</label>
                  <textarea rows={3} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Deskripsi posisi..." />
                </div>
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-xs text-amber-700">⚠️ Fitur create adalah simulasi UI. Data tidak akan tersimpan ke database pada versi MVP ini.</p>
                </div>
              </div>
              <div className="flex gap-3 mt-5">
                <Button variant="outline" onClick={() => setShowCreateModal(false)} className="flex-1">Batal</Button>
                <Button onClick={() => setShowCreateModal(false)} className="flex-1">Simpan (Demo)</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
