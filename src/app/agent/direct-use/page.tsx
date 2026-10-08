'use client';
import React from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { DemoBadge } from '@/components/ui/badges';
import { mockDirectUseOpportunities } from '@/lib/mock-data';
import { Card, CardContent } from '@/components/ui/card';
import { StatusBadge } from '@/components/ui/badges';
import { Thermometer } from 'lucide-react';

const categoryLabels: Record<string, string> = {
  aquaculture: '🐟 Aquaculture', agriculture: '🌱 Pertanian',
  drying: '🌾 Pengeringan', 'process-heat': '🏭 Panas Proses',
  tourism: '♨️ Pariwisata', heating: '🔥 Pemanas',
};

export default function AgentDirectUsePage() {
  return (
    <DashboardLayout title="Direct-Use">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Peluang Direct-Use</h1>
            <p className="text-gray-500 mt-1">Peluang pemanfaatan langsung panas bumi untuk komunitas.</p>
          </div>
          <DemoBadge />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {mockDirectUseOpportunities.map(opp => (
            <Card key={opp.id} hover>
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <StatusBadge status={opp.status} />
                      <span className="text-xs text-gray-500">{categoryLabels[opp.category]}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">{opp.title}</h3>
                    <p className="text-sm text-gray-600 mt-2 mb-3">{opp.description}</p>
                    <div className="flex items-center gap-2 text-xs text-emerald-600 font-medium">
                      <Thermometer className="h-3.5 w-3.5" />
                      Suhu: {opp.temperatureRange}
                    </div>
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
