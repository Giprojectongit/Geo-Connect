'use client';
import React from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { SupplierCard } from '@/components/opportunities/supplier-card';
import { DemoBadge } from '@/components/ui/badges';
import { mockSuppliers } from '@/lib/mock-data';
export default function AgentSuppliersPage() {
  return (
    <DashboardLayout title="Supplier">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div><h1 className="text-2xl font-bold text-gray-900">Supplier Lokal</h1>
            <p className="text-gray-500 mt-1">Supplier dari komunitas yang bisa direkomendasikan ke industri.</p></div>
          <DemoBadge />
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {mockSuppliers.map(s => <SupplierCard key={s.id} supplier={s} onViewDetail={() => {}} />)}
        </div>
      </div>
    </DashboardLayout>
  );
}
