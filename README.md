# Geo Connect — Geothermal Community Hub (MVP Demo)

> ⚠️ **Disclaimer**: Platform ini adalah **MVP/Prototype** untuk keperluan **business plan competition**. Semua data adalah simulasi. Tidak ada data nyata, pengguna nyata, atau kerja sama dengan perusahaan geothermal manapun.

## 🌋 Tentang Platform

**Geo Connect** (Geothermal Community Hub) adalah platform digital yang menghubungkan operator/industri geothermal dengan masyarakat lokal melalui tiga fungsi utama:

| Fungsi | Deskripsi |
|--------|-----------|
| **CONNECT** | Menghubungkan industri geothermal dengan masyarakat lokal, talenta, UMKM, supplier, dan komunitas |
| **MATCH** | Mencocokkan kebutuhan industri dengan potensi masyarakat (Skill↔Pekerjaan, UMKM↔Kebutuhan, dll) |
| **MEASURE** | Mengukur dampak program: Social, Economic, Energy, ESG Impact |

## 🛠️ Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Charts | Recharts |
| Icons | Lucide React |
| State Management | Zustand |
| Validation | Zod (ready for forms) |
| Form | React Hook Form (ready) |

## 🚀 Cara Menjalankan

```bash
# 1. Masuk ke folder project
cd geothermal-hub

# 2. Install dependencies (jika belum)
npm install

# 3. Jalankan development server
npm run dev

# 4. Buka browser
# http://localhost:3000
```

## 📁 Struktur Folder

```
geothermal-hub/
└── src/
    ├── app/
    │   ├── page.tsx              # Landing Page
    │   ├── login/page.tsx        # Halaman pemilihan role
    │   ├── industry/
    │   │   ├── dashboard/        # Dashboard Industri
    │   │   ├── talent/           # Talent Pool
    │   │   ├── jobs/             # Manajemen Lowongan
    │   │   ├── internships/      # Program Magang
    │   │   ├── training/         # Program Training
    │   │   ├── suppliers/        # Supplier Lokal
    │   │   ├── direct-use/       # Direct-Use Geothermal
    │   │   ├── community-programs/ # Program Komunitas
    │   │   ├── esg/              # ESG Dashboard
    │   │   └── settings/         # Pengaturan
    │   ├── agent/
    │   │   ├── dashboard/        # Dashboard Community Agent
    │   │   ├── members/          # Manajemen Anggota
    │   │   ├── jobs/             # Info Lowongan
    │   │   ├── training/         # Info Pelatihan
    │   │   ├── business/         # Peluang Bisnis
    │   │   ├── suppliers/        # Info Supplier
    │   │   ├── direct-use/       # Info Direct-Use
    │   │   ├── placements/       # Tracking Penempatan
    │   │   └── reports/          # Laporan
    │   ├── community/
    │   │   ├── dashboard/        # Dashboard Masyarakat
    │   │   ├── jobs/             # Peluang Kerja
    │   │   ├── training/         # Pelatihan
    │   │   ├── internships/      # Magang
    │   │   ├── business/         # Peluang Usaha
    │   │   ├── matching/         # Opportunity Matching
    │   │   └── profile/          # Profil Saya
    │   └── admin/
    │       ├── dashboard/        # Dashboard Admin
    │       └── moderation/       # Moderasi Konten
    ├── components/
    │   ├── ui/                   # Komponen dasar (Badge, Button, Card, dll)
    │   ├── layout/               # Sidebar, Navbar, DashboardLayout
    │   ├── opportunities/        # JobCard, TrainingCard, SupplierCard, MatchResultCard
    │   └── charts/               # Chart components (Recharts)
    ├── lib/
    │   ├── mock-data.ts          # Semua data simulasi
    │   ├── matching.ts           # Algoritma matching sederhana
    │   ├── store.ts              # Zustand store
    │   └── utils.ts              # Utility functions
    └── types/
        └── index.ts              # TypeScript interfaces
```

## 👤 Demo Role & Akun

Buka `/login` dan pilih role:

| Role | Demo User | Dashboard |
|------|-----------|-----------|
| **Industri Geothermal** | PT Geothermal Demo | `/industry/dashboard` |
| **Community Agent** | Pak Rahman (Demo) | `/agent/dashboard` |
| **Masyarakat** | Andi Pratama (Demo) | `/community/dashboard` |
| **Admin** | Admin Platform | `/admin/dashboard` |

> Tidak ada autentikasi nyata — cukup klik role untuk langsung masuk ke dashboard.

## ✨ Fitur MVP

### 🏭 Industri Geothermal
- Dashboard KPI (Kandidat, Supplier, Program, Dampak)
- Talent Pool dengan table/grid view dan filter
- Manajemen Lowongan Kerja
- Program Internship & Training
- Supplier Lokal dengan verifikasi
- Direct-Use Geothermal (Interactive Matching Engine - Simulasi)
- Program Komunitas dengan progress tracking
- ESG Impact Dashboard dengan charts

### 👥 Community Agent
- Dashboard dengan statistik anggota
- **Assisted Registration** (Bantu masyarakat daftar)
- Manajemen anggota komunitas
- Tracking penempatan
- Laporan komunitas

### 🌱 Masyarakat
- Dashboard dengan profil completion indicator
- Peluang Kerja dengan match score
- Program Pelatihan & Magang
- Peluang Usaha / UMKM
- **Opportunity Matching** dengan skor dan alasan match
- Profil lengkap dengan skill tags

### ⚙️ Admin
- Overview platform
- Antrian moderasi (Approve/Reject)
- Analytics pertumbuhan platform

## 📊 Data Model

Entities tersedia di `src/types/index.ts`:
- `User`, `Industry`, `CommunityMember`, `CommunityAgent`
- `Job`, `Internship`, `Training`, `Supplier`
- `CommunityProgram`, `DirectUseOpportunity`
- `Application`, `ESGMetric`, `Notification`, `MatchResult`

---

*MVP ini dibuat untuk keperluan demonstrasi konsep platform Geothermal Community Hub as a Service.*
