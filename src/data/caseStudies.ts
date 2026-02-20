import { Users, Layers, Smartphone, Settings, BarChart3, Search, GitMerge, ShieldCheck } from 'lucide-react';
import recyclifyHero from '../assets/8ff22e9b39c0ae2daef106b3a94e4474e10b1ae8.png';
import discussionHero from '../assets/13e06508fa565e6a916de46eba28a74c9e452b39.png';
// Using Sales Dashboard image for better visual impact as requested
import visualDesignHero from '../assets/19bd8364dd3a95ae26abf854529d6f9120c96450.png';

// Client Case Study Images
// Client Case Study Images - Restored for Locked Style
import clientResearchLocked from '../assets/be4b759848759754b68270bcb39f13b0ea089c33.png';
import clientFlowLocked from '../assets/77a0cbc77af505d9a6124708f3f42639e3e077c2.png';
import clientHeuristicsLocked from '../assets/2f8374a01ddd7212c48aacbeb9e0ea701ca03686.png';

export const publicCaseStudies = [
  {
    id: 'case-1',
    slug: 'discussion-forum',
    title: 'Discussion Forum – Design Case Study',
    description: 'Health information platform with community discussion features.',
    tags: ['UX Strategy', 'Visual Design'],
    link: '/work/discussion-forum',
    icon: Users,
    gradient: 'linear-gradient(135deg, rgba(29, 133, 126, 0.09) 0%, rgba(167, 243, 208, 0.06) 100%)',
    category: 'strategy',
    artifactType: 'component-grid',
    imageUrl: discussionHero
  },
  {
    id: 'case-2',
    slug: 'recyclify',
    title: 'Recyclify – Sell & buy like an eco-friendly human',
    description: 'Sustainable marketplace connecting conscious buyers and sellers to reduce waste.',
    tags: ['UX Strategy', 'Mobile Design'],
    link: '/work/recyclify',
    icon: Layers,
    gradient: 'linear-gradient(135deg, rgba(29, 133, 126, 0.09) 0%, rgba(167, 243, 208, 0.06) 100%)',
    category: 'strategy',
    artifactType: 'component-grid',
    imageUrl: recyclifyHero
  },
  {
    id: 'case-3',
    slug: 'visual-design',
    title: 'Visual Design Collection',
    description: 'Curated interface designs showcasing UI craftsmanship across platforms.',
    tags: ['Visual Design', 'UI Systems'],
    link: '/work/visual-design',
    icon: Smartphone,
    gradient: 'linear-gradient(135deg, rgba(29, 133, 126, 0.09) 0%, rgba(167, 243, 208, 0.06) 100%)',
    category: 'strategy',
    artifactType: 'component-grid',
    imageUrl: visualDesignHero
  }
];

export const clientCaseStudies = [
  {
    id: 'conf-1',
    slug: 'research-revamp',
    title: 'Research-Driven Website Revamp',
    description: 'In-depth UX audit and strategic recommendations to improve usability, accessibility, and business outcomes.',
    tags: ['UX Research', 'UX Audit', 'Strategy'],
    isConfidential: true,
    link: '/work/confidential',
    icon: BarChart3,
    gradient: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)',
    category: 'strategy',
    artifactType: 'ux-research',
    imageUrl: clientResearchLocked
  },
  {
    id: 'conf-2',
    slug: 'flow-tool',
    title: 'Call Flow Development Tool',
    description: 'Designed a drag-and-drop interface for creating complex call center workflows, reducing build time by 40% for non-technical users.',
    tags: ['Product Design', 'React Flow', 'Enterprise UX'],
    isConfidential: true,
    link: '/work/client/flow-tool',
    color: '#0F172A',
    gradient: 'linear-gradient(135deg, rgba(15, 23, 42, 0.1) 0%, rgba(15, 23, 42, 0.05) 100%)',
    icon: GitMerge,
    artifactType: 'flow',
    imageUrl: clientFlowLocked
  },
  {
    id: 'conf-3',
    slug: 'heuristics-eval',
    title: 'Product Heuristics Evaluation',
    description: 'Conducted a deep-dive usability audit for a fintech application, identifying 20+ critical usability issues and providing actionable layout solutions.',
    tags: ['UX Audit', 'Heuristics', 'Fintech'],
    isConfidential: true,
    link: '/work/client/heuristics-eval',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)',
    icon: ShieldCheck,
    artifactType: 'heuristic',
    imageUrl: clientHeuristicsLocked
  }
];