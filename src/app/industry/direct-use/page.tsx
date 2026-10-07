'use client';

import React, { useState } from 'react';
import {
  Thermometer, Droplets, MapPin, Zap, ChevronRight,
  AlertTriangle, CheckCircle, Info
} from 'lucide-react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DemoBadge, StatusBadge } from '@/components/ui/badges';
import { mockDirectUseOpportunities } from '@/lib/mock-data';

const categoryIcons: Record<string, React.ReactNode> = {
  aquaculture: '🐟',
  agriculture: '🌱',
  drying: '🌾',
  'process-heat': '🏭',
  tourism: '♨️',
  heating: '🔥',
};

const categoryLabels: Record<string, string> = {
  aquaculture: 'Aquaculture',
  agriculture: 'Pertanian',
  drying: 'Pengeringan',
  'process-heat': 'Panas Proses',
  tourism: 'Pariwisata',
  heating: 'Pemanas',
};

export default function DirectUsePage() {
  const [temperature, setTemperature] = useState(70);
  const [flowRate, setFlowRate] = useState(50);
  const [location, setLocation] = useState('Demo Area');

  // Simple filter: show opportunities where required temp <= input temp
  const matchedOpportunities = mockDirectUseOpportunities.filter(
    (opp) => opp.requiredTemp <= temperature
  );

  return (
    <DashboardLayout title="Direct-Use Geothermal">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Peluang Direct-Use Geothermal</h1>
            <p className="text-gray-500 mt-1">Identifikasi pemanfaatan langsung panas bumi untuk masyarakat sekitar.</p>
          </div>
          <DemoBadge />
        </div>

        {/* Demo Warning */}
        <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
          <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-amber-800 font-semibold text-sm">Data Simulasi — MVP Demo</p>
            <p className="text-amber-700 text-sm mt-0.5">
              Semua parameter suhu, laju alir, dan rekomendasi di halaman ini adalah simulasi untuk keperluan demonstrasi.
              Tidak merepresentasikan kondisi geothermal nyata di lokasi manapun.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Input Panel */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-emerald-600" />
                  <h2 className="font-semibold text-gray-800">Parameter Resource</h2>
                </div>
                <p className="text-xs text-gray-500 mt-1">Masukkan parameter geothermal untuk melihat rekomendasi peluang</p>
              </CardHeader>
              <CardContent className="space-y-5">
                {/* Temperature */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Suhu Resource</label>
                    <span className="text-lg font-bold text-emerald-600">{temperature}°C</span>
                  </div>
                  <input
                    type="range"
                    min={20}
                    max={150}
                    value={temperature}
                    onChange={(e) => setTemperature(Number(e.target.value))}
                    className="w-full accent-emerald-600"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>20°C</span>
                    <span>150°C</span>
                  </div>
                </div>

                {/* Flow Rate */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Laju Alir</label>
                    <span className="text-lg font-bold text-teal-600">{flowRate} L/mnt</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={200}
                    value={flowRate}
                    onChange={(e) => setFlowRate(Number(e.target.value))}
                    className="w-full accent-teal-600"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>5 L/mnt</span>
                    <span>200 L/mnt</span>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Lokasi</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Capacity */}
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm font-semibold text-emerald-800">Potensi Kapasitas (Simulasi)</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-500">Thermal Power:</span>
                      <span className="text-gray-800 font-medium ml-1">
                        ~{Math.round(flowRate * (temperature - 20) * 0.004)} kW
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">Status:</span>
                      <span className="text-emerald-600 font-medium ml-1">
                        {temperature >= 60 ? 'High' : temperature >= 40 ? 'Medium' : 'Low'}
                      </span>
                    </div>
                  </div>
                </div>

                <Button className="w-full">
                  Analisis Peluang
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-gray-800">Rekomendasi Peluang</h2>
                <p className="text-xs text-gray-500">
                  {matchedOpportunities.length} peluang sesuai dengan parameter suhu {temperature}°C
                </p>
              </div>
              <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full">
                <Info className="h-3 w-3 inline mr-1" />
                Opportunity Matching Engine (Simulasi)
              </span>
            </div>

            {matchedOpportunities.map((opp) => (
              <Card key={opp.id} hover>
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl shrink-0">{categoryIcons[opp.category]}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{opp.title}</h3>
                        <StatusBadge status={opp.status} />
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                        <span className="flex items-center gap-1">
                          <Thermometer className="h-3 w-3" />
                          {opp.temperatureRange}
                        </span>
                        <span className="flex items-center gap-1">
                          <Droplets className="h-3 w-3" />
                          {opp.requiredFlow}
                        </span>
                        <span className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">
                          {categoryLabels[opp.category]}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{opp.description}</p>

                      {/* Benefits */}
                      <div className="space-y-1">
                        {opp.benefits.slice(0, 3).map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                            <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-xs text-emerald-600 font-medium">{opp.potentialImpact}</span>
                        <Button size="sm" variant="outline">
                          Pelajari Lebih <ChevronRight className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {matchedOpportunities.length === 0 && (
              <div className="text-center py-12 text-gray-400 border-2 border-dashed border-gray-200 rounded-xl">
                <Thermometer className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                <p className="font-medium">Tidak ada peluang yang cocok</p>
                <p className="text-sm mt-1">Naikkan suhu resource untuk melihat lebih banyak peluang</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
