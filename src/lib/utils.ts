import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function formatShortDate(dateStr: string): string {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

export function getMatchColor(score: number): string {
  if (score >= 85) return 'text-emerald-600';
  if (score >= 70) return 'text-teal-600';
  if (score >= 55) return 'text-amber-600';
  return 'text-gray-500';
}

export function getMatchBgColor(score: number): string {
  if (score >= 85) return 'bg-emerald-50 border-emerald-200';
  if (score >= 70) return 'bg-teal-50 border-teal-200';
  if (score >= 55) return 'bg-amber-50 border-amber-200';
  return 'bg-gray-50 border-gray-200';
}

export function getStatusColor(status: string): string {
  const statusMap: Record<string, string> = {
    open: 'bg-emerald-100 text-emerald-800',
    active: 'bg-emerald-100 text-emerald-800',
    available: 'bg-emerald-100 text-emerald-800',
    verified: 'bg-emerald-100 text-emerald-800',
    accepted: 'bg-emerald-100 text-emerald-800',
    completed: 'bg-blue-100 text-blue-800',
    ongoing: 'bg-teal-100 text-teal-800',
    'in-progress': 'bg-teal-100 text-teal-800',
    pending: 'bg-amber-100 text-amber-800',
    upcoming: 'bg-amber-100 text-amber-800',
    employed: 'bg-blue-100 text-blue-800',
    training: 'bg-purple-100 text-purple-800',
    closed: 'bg-gray-100 text-gray-800',
    draft: 'bg-gray-100 text-gray-600',
    rejected: 'bg-red-100 text-red-800',
    unverified: 'bg-gray-100 text-gray-600',
    reviewed: 'bg-blue-100 text-blue-800',
  };
  return statusMap[status] || 'bg-gray-100 text-gray-700';
}

export function getStatusLabel(status: string): string {
  const labelMap: Record<string, string> = {
    open: 'Dibuka',
    active: 'Aktif',
    available: 'Tersedia',
    verified: 'Terverifikasi',
    accepted: 'Diterima',
    completed: 'Selesai',
    ongoing: 'Berlangsung',
    'in-progress': 'Dalam Proses',
    pending: 'Menunggu',
    upcoming: 'Akan Datang',
    employed: 'Bekerja',
    training: 'Pelatihan',
    closed: 'Ditutup',
    draft: 'Draf',
    rejected: 'Ditolak',
    unverified: 'Belum Diverifikasi',
    reviewed: 'Ditinjau',
    unemployed: 'Tidak Bekerja',
    entrepreneur: 'Wirausaha',
    student: 'Pelajar/Mahasiswa',
    'full-time': 'Full Time',
    'part-time': 'Part Time',
    contract: 'Kontrak',
    freelance: 'Freelance',
  };
  return labelMap[status] || status;
}

export function getEducationLabel(edu: string): string {
  const eduMap: Record<string, string> = {
    sd: 'SD',
    smp: 'SMP',
    sma: 'SMA/SMK',
    d3: 'D3',
    s1: 'S1',
    s2: 'S2',
  };
  return eduMap[edu] || edu.toUpperCase();
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

export function calculateDaysLeft(deadline: string): number {
  const now = new Date();
  const deadlineDate = new Date(deadline);
  const diff = deadlineDate.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

