// ============================================================
// Simple matching algorithm for MVP demo
// ⚠️ Algoritma berbasis skor simulasi - bukan AI/ML
// ============================================================

import type { CommunityMember, Job, Training, Internship, MatchResult } from '@/types';
import { mockJobs, mockTrainings, mockInternships } from './mock-data';

interface ScoringWeights {
  skill: number;
  location: number;
  interest: number;
  experience: number;
}

const DEFAULT_WEIGHTS: ScoringWeights = {
  skill: 0.5,
  location: 0.25,
  interest: 0.15,
  experience: 0.1,
};

function calculateSkillMatch(memberSkills: string[], requiredSkills: string[]): number {
  if (requiredSkills.length === 0) return 0.7;
  const matchedSkills = requiredSkills.filter(skill =>
    memberSkills.some(ms => ms.toLowerCase().includes(skill.toLowerCase()) ||
      skill.toLowerCase().includes(ms.toLowerCase()))
  );
  return matchedSkills.length / requiredSkills.length;
}

function calculateLocationMatch(memberLocation: string, opportunityLocation: string): number {
  const memberLoc = memberLocation.toLowerCase();
  const oppLoc = opportunityLocation.toLowerCase();
  if (memberLoc.includes('demo') && oppLoc.includes('demo')) return 0.9;
  if (memberLoc.includes(oppLoc) || oppLoc.includes(memberLoc)) return 0.8;
  return 0.5;
}

export function matchMemberToJobs(member: CommunityMember): MatchResult[] {
  const results: MatchResult[] = [];

  // Match jobs
  mockJobs.forEach(job => {
    if (job.status !== 'open') return;

    const skillScore = calculateSkillMatch(member.skills, job.skills);
    const locationScore = calculateLocationMatch(member.location, job.location);
    const interestScore = member.interests.some(interest =>
      job.skills.some(s => s.toLowerCase().includes(interest.toLowerCase()) ||
        interest.toLowerCase().includes(s.toLowerCase()))
    ) ? 0.8 : 0.4;
    const experienceScore = member.experience.length > 0 ? 0.8 : 0.5;

    const totalScore = Math.round(
      (skillScore * DEFAULT_WEIGHTS.skill +
        locationScore * DEFAULT_WEIGHTS.location +
        interestScore * DEFAULT_WEIGHTS.interest +
        experienceScore * DEFAULT_WEIGHTS.experience) * 100
    );

    const matchReasons: string[] = [];
    if (skillScore > 0.6) matchReasons.push(`Skill cocok (${Math.round(skillScore * 100)}%)`);
    if (locationScore > 0.7) matchReasons.push('Lokasi sesuai area operasi');
    if (interestScore > 0.6) matchReasons.push('Minat relevan');
    if (experienceScore > 0.7) matchReasons.push('Pengalaman relevan');

    if (totalScore > 40) {
      results.push({
        opportunityId: job.id,
        opportunityTitle: job.title,
        opportunityType: 'job',
        organizationName: job.industryName,
        location: job.location,
        matchScore: Math.min(totalScore, 97),
        matchReasons,
        deadline: job.deadline,
        status: job.status,
      });
    }
  });

  // Match trainings
  mockTrainings.forEach(training => {
    if (training.status === 'completed') return;

    const skillScore = calculateSkillMatch(member.skills, training.skills);
    const locationScore = calculateLocationMatch(member.location, training.location);
    const interestScore = 0.75;

    const totalScore = Math.round(
      (skillScore * 0.4 +
        locationScore * 0.3 +
        interestScore * 0.3) * 100
    );

    const matchReasons: string[] = [];
    if (skillScore > 0.5) matchReasons.push('Skill teknis sesuai materi');
    if (locationScore > 0.7) matchReasons.push('Lokasi dapat dijangkau');
    matchReasons.push('Program terbuka untuk umum');

    if (totalScore > 40) {
      results.push({
        opportunityId: training.id,
        opportunityTitle: training.title,
        opportunityType: 'training',
        organizationName: training.industryName,
        location: training.location,
        matchScore: Math.min(totalScore, 95),
        matchReasons,
        deadline: training.startDate,
        status: training.status,
      });
    }
  });

  // Match internships
  mockInternships.forEach(internship => {
    if (internship.status !== 'open') return;

    const skillScore = calculateSkillMatch(member.skills, internship.skills);
    const locationScore = calculateLocationMatch(member.location, internship.location);

    const totalScore = Math.round(
      (skillScore * 0.5 + locationScore * 0.3 + 0.2 * 0.75) * 100
    );

    const matchReasons: string[] = [];
    if (skillScore > 0.5) matchReasons.push('Profil teknis sesuai');
    if (locationScore > 0.7) matchReasons.push('Lokasi terjangkau');
    matchReasons.push('Program magang terbuka');

    if (totalScore > 40) {
      results.push({
        opportunityId: internship.id,
        opportunityTitle: internship.title,
        opportunityType: 'internship',
        organizationName: internship.industryName,
        location: internship.location,
        matchScore: Math.min(totalScore, 92),
        matchReasons,
        deadline: internship.deadline,
        status: internship.status,
      });
    }
  });

  return results.sort((a, b) => b.matchScore - a.matchScore);
}
