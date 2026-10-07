import React from 'react';
import Link from 'next/link';
import {
  Zap, Network, BarChart3, ChevronRight, ArrowRight,
  Users, Building2, UserCheck, Briefcase, GraduationCap,
  ShoppingBag, TrendingUp, Shield, Globe, CheckCircle2,
  Thermometer, LineChart
} from 'lucide-react';
import { PublicNav } from '@/components/layout/navbar';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a1209]">
      <PublicNav />

      {/* HERO */}
      <section className="relative pt-28 pb-24 px-4 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-emerald-900/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-700/40 bg-emerald-900/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium">MVP Demo · Simulasi untuk Business Plan Competition</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Geo <span className="text-emerald-400">Connect</span>
          </h1>

          <p className="text-xl text-gray-400 font-medium mb-3">
            "Connecting Geothermal Energy with Local Communities"
          </p>

          <p className="text-base text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Platform yang menghubungkan kebutuhan industri geothermal dengan potensi masyarakat lokal
            melalui peluang kerja, pelatihan, bisnis, supplier, dan pemanfaatan langsung panas bumi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500
                text-white font-semibold text-base transition-all duration-200 hover:shadow-lg hover:shadow-emerald-900/50"
            >
              Mulai Eksplorasi
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/20
                text-white font-semibold text-base hover:bg-white/5 transition-colors"
            >
              Lihat Cara Kerja
              <ChevronRight className="h-5 w-5" />
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { label: 'Fungsi Utama', value: '3', desc: 'CONNECT · MATCH · MEASURE' },
              { label: 'Role Pengguna', value: '4', desc: 'Industri, Agen, Masyarakat, Admin' },
              { label: 'Kategori Peluang', value: '8+', desc: 'Kerja, Training, Bisnis, Direct-Use' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-emerald-400">{stat.value}</div>
                <div className="text-sm text-gray-300 font-medium mt-0.5">{stat.label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECT MATCH MEASURE */}
      <section id="connect" className="py-20 px-4 bg-[#0d1a10]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-2">Core Value</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Platform dengan Tiga Fungsi Utama
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Network className="h-7 w-7" />,
                color: 'emerald',
                title: 'CONNECT',
                subtitle: 'Hubungkan Ekosistem',
                description: 'Menghubungkan industri geothermal dengan masyarakat lokal, talenta, UMKM, supplier, dan komunitas dalam satu platform terintegrasi.',
                items: ['Industri ↔ Masyarakat', 'Perusahaan ↔ Supplier Lokal', 'UMKM ↔ Peluang Bisnis'],
              },
              {
                icon: <Zap className="h-7 w-7" />,
                color: 'teal',
                title: 'MATCH',
                subtitle: 'Cocokkan Potensi',
                description: 'Mencocokkan kebutuhan industri dengan potensi masyarakat lokal secara cerdas melalui scoring berbasis profil dan lokasi.',
                items: ['Skill ↔ Lowongan', 'Talenta ↔ Internship', 'UMKM ↔ Kebutuhan Industri'],
              },
              {
                icon: <BarChart3 className="h-7 w-7" />,
                color: 'gold',
                title: 'MEASURE',
                subtitle: 'Ukur Dampak Nyata',
                description: 'Mengukur dan melaporkan dampak program secara komprehensif untuk kebutuhan ESG, CSR, dan pelaporan keberlanjutan.',
                items: ['Social Impact', 'Economic Impact', 'ESG & Energy Impact'],
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`relative p-6 rounded-2xl border bg-linear-to-b
                  ${item.color === 'emerald' ? 'border-emerald-700/40 from-emerald-900/30 to-transparent' : ''}
                  ${item.color === 'teal' ? 'border-teal-700/40 from-teal-900/30 to-transparent' : ''}
                  ${item.color === 'gold' ? 'border-amber-700/40 from-amber-900/20 to-transparent' : ''}
                `}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4
                  ${item.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' : ''}
                  ${item.color === 'teal' ? 'bg-teal-500/20 text-teal-400' : ''}
                  ${item.color === 'gold' ? 'bg-amber-500/20 text-amber-400' : ''}
                `}>
                  {item.icon}
                </div>
                <div className={`text-xs font-bold tracking-widest mb-1
                  ${item.color === 'emerald' ? 'text-emerald-400' : ''}
                  ${item.color === 'teal' ? 'text-teal-400' : ''}
                  ${item.color === 'gold' ? 'text-amber-400' : ''}
                `}>
                  {item.title}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.subtitle}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.items.map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-2">Alur Platform</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Bagaimana Platform Bekerja?
            </h2>
          </div>

          {/* Flow diagram */}
          <div className="relative">
            <div className="flex flex-col items-center gap-0">
              {/* Industry box */}
              <div className="flex flex-col items-center">
                <div className="bg-emerald-900/50 border border-emerald-700/40 rounded-2xl px-8 py-4 flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-emerald-400" />
                  <div>
                    <div className="text-white font-semibold">Industri Panas Bumi</div>
                    <div className="text-gray-400 text-xs">Operator Geothermal</div>
                  </div>
                </div>
                <div className="w-px h-8 bg-emerald-700/40" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>

              {/* Hub box */}
              <div className="w-px h-4 bg-emerald-700/40" />
              <div className="bg-linear-to-r from-emerald-900/60 to-teal-900/60 border border-emerald-600/40 rounded-2xl px-10 py-5 text-center my-2">
                <div className="flex items-center gap-2 justify-center mb-1">
                  <Zap className="h-5 w-5 text-emerald-400" />
                  <span className="text-white font-bold text-lg">Geo Connect</span>
                </div>
                <div className="text-emerald-400 text-sm">CONNECT · MATCH · MEASURE</div>
              </div>
              <div className="w-px h-4 bg-emerald-700/40" />
              <div className="w-3 h-3 rounded-full bg-teal-500" />

              {/* Agent */}
              <div className="w-px h-4 bg-teal-700/40" />
              <div className="bg-teal-900/50 border border-teal-700/40 rounded-2xl px-8 py-4 flex items-center gap-3">
                <UserCheck className="h-6 w-6 text-teal-400" />
                <div>
                  <div className="text-white font-semibold">Community Agent</div>
                  <div className="text-gray-400 text-xs">Jembatan Platform & Masyarakat</div>
                </div>
              </div>
              <div className="w-px h-4 bg-teal-700/40" />
              <div className="w-3 h-3 rounded-full bg-blue-400" />

              {/* Community */}
              <div className="w-px h-4 bg-blue-700/40" />
              <div className="bg-blue-900/30 border border-blue-700/40 rounded-2xl px-8 py-4 flex items-center gap-3">
                <Users className="h-6 w-6 text-blue-400" />
                <div>
                  <div className="text-white font-semibold">Masyarakat Lokal</div>
                  <div className="text-gray-400 text-xs">Talenta, UMKM, Petani, Nelayan</div>
                </div>
              </div>
            </div>

            {/* Branches */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: <Briefcase className="h-5 w-5" />,
                  title: 'Pekerjaan & Pelatihan',
                  items: ['Lowongan Kerja', 'Program Magang', 'Pelatihan Skill'],
                  color: 'emerald',
                },
                {
                  icon: <ShoppingBag className="h-5 w-5" />,
                  title: 'Usaha & Supplier',
                  items: ['UMKM Lokal', 'Supplier Network', 'Peluang Bisnis'],
                  color: 'teal',
                },
                {
                  icon: <Thermometer className="h-5 w-5" />,
                  title: 'Pemanfaatan Langsung',
                  items: ['Aquaculture', 'Pengeringan', 'Pariwisata Geothermal'],
                  color: 'amber',
                },
              ].map((branch) => (
                <div
                  key={branch.title}
                  className={`p-4 rounded-xl border
                    ${branch.color === 'emerald' ? 'border-emerald-700/40 bg-emerald-900/20' : ''}
                    ${branch.color === 'teal' ? 'border-teal-700/40 bg-teal-900/20' : ''}
                    ${branch.color === 'amber' ? 'border-amber-700/40 bg-amber-900/20' : ''}
                  `}
                >
                  <div className={`flex items-center gap-2 mb-3
                    ${branch.color === 'emerald' ? 'text-emerald-400' : ''}
                    ${branch.color === 'teal' ? 'text-teal-400' : ''}
                    ${branch.color === 'amber' ? 'text-amber-400' : ''}
                  `}>
                    {branch.icon}
                    <span className="font-semibold text-white text-sm">{branch.title}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {branch.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-gray-400">
                        <ChevronRight className="h-3 w-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section id="value" className="py-20 px-4 bg-[#0d1a10]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Industri */}
            <div>
              <div className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">Untuk Industri</div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Nilai untuk Operator Geothermal
              </h2>
              <div className="space-y-4">
                {[
                  { icon: <Users className="h-5 w-5" />, title: 'Local Talent Pipeline', desc: 'Akses ke kandidat terampil dari komunitas lokal yang sudah terverifikasi' },
                  { icon: <ShoppingBag className="h-5 w-5" />, title: 'Local Supplier Network', desc: 'Jaringan supplier dan vendor lokal terverifikasi dengan matching score' },
                  { icon: <Globe className="h-5 w-5" />, title: 'Community Engagement', desc: 'Dashboard terintegrasi untuk mengelola program komunitas dan CSR' },
                  { icon: <Thermometer className="h-5 w-5" />, title: 'Direct-Use Opportunities', desc: 'Identifikasi dan fasilitasi pemanfaatan langsung panas bumi untuk masyarakat' },
                  { icon: <BarChart3 className="h-5 w-5" />, title: 'ESG Monitoring', desc: 'Dashboard ESG lengkap dengan Social, Economic, dan Energy impact metrics' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{item.title}</div>
                      <div className="text-gray-400 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Masyarakat */}
            <div>
              <div className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-3">Untuk Masyarakat</div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Nilai untuk Komunitas Lokal
              </h2>
              <div className="space-y-4">
                {[
                  { icon: <GraduationCap className="h-5 w-5" />, title: 'Akses Pelatihan', desc: 'Program pelatihan skill yang relevan dengan kebutuhan industri geothermal' },
                  { icon: <Briefcase className="h-5 w-5" />, title: 'Peluang Magang', desc: 'Program magang di perusahaan geothermal untuk membangun pengalaman' },
                  { icon: <CheckCircle2 className="h-5 w-5" />, title: 'Info Lowongan', desc: 'Informasi lowongan kerja yang diprioritaskan untuk talenta lokal' },
                  { icon: <TrendingUp className="h-5 w-5" />, title: 'Peluang Usaha', desc: 'Akses ke peluang bisnis dan program pengembangan UMKM lokal' },
                  { icon: <Thermometer className="h-5 w-5" />, title: 'Direct-Use Geothermal', desc: 'Informasi pemanfaatan panas bumi untuk pertanian, perikanan, dan wisata' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-9 h-9 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{item.title}</div>
                      <div className="text-gray-400 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Preview */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Diferensiasi Utama</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bukan Sekadar Job Portal
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Geo Connect adalah platform layanan yang mengintegrasikan talent matching,
            supplier network, direct-use opportunities, dan ESG reporting dalam satu ekosistem digital.
          </p>

          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { icon: <Users className="h-6 w-6" />, label: 'Talent Matching', color: 'emerald' },
              { icon: <ShoppingBag className="h-6 w-6" />, label: 'Supplier Network', color: 'teal' },
              { icon: <Thermometer className="h-6 w-6" />, label: 'Direct-Use', color: 'teal' },
              { icon: <LineChart className="h-6 w-6" />, label: 'ESG Reporting', color: 'amber' },
            ].map((item) => (
              <div
                key={item.label}
                className={`p-5 rounded-2xl border text-center
                  ${item.color === 'emerald' ? 'border-emerald-700/40 bg-emerald-900/30' : ''}
                  ${item.color === 'teal' ? 'border-teal-700/40 bg-teal-900/30' : ''}
                  ${item.color === 'amber' ? 'border-amber-700/40 bg-amber-900/20' : ''}
                `}
              >
                <div className={`flex justify-center mb-3
                  ${item.color === 'emerald' ? 'text-emerald-400' : ''}
                  ${item.color === 'teal' ? 'text-teal-400' : ''}
                  ${item.color === 'amber' ? 'text-amber-400' : ''}
                `}>
                  {item.icon}
                </div>
                <div className="text-white text-sm font-semibold">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Siap Menjelajahi Platform?
          </h2>
          <p className="text-gray-400 mb-8">
            Masuk sebagai Industri, Community Agent, atau Masyarakat untuk menjelajahi fitur lengkap MVP.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500
              text-white font-bold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-emerald-900/50"
          >
            Mulai Demo
            <ArrowRight className="h-5 w-5" />
          </Link>
          <p className="text-gray-600 text-sm mt-4">
            ⚠️ Platform ini adalah MVP/Prototype untuk keperluan business plan competition.
            Semua data merupakan simulasi.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center">
              <Zap className="h-3.5 w-3.5 text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">Geo Connect</div>
              <div className="text-gray-500 text-xs">MVP · Business Plan Competition Demo</div>
            </div>
          </div>
          <div className="text-gray-600 text-xs text-center">
            © 2024 Geo Connect · Semua data adalah simulasi · Prototype untuk demonstrasi konsep
          </div>
        </div>
      </footer>
    </div>
  );
}
