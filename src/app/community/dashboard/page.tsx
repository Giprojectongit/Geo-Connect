'use client';

import React from 'react';
import Link from 'next/link';
import { Briefcase, BookOpen, GraduationCap, ShoppingBag, Network, ArrowRight, Star } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardContent } from '@/components/ui/card';
import { DemoBadge } from '@/components/ui/badges';
import { JobCard, TrainingCard } from '@/components/opportunities/opportunity-cards';
import { mockJobs, mockTrainings, mockCommunityMembers } from '@/lib/mock-data';

export default function CommunityDashboard() {
  const member = mockCommunityMembers[0]; // Demo: Andi Pratama
  const openJobs = mockJobs.filter(j => j.status === 'open').slice(0, 2);
  const openTrainings = mockTrainings.filter(t => t.status !== 'completed').slice(0, 1);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Hero */}
        <div className="rounded-2xl bg-linear-to-r from-emerald-800 to-teal-700 p-6 text-white">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-emerald-200 text-sm">Selamat datang kembali,</p>
              <h1 className="text-2xl font-bold mt-0.5">{member.name}</h1>
              <p className="text-emerald-200 mt-2 text-sm max-w-md">
                "Peluang untuk berkembang bersama ekosistem geothermal."
              </p>
            </div>
            <DemoBadge />
          </div>

          {/* Profile completion */}
          <div className="mt-5 bg-white/10 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Kelengkapan Profil</span>
              <span className="text-lg font-bold">{member.profileCompletion}%</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full">
              <div
                className="h-2 bg-white rounded-full transition-all duration-700"
                style={{ width: `${member.profileCompletion}%` }}
              />
            </div>
            <Link href="/community/profile">
              <p className="text-emerald-200 text-xs mt-2 hover:text-white cursor-pointer">
                Lengkapi profil untuk meningkatkan peluang match →
              </p>
            </Link>
          </div>
        </div>

        {/* Quick Menu */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { label: 'Peluang Kerja', href: '/community/jobs', icon: <Briefcase className="h-5 w-5" />, count: 5, color: 'emerald' },
            { label: 'Pelatihan', href: '/community/training', icon: <BookOpen className="h-5 w-5" />, count: 4, color: 'teal' },
            { label: 'Magang', href: '/community/internships', icon: <GraduationCap className="h-5 w-5" />, count: 2, color: 'blue' },
            { label: 'Peluang Usaha', href: '/community/business', icon: <ShoppingBag className="h-5 w-5" />, count: 4, color: 'amber' },
            { label: 'Matching', href: '/community/matching', icon: <Network className="h-5 w-5" />, count: member.matchScore, isScore: true, color: 'purple' },
          ].map((item) => (
            <Link key={item.label} href={item.href}>
              <div className={`p-4 rounded-xl border cursor-pointer hover:shadow-md transition-all text-center group
                ${item.color === 'emerald' ? 'border-emerald-200 bg-emerald-50 hover:border-emerald-400' : ''}
                ${item.color === 'teal' ? 'border-teal-200 bg-teal-50 hover:border-teal-400' : ''}
                ${item.color === 'blue' ? 'border-blue-200 bg-blue-50 hover:border-blue-400' : ''}
                ${item.color === 'amber' ? 'border-amber-200 bg-amber-50 hover:border-amber-400' : ''}
                ${item.color === 'purple' ? 'border-purple-200 bg-purple-50 hover:border-purple-400' : ''}
              `}>
                <div className={`mx-auto w-10 h-10 rounded-xl flex items-center justify-center mb-2
                  ${item.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' : ''}
                  ${item.color === 'teal' ? 'bg-teal-100 text-teal-600' : ''}
                  ${item.color === 'blue' ? 'bg-blue-100 text-blue-600' : ''}
                  ${item.color === 'amber' ? 'bg-amber-100 text-amber-600' : ''}
                  ${item.color === 'purple' ? 'bg-purple-100 text-purple-600' : ''}
                `}>
                  {item.icon}
                </div>
                <div className="font-bold text-gray-900">
                  {item.isScore ? `${item.count}%` : item.count}
                </div>
                <div className="text-xs text-gray-500">{item.label}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Recommended Jobs */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-gray-800">Lowongan yang Cocok untuk Anda</h2>
            <Link href="/community/jobs">
              <span className="text-sm text-emerald-600 hover:text-emerald-700 font-medium cursor-pointer">
                Lihat Semua →
              </span>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {openJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                variant="community"
                showMatchScore
                matchScore={job.bestMatch}
                onApply={() => alert('Demo: Fitur lamaran akan tersedia di versi lengkap')}
              />
            ))}
          </div>
        </div>

        {/* Training */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-gray-800">Pelatihan Tersedia</h2>
            <Link href="/community/training">
              <span className="text-sm text-emerald-600 hover:text-emerald-700 font-medium cursor-pointer">Lihat Semua →</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {openTrainings.map((training) => (
              <TrainingCard
                key={training.id}
                training={training}
                onApply={() => alert('Demo: Fitur daftar pelatihan akan tersedia di versi lengkap')}
              />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
