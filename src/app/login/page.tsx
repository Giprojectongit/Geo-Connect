'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Building2, UserCheck, Users, Shield, Zap, ArrowRight } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import type { UserRole } from '@/types';

const roles = [
  {
    id: 'industry' as UserRole,
    icon: <Building2 className="h-7 w-7" />,
    label: 'Industri Geothermal',
    description: 'Operator geothermal, HR, dan manajer program komunitas',
    name: 'PT Geothermal Demo',
    color: 'emerald',
    href: '/industry/dashboard',
    features: ['Talent Pool & Lowongan', 'Supplier Lokal', 'ESG Dashboard', 'Program Komunitas'],
  },
  {
    id: 'agent' as UserRole,
    icon: <UserCheck className="h-7 w-7" />,
    label: 'Community Agent',
    description: 'Jembatan antara platform dan masyarakat lokal',
    name: 'Pak Rahman (Agen Demo)',
    color: 'teal',
    href: '/agent/dashboard',
    features: ['Kelola Anggota', 'Assisted Registration', 'Tracking Penempatan', 'Laporan Komunitas'],
  },
  {
    id: 'community' as UserRole,
    icon: <Users className="h-7 w-7" />,
    label: 'Masyarakat',
    description: 'Talenta lokal, UMKM, petani, nelayan, dan pengusaha',
    name: 'Andi Pratama (Demo)',
    color: 'blue',
    href: '/community/dashboard',
    features: ['Peluang Kerja', 'Pelatihan', 'Matching Peluang', 'Profil Lengkap'],
  },
  {
    id: 'admin' as UserRole,
    icon: <Shield className="h-7 w-7" />,
    label: 'Admin Demo',
    description: 'Administrator platform untuk monitoring dan moderasi',
    name: 'Admin Platform',
    color: 'purple',
    href: '/admin/dashboard',
    features: ['Overview Platform', 'Moderasi Konten', 'Laporan & Analytics', 'Manajemen User'],
  },
];

export default function LoginPage() {
  const router = useRouter();
  const { setRole } = useAppStore();

  const handleRoleSelect = (role: typeof roles[0]) => {
    setRole(role.id, role.name, role.id === 'industry' ? role.name : undefined);
    router.push(role.href);
  };

  return (
    <div className="min-h-screen bg-[#0a1209] flex flex-col">
      {/* Header */}
      <header className="py-5 px-6 border-b border-white/10">
        <div className="max-w-5xl mx-auto flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
            <Zap className="h-4 w-4 text-white" />
          </div>
          <div>
            <div className="text-white font-bold text-sm">Geothermal Community Hub</div>
            <div className="text-emerald-400 text-xs">MVP Demo · Simulasi</div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-700/40 bg-amber-900/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-400 text-xs font-medium">Mode Demo - Tidak Perlu Autentikasi</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Pilih Role untuk Demo</h1>
            <p className="text-gray-400 text-base">
              Klik salah satu role di bawah untuk langsung masuk ke dashboard yang sesuai.
              <br />
              Tidak ada login sungguhan — ini adalah demo MVP.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => handleRoleSelect(role)}
                className={`
                  relative text-left p-6 rounded-2xl border transition-all duration-200 group
                  hover:scale-[1.02] hover:shadow-xl
                  ${role.color === 'emerald' ? 'border-emerald-700/40 bg-emerald-900/20 hover:border-emerald-500/60 hover:bg-emerald-900/40' : ''}
                  ${role.color === 'teal' ? 'border-teal-700/40 bg-teal-900/20 hover:border-teal-500/60 hover:bg-teal-900/40' : ''}
                  ${role.color === 'blue' ? 'border-blue-700/40 bg-blue-900/20 hover:border-blue-500/60 hover:bg-blue-900/40' : ''}
                  ${role.color === 'purple' ? 'border-purple-700/40 bg-purple-900/20 hover:border-purple-500/60 hover:bg-purple-900/40' : ''}
                `}
              >
                {/* Icon */}
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center mb-4
                  ${role.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' : ''}
                  ${role.color === 'teal' ? 'bg-teal-500/20 text-teal-400' : ''}
                  ${role.color === 'blue' ? 'bg-blue-500/20 text-blue-400' : ''}
                  ${role.color === 'purple' ? 'bg-purple-500/20 text-purple-400' : ''}
                `}>
                  {role.icon}
                </div>

                <h3 className="text-white font-bold text-lg mb-1">{role.label}</h3>
                <p className="text-gray-400 text-sm mb-4">{role.description}</p>

                {/* Features */}
                <ul className="space-y-1.5 mb-4">
                  {role.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0
                        ${role.color === 'emerald' ? 'bg-emerald-500' : ''}
                        ${role.color === 'teal' ? 'bg-teal-500' : ''}
                        ${role.color === 'blue' ? 'bg-blue-500' : ''}
                        ${role.color === 'purple' ? 'bg-purple-500' : ''}
                      `} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Demo user name */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Demo: {role.name}</span>
                  <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-1
                    ${role.color === 'emerald' ? 'text-emerald-400' : ''}
                    ${role.color === 'teal' ? 'text-teal-400' : ''}
                    ${role.color === 'blue' ? 'text-blue-400' : ''}
                    ${role.color === 'purple' ? 'text-purple-400' : ''}
                  `} />
                </div>
              </button>
            ))}
          </div>

          <p className="text-center text-gray-600 text-xs mt-6">
            ⚠️ Ini adalah prototype MVP untuk keperluan business plan competition.
            Tidak ada data nyata yang digunakan.
          </p>
        </div>
      </div>
    </div>
  );
}
