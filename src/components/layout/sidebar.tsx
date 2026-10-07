'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, Users, Briefcase, GraduationCap, BookOpen,
  ShoppingBag, Zap, Globe, BarChart3, Settings, ChevronLeft,
  ChevronRight, X, ClipboardList, Building2, FileText, LogOut,
  Network, UserCheck, TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAppStore } from '@/lib/store';
import type { UserRole } from '@/types';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const industryNav: NavItem[] = [
  { label: 'Dashboard', href: '/industry/dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: 'Talent Pool', href: '/industry/talent', icon: <Users className="h-4 w-4" /> },
  { label: 'Lowongan', href: '/industry/jobs', icon: <Briefcase className="h-4 w-4" /> },
  { label: 'Internship', href: '/industry/internships', icon: <GraduationCap className="h-4 w-4" /> },
  { label: 'Training', href: '/industry/training', icon: <BookOpen className="h-4 w-4" /> },
  { label: 'Supplier Lokal', href: '/industry/suppliers', icon: <ShoppingBag className="h-4 w-4" /> },
  { label: 'Direct-Use', href: '/industry/direct-use', icon: <Zap className="h-4 w-4" /> },
  { label: 'Program Komunitas', href: '/industry/community-programs', icon: <Globe className="h-4 w-4" /> },
  { label: 'ESG Impact', href: '/industry/esg', icon: <BarChart3 className="h-4 w-4" /> },
  { label: 'Pengaturan', href: '/industry/settings', icon: <Settings className="h-4 w-4" /> },
];

const agentNav: NavItem[] = [
  { label: 'Dashboard', href: '/agent/dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: 'Anggota', href: '/agent/members', icon: <Users className="h-4 w-4" /> },
  { label: 'Lowongan', href: '/agent/jobs', icon: <Briefcase className="h-4 w-4" /> },
  { label: 'Pelatihan', href: '/agent/training', icon: <BookOpen className="h-4 w-4" /> },
  { label: 'Peluang Bisnis', href: '/agent/business', icon: <ShoppingBag className="h-4 w-4" /> },
  { label: 'Supplier', href: '/agent/suppliers', icon: <Building2 className="h-4 w-4" /> },
  { label: 'Direct-Use', href: '/agent/direct-use', icon: <Zap className="h-4 w-4" /> },
  { label: 'Penempatan', href: '/agent/placements', icon: <UserCheck className="h-4 w-4" /> },
  { label: 'Laporan', href: '/agent/reports', icon: <FileText className="h-4 w-4" /> },
];

const communityNav: NavItem[] = [
  { label: 'Beranda', href: '/community/dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: 'Peluang Kerja', href: '/community/jobs', icon: <Briefcase className="h-4 w-4" /> },
  { label: 'Pelatihan', href: '/community/training', icon: <BookOpen className="h-4 w-4" /> },
  { label: 'Magang', href: '/community/internships', icon: <GraduationCap className="h-4 w-4" /> },
  { label: 'Peluang Usaha', href: '/community/business', icon: <ShoppingBag className="h-4 w-4" /> },
  { label: 'Matching', href: '/community/matching', icon: <Network className="h-4 w-4" /> },
  { label: 'Profil Saya', href: '/community/profile', icon: <Settings className="h-4 w-4" /> },
];

const adminNav: NavItem[] = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: 'Industri', href: '/admin/industries', icon: <Building2 className="h-4 w-4" /> },
  { label: 'Masyarakat', href: '/admin/members', icon: <Users className="h-4 w-4" /> },
  { label: 'Peluang', href: '/admin/opportunities', icon: <Briefcase className="h-4 w-4" /> },
  { label: 'Program', href: '/admin/programs', icon: <Globe className="h-4 w-4" /> },
  { label: 'Moderasi', href: '/admin/moderation', icon: <ClipboardList className="h-4 w-4" /> },
  { label: 'Laporan', href: '/admin/reports', icon: <TrendingUp className="h-4 w-4" /> },
];

function getNavItems(role: UserRole | null): NavItem[] {
  switch (role) {
    case 'industry': return industryNav;
    case 'agent': return agentNav;
    case 'community': return communityNav;
    case 'admin': return adminNav;
    default: return [];
  }
}

function getRoleLabel(role: UserRole | null): string {
  switch (role) {
    case 'industry': return 'Industri Geothermal';
    case 'agent': return 'Community Agent';
    case 'community': return 'Masyarakat';
    case 'admin': return 'Administrator';
    default: return '';
  }
}

function getRoleColor(role: UserRole | null): string {
  switch (role) {
    case 'industry': return 'bg-emerald-100 text-emerald-800';
    case 'agent': return 'bg-teal-100 text-teal-800';
    case 'community': return 'bg-blue-100 text-blue-800';
    case 'admin': return 'bg-purple-100 text-purple-800';
    default: return 'bg-gray-100 text-gray-600';
  }
}

export function Sidebar() {
  const pathname = usePathname();
  const { currentRole, userName, companyName, sidebarOpen, setSidebarOpen, logout } = useAppStore();

  const navItems = getNavItems(currentRole);

  // Automatically close sidebar on mobile when navigating or on initial mobile load
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      }
    };
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setSidebarOpen]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  }, [pathname, setSidebarOpen]);

  const handleLinkClick = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Mobile backdrop overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden transition-opacity duration-300',
          sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar drawer */}
      <aside
        className={cn(
          // Base styles
          'fixed inset-y-0 left-0 z-50 flex flex-col bg-[#111b14] transition-all duration-300 ease-in-out',
          // Mobile (<lg): Off-screen drawer when closed, slide in when open
          'w-64 max-w-[85vw] shadow-2xl',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full',
          // Desktop (lg+): In normal page layout flow, never translated off-screen
          'lg:static lg:translate-x-0 lg:z-auto lg:shadow-none',
          sidebarOpen ? 'lg:w-60' : 'lg:w-16'
        )}
      >
        {/* Logo & Close / Collapse Toggle */}
        <div className="flex items-center gap-3 px-4 py-5 border-b border-white/10 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center shrink-0">
            <Zap className="h-4 w-4 text-white" />
          </div>
          <div className={cn('overflow-hidden', !sidebarOpen && 'lg:hidden')}>
            <div className="text-white font-bold text-sm leading-tight whitespace-nowrap">
              Geo Connect
            </div>
            <div className="text-emerald-400 text-xs whitespace-nowrap">Community Hub</div>
          </div>
          {/* Desktop collapse toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="ml-auto text-gray-400 hover:text-white transition-colors lg:block hidden p-1 rounded-md hover:bg-white/5"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
          {/* Mobile close button */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="ml-auto text-gray-400 hover:text-white transition-colors lg:hidden p-1 rounded-md hover:bg-white/10"
            aria-label="Tutup menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* User info */}
        {currentRole && (
          <div className={cn('px-4 py-3 border-b border-white/10 shrink-0', !sidebarOpen && 'lg:hidden')}>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold">
                  {userName ? userName.charAt(0).toUpperCase() : 'U'}
                </span>
              </div>
              <div className="overflow-hidden min-w-0">
                <div className="text-white text-sm font-medium truncate">{userName}</div>
                <span className={cn('text-xs px-1.5 py-0.5 rounded-full font-medium inline-block mt-0.5', getRoleColor(currentRole))}>
                  {getRoleLabel(currentRole)}
                </span>
              </div>
            </div>
            {companyName && (
              <div className="mt-2 text-gray-400 text-xs truncate">{companyName}</div>
            )}
          </div>
        )}

        {/* Nav items */}
        <nav className="flex-1 px-2 py-4 overflow-y-auto">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 group',
                    isActive
                      ? 'bg-emerald-600 text-white font-medium shadow-xs'
                      : 'text-gray-400 hover:bg-white/10 hover:text-white'
                  )}
                  title={!sidebarOpen ? item.label : undefined}
                >
                  <span className={cn(
                    'shrink-0 transition-colors',
                    isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                  )}>
                    {item.icon}
                  </span>
                  <span className={cn('text-sm font-medium whitespace-nowrap', !sidebarOpen && 'lg:hidden')}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Logout */}
        <div className="px-2 py-3 border-t border-white/10 shrink-0">
          <Link
            href="/login"
            onClick={() => {
              logout();
              handleLinkClick();
            }}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-white/10 hover:text-white transition-all duration-150 w-full"
            title={!sidebarOpen ? 'Keluar' : undefined}
          >
            <LogOut className="h-4 w-4 shrink-0" />
            <span className={cn('text-sm font-medium', !sidebarOpen && 'lg:hidden')}>Keluar</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
