'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Bell, Menu, Search, ChevronDown, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAppStore } from '@/lib/store';
import { mockNotifications } from '@/lib/mock-data';
import { formatShortDate } from '@/lib/utils';

interface TopNavProps {
  title?: string;
}

export function TopNav({ title }: TopNavProps) {
  const { currentRole, userName, sidebarOpen, setSidebarOpen, notifications } = useAppStore();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const userNotifications = mockNotifications.filter(n => !n.read).slice(0, 5);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200 h-14 flex items-center px-3 sm:px-4 gap-2 sm:gap-3 shrink-0">
      {/* Mobile hamburger */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors shrink-0"
        aria-label="Buka menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Title */}
      {title && (
        <div className={cn("min-w-0", showSearch && "hidden sm:block")}>
          <h1 className="text-sm sm:text-base font-semibold text-gray-800 truncate max-w-35 sm:max-w-none">{title}</h1>
        </div>
      )}

      {/* Spacer */}
      <div className="flex-1" />

      {/* Demo badge */}
      <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
        Mode Demo
      </span>

      {/* Search */}
      <div className="relative">
        {showSearch ? (
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari peluang..."
              className="w-36 sm:w-60 px-3 py-1.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-xs"
              autoFocus
              onBlur={() => { if (!searchQuery) setShowSearch(false); }}
            />
          </div>
        ) : (
          <button
            onClick={() => setShowSearch(true)}
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
            aria-label="Cari"
          >
            <Search className="h-4.5 w-4.5" />
          </button>
        )}
      </div>

      {/* Notifications */}
      <div className="relative">
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="relative p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
          aria-label="Notifikasi"
        >
          <Bell className="h-4.5 w-4.5" />
          {notifications > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center font-bold">
              {notifications}
            </span>
          )}
        </button>

        {showNotifications && (
          <>
            {/* Mobile backdrop */}
            <div
              className="fixed inset-0 z-40 bg-black/25 sm:bg-transparent"
              onClick={() => setShowNotifications(false)}
              aria-hidden="true"
            />
            <div className="fixed inset-x-3 top-16 sm:absolute sm:inset-x-auto sm:right-0 sm:top-full sm:mt-2 sm:w-80 sm:max-w-sm bg-white border border-gray-200 rounded-xl shadow-xl z-50">
              <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                <span className="font-semibold text-gray-800 text-sm">Notifikasi</span>
                <button
                  onClick={() => setShowNotifications(false)}
                  className="text-xs text-emerald-600 hover:text-emerald-700 font-medium p-1 -mr-1"
                >
                  Tutup
                </button>
              </div>
              <div className="divide-y divide-gray-50 max-h-80 sm:max-h-96 overflow-y-auto">
                {userNotifications.length === 0 ? (
                  <div className="p-6 text-center text-gray-400 text-xs">
                    Tidak ada notifikasi baru
                  </div>
                ) : (
                  userNotifications.map((notif) => (
                    <div
                      key={notif.id}
                      className={cn(
                        'px-4 py-3 hover:bg-gray-50 transition-colors',
                        !notif.read && 'bg-emerald-50/40'
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div className={cn(
                          'w-2.5 h-2.5 rounded-full mt-1.5 shrink-0',
                          notif.type === 'opportunity' && 'bg-emerald-500',
                          notif.type === 'success' && 'bg-teal-500',
                          notif.type === 'info' && 'bg-blue-500',
                          notif.type === 'warning' && 'bg-amber-500',
                        )} />
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-gray-800 wrap-break-word leading-snug">{notif.title}</p>
                          <p className="text-xs text-gray-500 mt-1 wrap-break-word leading-relaxed">{notif.message}</p>
                          <p className="text-[11px] text-gray-400 mt-1">{formatShortDate(notif.createdAt)}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="px-4 py-2.5 border-t border-gray-100 bg-gray-50/50 rounded-b-xl">
                <button
                  onClick={() => setShowNotifications(false)}
                  className="text-xs text-emerald-600 hover:text-emerald-700 font-medium w-full text-center py-1"
                >
                  Tandai semua sudah dibaca
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* User avatar */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center">
          <span className="text-white text-sm font-bold">
            {userName?.charAt(0).toUpperCase() || 'U'}
          </span>
        </div>
      </div>
    </header>
  );
}

export function PublicNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111b14]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-sm leading-tight">Geo Connect</div>
              <div className="text-emerald-400 text-xs">Community Hub</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#connect" className="text-gray-400 hover:text-white text-sm transition-colors">Tentang</a>
            <a href="#how-it-works" className="text-gray-400 hover:text-white text-sm transition-colors">Cara Kerja</a>
            <a href="#value" className="text-gray-400 hover:text-white text-sm transition-colors">Manfaat</a>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium
                border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              Masuk
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium
                bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
            >
              Mulai Eksplorasi
            </Link>
            <button
              className="md:hidden text-gray-400"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-[#111b14] border-t border-white/10 px-4 py-4 space-y-3">
          <a href="#connect" className="block text-gray-400 hover:text-white text-sm py-1.5">Tentang</a>
          <a href="#how-it-works" className="block text-gray-400 hover:text-white text-sm py-1.5">Cara Kerja</a>
          <a href="#value" className="block text-gray-400 hover:text-white text-sm py-1.5">Manfaat</a>
        </div>
      )}
    </nav>
  );
}
