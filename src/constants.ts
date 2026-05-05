import { LayoutDashboard, Users, GitMerge, BarChart3, Settings, HelpCircle, Search, Bell, History, List, Grid3X3, ChevronDown, MoreVertical, ArrowDown, ChevronRight, ChevronLeft, TrendingUp, Zap, FileText, Plus } from 'lucide-react';

export interface Candidate {
  id: string;
  name: string;
  email: string;
  avatar: string;
  department: string;
  matchScore: number;
  dateAdded: string;
  status: 'Interviewing' | 'Under Review' | 'Shortlisted' | 'Not Matched';
}

export const CANDIDATES: Candidate[] = [
  {
    id: '1',
    name: 'Alex Donovan',
    email: 'alex.donovan@email.com',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc3slqoBmsS9RXf5Rsm8ygh9-IUduTV9Z7hWC-jnOiSClynSXRMDUJPGOTfYIsGJQgkUYhYYtJur0m1Npc7891xBKZbwBx5SyAH7v6-vfEMvLVQkGmujfZmG4010OJntLwQ3iZgtOCsIcwjpIKtWXYL8sHiyZRlxb4w5mqDzBDsPloC3KDehLFRMvkly6G6Hd31Z6WbN0DqwcV2bQFNoSlESm1gY-LWnm2XxVjaMwwZ6aibwJfSwFhIbpgwbmgVUshjlSrxYmA51c',
    department: 'Engineering',
    matchScore: 92,
    dateAdded: 'Oct 24, 2023',
    status: 'Interviewing',
  },
  {
    id: '2',
    name: 'Sarah Lopez',
    email: 's.lopez@cloudmail.net',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSsbon2jzUmvYiXROr2EmyjWGRluUOG81ivNy406qoPeHJrroyF6vyeykc2TfjLF1K2_R4nV6BfryL5Vrb3ugPkxfJYGOSy9voXi73CGkbq1WAV01QgOhtE3E03ItRDAqhrCsPu4zc8YA5xFDj8BI_FwI1Bo6r5lWYyK4FCnrcsttcGM-XXnvVITkzQE8m2Ls6cJmPNfW1BXpDQW6YDhJ5o-5I_vR8GHaogHEY1wKjL8vhr3z4aUzDXIRyAwx0oAHfxFdQ5p7jqFI',
    department: 'Product Design',
    matchScore: 85,
    dateAdded: 'Oct 22, 2023',
    status: 'Under Review',
  },
  {
    id: '3',
    name: 'Marcus Knight',
    email: 'm.knight@techdev.io',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkRDFLOAa9mxOkVSW7FbgDzOx_gRkH3oKfVvH_-DDmCntNAuTnVnKIg1I2b7DZ4gVHPeoK7QWO2kkw4O0pM9VvTfl5RfCvxypL2TZsBZb5PSmcREnI-l8h86HHDUcZu9VezhObtbeJpMuDAa4uvt6chJCTjE9v4DDZYr1nCTBOS3W8UNpxWbdYQm65vDz2_HLllI0o19DygY3RL4-citPoe19oKOAjvx-Ut92BiPD6cyCpMfT6lE8d1Ttiw8sj2jQNgXRRT3x2qac',
    department: 'Data Science',
    matchScore: 78,
    dateAdded: 'Oct 20, 2023',
    status: 'Shortlisted',
  },
  {
    id: '4',
    name: 'Jessica Lee',
    email: 'jessica.lee@talent.com',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCI7TI16vY1YfuzgvEVq8AZzg12TYzvWBMeDskbCe23TREgYy5VfOOhHZNGiPzY4-AU61-3YP2A5C3s7xVSENv5oky4FhJvWn6zpGQxnBwlsMA1j421a58wvJDkxQirbDWt2E9jY7IbkjJZl3aDTfQiahOfFhtd1rwLzs6kxJLF8RqMLf2kSKtOGUuwRxTymCM2wLeXMevv9QEngbYqWa1tabrlgYyTT184VgFkIFT30WgH3OMWN67VOzKa_96Fj7yj6A9iuNV6JM0',
    department: 'Operations',
    matchScore: 42,
    dateAdded: 'Oct 19, 2023',
    status: 'Not Matched',
  },
];

export const NAV_ITEMS = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: Users, label: 'Candidates', id: 'candidates', active: true },
  { icon: GitMerge, label: 'Pipeline', id: 'pipeline' },
  { icon: BarChart3, label: 'Analytics', id: 'analytics' },
  { icon: Settings, label: 'Settings', id: 'settings' },
];
