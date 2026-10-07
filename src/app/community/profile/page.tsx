'use client';

import React, { useState } from 'react';
import { Edit3, Save, CheckCircle } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DemoBadge, SkillTag } from '@/components/ui/badges';
import { mockCommunityMembers } from '@/lib/mock-data';
import { getEducationLabel, getStatusLabel } from '@/lib/utils';

const allSkills = ['IoT', 'Arduino', 'Networking', 'Electrical', 'Agriculture', 'Aquaculture',
  'Business', 'Hospitality', 'Construction', 'Maintenance', 'Tourism', 'Food Processing', 'Digital Marketing'];

export default function CommunityProfilePage() {
  const member = mockCommunityMembers[0];
  const [editing, setEditing] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>(member.skills);
  const [saved, setSaved] = useState(false);

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const handleSave = () => {
    setEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const profileCompletion = member.profileCompletion;

  return (
    <DashboardLayout title="Profil Saya">
      <div className="max-w-3xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Profil Saya</h1>
          <div className="flex items-center gap-3">
            <DemoBadge />
            {saved && (
              <span className="flex items-center gap-1 text-emerald-600 text-sm font-medium">
                <CheckCircle className="h-4 w-4" /> Tersimpan (Demo)
              </span>
            )}
            <Button
              variant={editing ? 'primary' : 'outline'}
              onClick={editing ? handleSave : () => setEditing(true)}
            >
              {editing ? <><Save className="h-4 w-4" /> Simpan</> : <><Edit3 className="h-4 w-4" /> Edit Profil</>}
            </Button>
          </div>
        </div>

        {/* Profile completion */}
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold text-gray-800">Kelengkapan Profil</span>
              <span className="text-2xl font-bold text-emerald-600">{profileCompletion}%</span>
            </div>
            <div className="h-3 bg-gray-100 rounded-full mb-2">
              <div
                className="h-3 bg-linear-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-700"
                style={{ width: `${profileCompletion}%` }}
              />
            </div>
            <p className="text-xs text-gray-500">
              Lengkapi profil Anda untuk meningkatkan skor matching dengan peluang yang tersedia.
            </p>
          </CardContent>
        </Card>

        {/* Basic Info */}
        <Card>
          <CardHeader>
            <h2 className="font-semibold text-gray-800">Informasi Dasar</h2>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: 'Nama Lengkap', value: member.name, field: 'name' },
                { label: 'Lokasi', value: member.location, field: 'location' },
                { label: 'Kecamatan', value: member.district, field: 'district' },
                { label: 'Pendidikan', value: getEducationLabel(member.education), field: 'education' },
                { label: 'Status Pekerjaan', value: getStatusLabel(member.employmentStatus), field: 'status' },
                { label: 'Bidang Usaha', value: member.businessField || '-', field: 'business' },
              ].map((f) => (
                <div key={f.label}>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">{f.label}</label>
                  {editing ? (
                    <input
                      defaultValue={f.value}
                      className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  ) : (
                    <p className="mt-1 text-sm text-gray-800 font-medium">{f.value}</p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card>
          <CardHeader>
            <h2 className="font-semibold text-gray-800">Skill</h2>
          </CardHeader>
          <CardContent>
            {editing ? (
              <div>
                <p className="text-xs text-gray-500 mb-3">Pilih skill yang Anda miliki:</p>
                <div className="flex flex-wrap gap-2">
                  {allSkills.map(skill => (
                    <button
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                        selectedSkills.includes(skill)
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-white text-gray-600 border-gray-300 hover:border-emerald-400'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {member.skills.map(s => <SkillTag key={s} skill={s} variant="highlight" />)}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Interests */}
        <Card>
          <CardHeader>
            <h2 className="font-semibold text-gray-800">Minat</h2>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {member.interests.map(interest => (
                <span key={interest} className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-sm">
                  {interest}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card>
          <CardHeader>
            <h2 className="font-semibold text-gray-800">Pengalaman</h2>
          </CardHeader>
          <CardContent>
            {member.experience.length > 0 ? (
              <div className="space-y-4">
                {member.experience.map((exp, i) => (
                  <div key={i} className="pl-4 border-l-2 border-emerald-200">
                    <div className="font-semibold text-gray-900">{exp.title}</div>
                    <div className="text-sm text-gray-600">{exp.organization} · {exp.duration}</div>
                    <div className="text-sm text-gray-500 mt-1">{exp.description}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-sm">Belum ada pengalaman yang ditambahkan.</p>
            )}
            {editing && (
              <Button variant="outline" size="sm" className="mt-4">
                + Tambah Pengalaman
              </Button>
            )}
          </CardContent>
        </Card>

        {editing && (
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-xs text-amber-700">
              ⚠️ Fitur edit profil adalah simulasi UI. Perubahan tidak akan tersimpan di versi MVP ini.
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
