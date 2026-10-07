'use client';

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { DemoBadge } from '@/components/ui/badges';
import { SupplierCard } from '@/components/opportunities/supplier-card';
import { SearchBar, FilterSelect } from '@/components/ui/search';
import { Card } from '@/components/ui/card';
import { mockSuppliers } from '@/lib/mock-data';

const categoryOptions = [
  { value: 'all', label: 'Semua Kategori' },
  { value: 'Electrical', label: 'Electrical' },
  { value: 'Construction', label: 'Construction' },
  { value: 'Agriculture', label: 'Agriculture' },
  { value: 'Food', label: 'Food & Catering' },
  { value: 'Transportation', label: 'Transportation' },
  { value: 'Maintenance', label: 'Maintenance' },
  { value: 'IoT', label: 'IoT & Teknologi' },
];

const statusOptions = [
  { value: 'all', label: 'Semua Status' },
  { value: 'verified', label: 'Terverifikasi' },
  { value: 'pending', label: 'Menunggu' },
];

export default function IndustrySuppliersPage() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const filtered = mockSuppliers.filter(s => {
    const matchesSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.products.some(p => p.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = categoryFilter === 'all' || s.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || s.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <DashboardLayout title="Supplier Lokal">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Supplier Lokal</h1>
            <p className="text-gray-500 mt-1">Jaringan vendor dan supplier dari komunitas sekitar area operasi.</p>
          </div>
          <DemoBadge />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Total Supplier', value: mockSuppliers.length, color: 'text-gray-900' },
            { label: 'Terverifikasi', value: mockSuppliers.filter(s => s.status === 'verified').length, color: 'text-emerald-600' },
            { label: 'Menunggu Verifikasi', value: mockSuppliers.filter(s => s.status === 'pending').length, color: 'text-amber-600' },
          ].map((s) => (
            <div key={s.label} className="text-center p-3 bg-white rounded-lg border border-gray-200">
              <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <Card>
          <div className="p-4 flex flex-wrap gap-3">
            <SearchBar
              placeholder="Cari supplier, produk..."
              value={search}
              onChange={setSearch}
              className="flex-1 min-w-48"
            />
            <FilterSelect options={categoryOptions} value={categoryFilter} onChange={setCategoryFilter} />
            <FilterSelect options={statusOptions} value={statusFilter} onChange={setStatusFilter} />
          </div>
        </Card>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((supplier) => (
            <SupplierCard
              key={supplier.id}
              supplier={supplier}
              onViewDetail={() => {}}
              onRequestCollaboration={() => {}}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <p>Tidak ada supplier yang sesuai dengan filter.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
