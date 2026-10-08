'use client';

import React, { useState } from 'react';
import { CheckCircle, XCircle, Eye } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { DemoBadge, StatusBadge } from '@/components/ui/badges';
import { Button } from '@/components/ui/button';
import { mockJobs, mockSuppliers, mockTrainings, mockCommunityPrograms } from '@/lib/mock-data';

type ModerationTab = 'jobs' | 'suppliers' | 'trainings' | 'programs';

export default function AdminModerationPage() {
  const [activeTab, setActiveTab] = useState<ModerationTab>('jobs');

  const tabs: { key: ModerationTab; label: string; count: number }[] = [
    { key: 'jobs', label: 'Lowongan', count: mockJobs.length },
    { key: 'suppliers', label: 'Supplier', count: mockSuppliers.length },
    { key: 'trainings', label: 'Pelatihan', count: mockTrainings.length },
    { key: 'programs', label: 'Program', count: mockCommunityPrograms.length },
  ];

  return (
    <DashboardLayout title="Moderasi">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Moderasi Konten</h1>
            <p className="text-gray-500 mt-1">Review dan setujui konten yang dikirimkan ke platform.</p>
          </div>
          <DemoBadge />
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-gray-200 overflow-x-auto pb-px">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px
                ${activeTab === tab.key
                  ? 'border-emerald-600 text-emerald-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
            >
              {tab.label}
              <span className="ml-2 text-xs bg-gray-100 px-1.5 py-0.5 rounded-full">{tab.count}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <Card>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Judul</th>
                  <th>Organisasi</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {activeTab === 'jobs' && mockJobs.map(item => (
                  <tr key={item.id}>
                    <td className="font-medium text-gray-900">{item.title}</td>
                    <td className="text-gray-600">{item.industryName}</td>
                    <td><StatusBadge status={item.status} /></td>
                    <td>
                      <div className="flex gap-2">
                        <button className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100" title="Setujui">
                          <CheckCircle className="h-4 w-4" />
                        </button>
                        <button className="p-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100" title="Tolak">
                          <XCircle className="h-4 w-4" />
                        </button>
                        <button className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100" title="Lihat Detail">
                          <Eye className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {activeTab === 'suppliers' && mockSuppliers.map(item => (
                  <tr key={item.id}>
                    <td className="font-medium text-gray-900">{item.name}</td>
                    <td className="text-gray-600">{item.category}</td>
                    <td><StatusBadge status={item.status} /></td>
                    <td>
                      <div className="flex gap-2">
                        <button className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100"><CheckCircle className="h-4 w-4" /></button>
                        <button className="p-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100"><XCircle className="h-4 w-4" /></button>
                        <button className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"><Eye className="h-4 w-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
                {activeTab === 'trainings' && mockTrainings.map(item => (
                  <tr key={item.id}>
                    <td className="font-medium text-gray-900">{item.title}</td>
                    <td className="text-gray-600">{item.industryName}</td>
                    <td><StatusBadge status={item.status} /></td>
                    <td>
                      <div className="flex gap-2">
                        <button className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100"><CheckCircle className="h-4 w-4" /></button>
                        <button className="p-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100"><XCircle className="h-4 w-4" /></button>
                        <button className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"><Eye className="h-4 w-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
                {activeTab === 'programs' && mockCommunityPrograms.map(item => (
                  <tr key={item.id}>
                    <td className="font-medium text-gray-900">{item.name}</td>
                    <td className="text-gray-600">{item.industryName}</td>
                    <td><StatusBadge status={item.status} /></td>
                    <td>
                      <div className="flex gap-2">
                        <button className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100"><CheckCircle className="h-4 w-4" /></button>
                        <button className="p-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100"><XCircle className="h-4 w-4" /></button>
                        <button className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"><Eye className="h-4 w-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
