'use client';

import React, { useState } from 'react';
import { Users, MapPin, GraduationCap } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardHeader } from '@/components/ui/card';
import { SearchBar, FilterSelect } from '@/components/ui/search';
import { StatusBadge, SkillTag, DemoBadge } from '@/components/ui/badges';
import { Button } from '@/components/ui/button';
import { MatchScore } from '@/components/ui/match-score';
import { mockCommunityMembers } from '@/lib/mock-data';
import { getEducationLabel } from '@/lib/utils';

const statusOptions = [
  { value: 'all', label: 'Semua Status' },
  { value: 'available', label: 'Tersedia' },
  { value: 'employed', label: 'Bekerja' },
  { value: 'training', label: 'Pelatihan' },
];

export default function IndustryTalentPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [view, setView] = useState<'grid' | 'table'>('table');

  const filtered = mockCommunityMembers.filter(m => {
    const matchesSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.skills.some(s => s.toLowerCase().includes(search.toLowerCase())) ||
      m.location.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'all' || m.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout title="Talent Pool">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Talent Pool Lokal</h1>
            <p className="text-gray-500 mt-1">Database kandidat dari komunitas lokal sekitar area operasi.</p>
          </div>
          <DemoBadge />
        </div>

        {/* Filters */}
        <Card>
          <div className="p-4 flex flex-wrap gap-3 items-center">
            <SearchBar
              placeholder="Cari nama, skill, lokasi..."
              value={search}
              onChange={setSearch}
              className="flex-1 min-w-48"
            />
            <FilterSelect
              options={statusOptions}
              value={statusFilter}
              onChange={setStatusFilter}
            />
            <div className="flex border border-gray-200 rounded-lg overflow-hidden">
              <button
                className={`px-3 py-2 text-sm ${view === 'table' ? 'bg-gray-100 text-gray-800 font-medium' : 'text-gray-500'}`}
                onClick={() => setView('table')}
              >
                Tabel
              </button>
              <button
                className={`px-3 py-2 text-sm ${view === 'grid' ? 'bg-gray-100 text-gray-800 font-medium' : 'text-gray-500'}`}
                onClick={() => setView('grid')}
              >
                Grid
              </button>
            </div>
          </div>
        </Card>

        {/* Summary */}
        <div className="text-sm text-gray-500">
          Menampilkan <span className="font-semibold text-gray-800">{filtered.length}</span> dari {mockCommunityMembers.length} kandidat
        </div>

        {view === 'table' ? (
          <Card>
            <div className="overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Kandidat</th>
                    <th>Skill</th>
                    <th>Pendidikan</th>
                    <th>Lokasi</th>
                    <th>Status</th>
                    <th>Match Score</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((m) => (
                    <tr key={m.id}>
                      <td>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                            <span className="text-emerald-700 text-sm font-bold">{m.name.charAt(0)}</span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{m.name}</div>
                            <div className="text-xs text-gray-500">{m.employmentStatus}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex gap-1 flex-wrap max-w-xs">
                          {m.skills.slice(0, 3).map(s => (
                            <SkillTag key={s} skill={s} />
                          ))}
                          {m.skills.length > 3 && (
                            <span className="text-xs text-gray-400">+{m.skills.length - 3}</span>
                          )}
                        </div>
                      </td>
                      <td>
                        <span className="flex items-center gap-1 text-gray-600">
                          <GraduationCap className="h-3.5 w-3.5" />
                          {getEducationLabel(m.education)}
                        </span>
                      </td>
                      <td>
                        <span className="flex items-center gap-1 text-gray-600">
                          <MapPin className="h-3.5 w-3.5" />
                          {m.district}
                        </span>
                      </td>
                      <td><StatusBadge status={m.status} /></td>
                      <td>
                        <span className={`font-bold ${(m.matchScore ?? 0) >= 85 ? 'text-emerald-600' : 'text-teal-600'}`}>
                          {m.matchScore}%
                        </span>
                      </td>
                      <td>
                        <Button size="sm" variant="outline">Lihat Profil</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filtered.map((m) => (
              <Card key={m.id} hover>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <span className="text-emerald-700 font-bold">{m.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{m.name}</div>
                        <div className="text-xs text-gray-500">{m.district}</div>
                      </div>
                    </div>
                    <MatchScore score={m.matchScore ?? 0} size="sm" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {m.skills.slice(0, 4).map(s => (
                      <SkillTag key={s} skill={s} />
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <StatusBadge status={m.status} />
                    <span className="text-xs text-gray-500">{getEducationLabel(m.education)}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
