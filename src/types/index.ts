// ============================================================
// GEOTHERMAL COMMUNITY HUB - TypeScript Types
// ============================================================

export type UserRole = 'industry' | 'agent' | 'community' | 'admin';

export type ApplicationStatus = 'pending' | 'reviewed' | 'accepted' | 'rejected';
export type JobStatus = 'open' | 'closed' | 'draft';
export type ProgramStatus = 'active' | 'upcoming' | 'completed' | 'draft';
export type SupplierStatus = 'verified' | 'pending' | 'unverified';
export type TrainingStatus = 'open' | 'ongoing' | 'completed';

// --- Users ---
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  createdAt: string;
}

// --- Industry ---
export interface Industry {
  id: string;
  userId: string;
  companyName: string;
  location: string;
  operatingArea: string;
  description: string;
  logo?: string;
  website?: string;
  contactPerson: string;
  contactEmail: string;
  verified: boolean;
  activeJobs: number;
  activePrograms: number;
  createdAt: string;
}

// --- Community Member ---
export interface CommunityMember {
  id: string;
  userId: string;
  name: string;
  location: string;
  district: string;
  education: 'sd' | 'smp' | 'sma' | 'd3' | 's1' | 's2';
  skills: string[];
  interests: string[];
  experience: Experience[];
  employmentStatus: 'unemployed' | 'employed' | 'entrepreneur' | 'student';
  businessField?: string;
  profileCompletion: number;
  matchScore?: number;
  status: 'available' | 'employed' | 'training';
  agentId?: string;
  createdAt: string;
}

export interface Experience {
  title: string;
  organization: string;
  duration: string;
  description: string;
}

// --- Community Agent ---
export interface CommunityAgent {
  id: string;
  userId: string;
  name: string;
  location: string;
  district: string;
  totalMembers: number;
  activePlacements: number;
  avatar?: string;
  createdAt: string;
}

// --- Job ---
export interface Job {
  id: string;
  industryId: string;
  industryName: string;
  title: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  skills: string[];
  description: string;
  requirements: string[];
  salaryRange?: string;
  quota: number;
  applicants: number;
  status: JobStatus;
  deadline: string;
  createdAt: string;
  matchedCandidates?: number;
  bestMatch?: number;
}

// --- Internship ---
export interface Internship {
  id: string;
  industryId: string;
  industryName: string;
  title: string;
  location: string;
  duration: string;
  skills: string[];
  description: string;
  quota: number;
  applicants: number;
  allowance?: string;
  status: JobStatus;
  deadline: string;
  startDate: string;
  createdAt: string;
}

// --- Training ---
export interface Training {
  id: string;
  industryId: string;
  industryName: string;
  title: string;
  location: string;
  duration: string;
  skills: string[];
  description: string;
  quota: number;
  participants: number;
  status: TrainingStatus;
  startDate: string;
  endDate: string;
  createdAt: string;
  category: string;
  certificate: boolean;
}

// --- Supplier ---
export interface Supplier {
  id: string;
  name: string;
  category: string;
  location: string;
  district: string;
  products: string[];
  description: string;
  status: SupplierStatus;
  matchScore: number;
  contactPerson: string;
  contactPhone: string;
  yearsActive: number;
  createdAt: string;
}

// --- Community Program ---
export interface CommunityProgram {
  id: string;
  industryId: string;
  industryName: string;
  name: string;
  category: string;
  location: string;
  targetParticipants: number;
  currentParticipants: number;
  duration: string;
  status: ProgramStatus;
  description: string;
  startDate: string;
  endDate: string;
  agentId?: string;
  createdAt: string;
}

// --- Direct Use Opportunity ---
export interface DirectUseOpportunity {
  id: string;
  title: string;
  category: 'aquaculture' | 'agriculture' | 'drying' | 'process-heat' | 'tourism' | 'heating';
  temperatureRange: string;
  description: string;
  benefits: string[];
  requiredTemp: number;
  requiredFlow: string;
  potentialImpact: string;
  status: 'available' | 'in-progress' | 'completed';
}

// --- Application ---
export interface Application {
  id: string;
  memberId: string;
  memberName: string;
  opportunityId: string;
  opportunityTitle: string;
  opportunityType: 'job' | 'internship' | 'training' | 'program';
  status: ApplicationStatus;
  appliedAt: string;
  updatedAt: string;
  notes?: string;
}

// --- ESG Metrics ---
export interface ESGMetric {
  id: string;
  industryId: string;
  period: string;
  social: {
    trainingParticipants: number;
    localHires: number;
    internshipParticipants: number;
    communityParticipation: number;
    womenParticipation: number;
  };
  economic: {
    localSuppliers: number;
    umkmSupported: number;
    businessOpportunities: number;
    estimatedLocalSpend: number;
  };
  energy: {
    directUseProjects: number;
    geothermalApplications: number;
    energyUtilization: number;
  };
  createdAt: string;
}

// --- Notification ---
export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'opportunity';
  read: boolean;
  createdAt: string;
  link?: string;
}

// --- Match Result ---
export interface MatchResult {
  opportunityId: string;
  opportunityTitle: string;
  opportunityType: 'job' | 'internship' | 'training' | 'business' | 'direct-use';
  organizationName: string;
  location: string;
  matchScore: number;
  matchReasons: string[];
  deadline?: string;
  status: string;
}

// --- Chart Data ---
export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

// --- Dashboard Stats ---
export interface DashboardStat {
  label: string;
  value: string | number;
  change?: number;
  changeType?: 'increase' | 'decrease' | 'neutral';
  icon?: string;
  description?: string;
}
