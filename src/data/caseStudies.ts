import { Users, Layers, Smartphone, Settings, BarChart3 } from 'lucide-react';
import recyclifyHero from '../assets/8ff22e9b39c0ae2daef106b3a94e4474e10b1ae8.png';
import discussionHero from '../assets/13e06508fa565e6a916de46eba28a74c9e452b39.png';
import visualDesignHero from '../assets/mood-analysis-screens.png';

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
    title: 'Research-Driven Website Revamp',
    description: 'In-depth UX audit and strategic recommendations to improve usability, accessibility, and business outcomes.',
    tags: ['UX Research', 'UX Audit', 'Strategy'],
    isConfidential: true,
    link: '/work/confidential',
    icon: BarChart3,
    gradient: 'linear-gradient(135deg, rgba(107, 114, 128, 0.07) 0%, rgba(156, 163, 175, 0.04) 100%)',
    category: 'strategy',
    artifactType: 'component-grid'
  },
  {
    id: 'conf-2',
    title: 'Call Flow Development Tool',
    description: 'Streamlined call flow creation through research-driven design and usability improvements.',
    tags: ['UX Research', 'UI Design', 'Heuristics'],
    isConfidential: true,
    link: '/work/confidential-case-study-2',
    icon: BarChart3,
    gradient: 'linear-gradient(135deg, rgba(96, 125, 139, 0.08) 0%, rgba(120, 144, 156, 0.04) 100%)',
    category: 'interaction',
    artifactType: 'dashboard-panels'
  },
  {
    id: 'conf-3',
    title: 'Product Heuristics Evaluation',
    description: 'Comprehensive usability audit for a life sciences analytics platform with design system recommendations.',
    tags: ['Heuristics', 'UX Research', 'Design Systems'],
    isConfidential: true,
    link: '/work/confidential-case-study-3',
    icon: Settings,
    gradient: 'linear-gradient(135deg, rgba(107, 114, 128, 0.06) 0%, rgba(156, 163, 175, 0.03) 100%)',
    category: 'strategy',
    artifactType: 'dashboard-panels'
  }
];