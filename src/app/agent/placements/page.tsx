'use client';
import React from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { DemoBadge, StatusBadge } from '@/components/ui/badges';
import { Card, CardContent } from '@/components/ui/card';
import { mockApplications } from '@/lib/mock-data';
import { formatShortDate } from '@/lib/utils';
import { CheckCircle, Clock, XCircle, Eye } from 'lucide-react';

export default function AgentPlacementsPage() {
  const statusIcon: Record<string, React.ReactNode> = {
    accepted: <CheckCircle className="h-4 w-4 text-emerald-500" />,
    pending: <Clock className="h-4 w-4 text-amber-500" />,
    rejected: <XCircle className="h-4 w-4 text-red-500" />,
    reviewed: <Eye className="h-4 w-4 text-blue-500" />,
  };

  return (
    <DashboardLayout title="Tracking Penempatan">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Tracking Penempatan</h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Pantau status lamaran anggota komunitas Anda.</p>
          </div>
          <div className="self-start">
            <DemoBadge />
          </div>
        </div>
        <Card>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Anggota</th>
                  <th>Peluang</th>
                  <th>Tipe</th>
                  <th>Status</th>
                  <th>Tanggal</th>
                </tr>
              </thead>
              <tbody>
                {mockApplications.map(app => (
                  <tr key={app.id}>
                    <td className="font-medium text-gray-900">{app.memberName}</td>
                    <td className="text-gray-600">{app.opportunityTitle}</td>
                    <td>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full capitalize">
                        {app.opportunityType}
                      </span>
                    </td>
                    <td>
                      <div className="flex items-center gap-1.5">
                        {statusIcon[app.status]}
                        <StatusBadge status={app.status} />
                      </div>
                    </td>
                    <td className="text-gray-500">{formatShortDate(app.appliedAt)}</td>
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
