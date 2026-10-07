import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, Users, Calendar, Award, Building2, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { StatusBadge, SkillTag } from '@/components/ui/badges';
import { Button } from '@/components/ui/button';
import { MatchScore } from '@/components/ui/match-score';
import { formatShortDate, calculateDaysLeft } from '@/lib/utils';
import type { Job, Training, Internship, MatchResult } from '@/types';

// --- JobCard ---
interface JobCardProps {
  job: Job;
  showMatchScore?: boolean;
  matchScore?: number;
  onApply?: () => void;
  onViewCandidates?: () => void;
  variant?: 'industry' | 'community';
}

export function JobCard({
  job,
  showMatchScore,
  matchScore,
  onApply,
  onViewCandidates,
  variant = 'community',
}: JobCardProps) {
  const daysLeft = calculateDaysLeft(job.deadline);

  return (
    <Card hover className="group">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <StatusBadge status={job.status} />
              <StatusBadge status={job.type} />
            </div>
            <h3 className="font-semibold text-gray-900 text-base mt-2 group-hover:text-emerald-700 transition-colors">
              {job.title}
            </h3>
            <div className="flex items-center gap-1.5 mt-1">
              <Building2 className="h-3.5 w-3.5 text-gray-400" />
              <span className="text-sm text-gray-500">{job.industryName}</span>
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <MapPin className="h-3.5 w-3.5 text-gray-400" />
              <span className="text-sm text-gray-500">{job.location}</span>
            </div>
          </div>
          {showMatchScore && matchScore && (
            <MatchScore score={matchScore} size="sm" />
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {job.skills.slice(0, 4).map((skill) => (
            <SkillTag key={skill} skill={skill} />
          ))}
          {job.skills.length > 4 && (
            <span className="text-xs text-gray-400">+{job.skills.length - 4} lainnya</span>
          )}
        </div>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              {job.applicants} pelamar
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {daysLeft > 0 ? `${daysLeft} hari lagi` : 'Ditutup'}
            </span>
          </div>
          <div className="flex gap-2">
            {variant === 'industry' && onViewCandidates && (
              <Button size="sm" variant="outline" onClick={onViewCandidates}>
                Lihat Kandidat
              </Button>
            )}
            {variant === 'community' && onApply && (
              <Button size="sm" onClick={onApply}>
                Daftar
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// --- TrainingCard ---
interface TrainingCardProps {
  training: Training;
  onApply?: () => void;
  showParticipants?: boolean;
}

export function TrainingCard({ training, onApply, showParticipants = false }: TrainingCardProps) {
  const fillPercent = Math.round((training.participants / training.quota) * 100);

  return (
    <Card hover>
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <StatusBadge status={training.status} />
              {training.certificate && (
                <span className="inline-flex items-center gap-1 text-xs text-amber-600 font-medium">
                  <Award className="h-3 w-3" />
                  Sertifikat
                </span>
              )}
            </div>
            <h3 className="font-semibold text-gray-900 text-base">{training.title}</h3>
            <div className="flex items-center gap-1.5 mt-1">
              <Building2 className="h-3.5 w-3.5 text-gray-400" />
              <span className="text-sm text-gray-500">{training.industryName}</span>
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <MapPin className="h-3.5 w-3.5 text-gray-400" />
              <span className="text-sm text-gray-500">{training.location}</span>
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <Clock className="h-3.5 w-3.5 text-gray-400" />
              <span className="text-sm text-gray-500">{training.duration} · Mulai {formatShortDate(training.startDate)}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {training.skills.map((skill) => (
            <SkillTag key={skill} skill={skill} />
          ))}
        </div>

        {showParticipants && (
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
              <span>Peserta</span>
              <span>{training.participants}/{training.quota}</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full">
              <div
                className="h-1.5 bg-emerald-500 rounded-full"
                style={{ width: `${Math.min(fillPercent, 100)}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
          <span className="text-xs text-gray-500">
            Kategori: <span className="font-medium text-gray-700">{training.category}</span>
          </span>
          {onApply && (
            <Button size="sm" onClick={onApply}>
              Daftar
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// --- MatchResultCard ---
interface MatchResultCardProps {
  result: MatchResult;
  onApply?: () => void;
}

export function MatchResultCard({ result, onApply }: MatchResultCardProps) {
  const typeLabels = {
    job: 'Lowongan',
    internship: 'Magang',
    training: 'Pelatihan',
    business: 'Peluang Usaha',
    'direct-use': 'Direct-Use',
  };

  const typeColors = {
    job: 'bg-blue-50 text-blue-700',
    internship: 'bg-purple-50 text-purple-700',
    training: 'bg-teal-50 text-teal-700',
    business: 'bg-amber-50 text-amber-700',
    'direct-use': 'bg-emerald-50 text-emerald-700',
  };

  return (
    <Card hover className="border-l-4" style={{ borderLeftColor: result.matchScore >= 85 ? '#16a34a' : result.matchScore >= 70 ? '#0d9488' : '#d97706' }}>
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${typeColors[result.opportunityType]}`}>
                {typeLabels[result.opportunityType]}
              </span>
              <StatusBadge status={result.status} />
            </div>
            <h3 className="font-semibold text-gray-900 text-base">{result.opportunityTitle}</h3>
            <div className="flex items-center gap-1.5 mt-1">
              <Building2 className="h-3.5 w-3.5 text-gray-400" />
              <span className="text-sm text-gray-500">{result.organizationName}</span>
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <MapPin className="h-3.5 w-3.5 text-gray-400" />
              <span className="text-sm text-gray-500">{result.location}</span>
            </div>

            {/* Match reasons */}
            <div className="mt-3 space-y-1">
              {result.matchReasons.slice(0, 3).map((reason, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  {reason}
                </div>
              ))}
            </div>
          </div>
          <div className="shrink-0">
            <MatchScore score={result.matchScore} size="md" />
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
          {result.deadline && (
            <span className="text-xs text-gray-500">
              Deadline: {formatShortDate(result.deadline)}
            </span>
          )}
          <Button size="sm" onClick={onApply} className="ml-auto">
            Lamar Sekarang
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
