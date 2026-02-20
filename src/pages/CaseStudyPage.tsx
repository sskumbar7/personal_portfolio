import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Lock, CheckCircle2, TrendingUp, Users, Zap } from 'lucide-react';

interface CaseStudyData {
  id: string;
  title: string;
  oneLiner: string;
  keywords: string[]; // Words to highlight in green
  metadata: {
    role: string;
    focus: string[];
    duration: string;
    context: string;
  };
  isConfidential?: boolean;
  ctaText?: string;
  ctaLink?: string;
  heroImage?: {
    url: string;
    alt: string;
    caption?: string;
  };
  problem: {
    statement: string;
    users: string;
    constraints: string[];
  };
  goals: Array<{
    title: string;
    description: string;
  }>;
  successCriteria: string[];
  approach: {
    description: string;
    keyPoints: string[];
    image?: {
      url: string;
      alt: string;
      caption?: string;
    };
  };
  solution: Array<{
    title: string;
    description: string;
    whyItMatters: string;
    image?: {
      url: string;
      alt: string;
      caption?: string;
    };
  }>;
  outcome: {
    changes: string[];
    metrics?: Array<{
      label: string;
      value: string;
    }>;
    learnings: string[];
  };
  reflection?: {
    scalability: string;
    systemThinking: string;
    nextTime: string;
  };
  navigation: {
    previous?: { id: string; title: string };
    next?: { id: string; title: string };
  };
}

// Example data for Card 1: AI-Assisted Design System Documentation
const caseStudyData: CaseStudyData = {
  id: 'ai-design-system-docs',
  title: 'AI-Assisted Design System Documentation',
  oneLiner: 'Reduced documentation time by 60% using GPT-based workflows while maintaining accuracy and designer trust.',
  keywords: ['60%', 'GPT-based workflows', 'accuracy', 'designer trust'],
  metadata: {
    role: 'Design Systems Lead',
    focus: ['AI + Design', 'Design Systems', 'UX Strategy'],
    duration: '3 months',
    context: 'Personal exploration'
  },
  isConfidential: false,
  heroImage: {
    url: 'https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGF0aW9uJTIwd29ya2Zsb3clMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY2NTYwMzc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'AI-assisted documentation workflow interface',
    caption: 'AI-assisted documentation workflow used across core components'
  },
  problem: {
    statement: 'Design system documentation is critical for adoption but time-consuming to create and maintain. Teams often deprioritize documentation, leading to inconsistent component usage and slower onboarding.',
    users: 'Product designers, front-end engineers, and design system maintainers across mid-to-large product teams.',
    constraints: [
      'Documentation must remain accurate and up-to-date',
      'No budget for dedicated technical writers',
      'Existing docs were fragmented across tools',
      'Team skepticism about AI-generated content quality'
    ]
  },
  goals: [
    {
      title: 'Accelerate documentation workflows',
      description: 'Reduce time spent writing component docs without sacrificing quality or completeness.'
    },
    {
      title: 'Increase consistency',
      description: 'Standardize documentation structure and tone across all components.'
    },
    {
      title: 'Maintain designer control',
      description: 'Ensure AI assists rather than replaces human decision-making and context.'
    }
  ],
  successCriteria: [
    'Documentation completion time reduced by 50%+',
    'No increase in support requests about component usage',
    'Designer confidence in published documentation remains high',
    'Documentation structure becomes reusable across components'
  ],
  approach: {
    description: 'I developed a hybrid workflow combining GPT-4 for initial drafts with human review checkpoints. The approach focused on standardizing inputs (component specs, usage rules) to generate consistent outputs.',
    keyPoints: [
      'Created structured prompts based on component anatomy',
      'Built reusable documentation templates',
      'Established review gates for accuracy',
      'Tested workflows on 12 components before scaling'
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1758780691544-d11ce61aae47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya2Zsb3clMjBzeXN0ZW18ZW58MXx8fHwxNzY2NTYwMzc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Hybrid workflow combining AI and human review',
      caption: 'Structured workflow showing AI draft generation and human review checkpoints'
    }
  },
  solution: [
    {
      title: 'Prompt Engineering System',
      description: 'Developed a three-tier prompt structure: component context, usage patterns, and edge cases. Each prompt included design system principles, accessibility requirements, and code examples.',
      whyItMatters: 'Structured inputs generate consistent, on-brand documentation that requires minimal editing. This reduces cognitive load for reviewers and ensures quality at scale.'
    },
    {
      title: 'Human Review Workflow',
      description: 'Implemented a two-stage review: technical accuracy check by engineers, then tone and clarity review by designers. AI drafts served as starting points, not final outputs.',
      whyItMatters: 'Maintains trust in documentation quality while preserving team expertise. Human reviewers focus on high-value edits rather than writing from scratch.'
    },
    {
      title: 'Documentation Template System',
      description: 'Created modular documentation blocks (Anatomy, Props, Usage, Accessibility, Examples) that AI could populate consistently. Templates adapted based on component complexity.',
      whyItMatters: 'Standardized structure makes docs easier to scan and find information. Modularity allows reuse across similar components.',
      image: {
        url: 'https://images.unsplash.com/photo-1693045181254-08462917f681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGF0aW9uJTIwdGVtcGxhdGUlMjBkZXNpZ258ZW58MXx8fHwxNzY2NTYwMzc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Modular documentation template system',
        caption: 'Reusable documentation blocks showing Anatomy, Props, Usage, and Accessibility sections'
      }
    }
  ],
  outcome: {
    changes: [
      'Average documentation time dropped from 5 hours to 2 hours per component',
      'Documentation structure became consistent across 24+ components',
      'Designer confidence in AI-assisted docs reached 87% in team survey',
      'Workflow adopted by 3 other teams within the organization'
    ],
    metrics: [
      { label: 'Time saved', value: '60%' },
      { label: 'Components documented', value: '24' },
      { label: 'Designer confidence', value: '87%' }
    ],
    learnings: [
      'AI excels at generating structure and drafts, but struggles with nuanced design decisions',
      'Prompt quality directly impacts output quality—iteration is essential',
      'Team buy-in requires demonstrating value early with pilot components',
      'Documentation templates improved consistency even without AI'
    ]
  },
  reflection: {
    scalability: 'The prompt system scales well to similar component types (buttons, inputs, cards) but requires customization for complex components like data tables or charts. A prompt library organized by component category would help.',
    systemThinking: 'This workflow revealed gaps in our design system governance. We now require structured component specs before development, which feeds both AI documentation and engineering handoff.',
    nextTime: 'I would involve engineers earlier in prompt development to ensure technical accuracy from the start. Also explore fine-tuning GPT on our existing documentation to reduce prompt engineering overhead.'
  },
  navigation: {
    next: { id: 'micro-interaction-library', title: 'Micro-Interaction Library for SaaS' }
  }
};

export function CaseStudyPage() {
  const { id } = useParams<{ id: string }>();

  // Currently we only have one hardcoded detailed case study. 
  // If the ID doesn't match, we should 404.
  if (id !== caseStudyData.id) {
    // The App.tsx catch-all will handle the actual 404 UI, but since we are 
    // inside a matched route here, we need to explicitly navigate to an invalid path 
    // or render the NotFoundPage directly. Navigating to an explicitly invalid path is cleaner.
    return <Navigate to="/404-not-found" replace />;
  }

  const data = caseStudyData;

  // Helper to highlight keywords in title
  const renderHighlightedText = (text: string, keywords: string[]) => {
    let result = text;
    const parts: Array<{ text: string; highlight: boolean }> = [];
    let currentIndex = 0;

    // Find all keyword positions
    const matches: Array<{ start: number; end: number; keyword: string }> = [];
    keywords.forEach(keyword => {
      const index = text.toLowerCase().indexOf(keyword.toLowerCase());
      if (index !== -1) {
        matches.push({ start: index, end: index + keyword.length, keyword });
      }
    });

    // Sort matches by position
    matches.sort((a, b) => a.start - b.start);

    // Build parts array
    matches.forEach(match => {
      if (match.start > currentIndex) {
        parts.push({ text: text.substring(currentIndex, match.start), highlight: false });
      }
      parts.push({ text: text.substring(match.start, match.end), highlight: true });
      currentIndex = match.end;
    });

    if (currentIndex < text.length) {
      parts.push({ text: text.substring(currentIndex), highlight: false });
    }

    return (
      <>
        {parts.map((part, index) => (
          part.highlight ? (
            <span key={index} style={{ color: '#1D857E' }}>{part.text}</span>
          ) : (
            <span key={index}>{part.text}</span>
          )
        ))}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* CASE STUDY HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: '420px',
          background: 'linear-gradient(180deg, rgba(29, 133, 126, 0.11) 0%, rgba(29, 133, 126, 0.06) 40%, #FFFFFF 80%)'
        }}
      >
        <div className="max-w-[1180px] mx-auto px-8 pt-24 pb-24 relative">
          {/* Back link */}
          <Link
            to="/work"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '14px',
              fontWeight: 500,
              color: 'rgba(29, 133, 126, 0.8)',
              fontFamily: 'Work Sans, sans-serif',
              textDecoration: 'none',
              marginBottom: '32px',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(29, 133, 126, 1)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(29, 133, 126, 0.8)'}
          >
            <ArrowLeft size={16} />
            Back to Selected Work
          </Link>

          <div className="max-w-[860px]">
            {/* Project title */}
            <h1
              style={{
                fontSize: '42px',
                lineHeight: '1.15',
                color: '#111827',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                marginBottom: '20px'
              }}
            >
              {data.title}
            </h1>

            {/* One-liner with keyword highlights */}
            <p
              style={{
                fontSize: '20px',
                lineHeight: '1.4',
                color: 'rgba(17, 24, 39, 0.75)',
                fontFamily: 'Work Sans, sans-serif',
                marginBottom: '32px'
              }}
            >
              {renderHighlightedText(data.oneLiner, data.keywords)}
            </p>

            {/* Metadata row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '24px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(0, 0, 0, 0.06)'
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(29, 133, 126, 0.7)',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '6px'
                  }}
                >
                  Role
                </div>
                <div
                  style={{
                    fontSize: '15px',
                    color: 'rgba(17, 24, 39, 0.85)',
                    fontFamily: 'Work Sans, sans-serif'
                  }}
                >
                  {data.metadata.role}
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(29, 133, 126, 0.7)',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '6px'
                  }}
                >
                  Focus
                </div>
                <div
                  style={{
                    fontSize: '15px',
                    color: 'rgba(17, 24, 39, 0.85)',
                    fontFamily: 'Work Sans, sans-serif'
                  }}
                >
                  {data.metadata.focus.join(', ')}
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(29, 133, 126, 0.7)',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '6px'
                  }}
                >
                  Duration
                </div>
                <div
                  style={{
                    fontSize: '15px',
                    color: 'rgba(17, 24, 39, 0.85)',
                    fontFamily: 'Work Sans, sans-serif'
                  }}
                >
                  {data.metadata.duration}
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(29, 133, 126, 0.7)',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '6px'
                  }}
                >
                  Context
                </div>
                <div
                  style={{
                    fontSize: '15px',
                    color: 'rgba(17, 24, 39, 0.85)',
                    fontFamily: 'Work Sans, sans-serif',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  {data.metadata.context}
                  {data.isConfidential && <Lock size={12} style={{ color: 'rgba(17, 24, 39, 0.4)' }} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-[1180px] mx-auto px-8">

        {/* HERO PREVIEW IMAGE */}
        {data.heroImage && (
          <section style={{ paddingTop: '64px', paddingBottom: '0' }}>
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                border: '1px solid rgba(0, 0, 0, 0.04)'
              }}
            >
              <div
                style={{
                  aspectRatio: '16 / 9',
                  overflow: 'hidden',
                  background: 'rgba(250, 250, 250, 0.6)'
                }}
              >
                <img
                  src={data.heroImage.url}
                  alt={data.heroImage.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
            {data.heroImage.caption && (
              <p
                style={{
                  fontSize: '13px',
                  lineHeight: '1.5',
                  color: 'rgba(17, 24, 39, 0.6)',
                  fontFamily: 'Work Sans, sans-serif',
                  marginTop: '12px',
                  textAlign: 'left'
                }}
              >
                {data.heroImage.caption}
              </p>
            )}
          </section>
        )}

        {/* PROBLEM FRAMING - Two Column */}
        <section style={{ paddingTop: '96px', paddingBottom: '64px' }}>
          <div
            style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(29, 133, 126, 0.7)',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '24px'
            }}
          >
            Problem
          </div>

          <div className="grid md:grid-cols-[1fr,380px] gap-12">
            {/* Left: Narrative */}
            <div>
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: '1.6',
                  color: 'rgba(17, 24, 39, 0.85)',
                  fontFamily: 'Work Sans, sans-serif',
                  marginBottom: '24px'
                }}
              >
                {data.problem.statement}
              </p>
              <div
                style={{
                  fontSize: '15px',
                  lineHeight: '1.5',
                  color: 'rgba(17, 24, 39, 0.7)',
                  fontFamily: 'Work Sans, sans-serif',
                  paddingLeft: '20px',
                  borderLeft: '3px solid rgba(29, 133, 126, 0.2)'
                }}
              >
                <strong style={{ color: 'rgba(17, 24, 39, 0.85)' }}>Who:</strong> {data.problem.users}
              </div>
            </div>

            {/* Right: Constraints */}
            <div>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'rgba(17, 24, 39, 0.8)',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '16px'
                }}
              >
                Constraints & Context
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {data.problem.constraints.map((constraint, index) => (
                  <li
                    key={index}
                    style={{
                      fontSize: '14px',
                      lineHeight: '1.5',
                      color: 'rgba(17, 24, 39, 0.7)',
                      fontFamily: 'Work Sans, sans-serif',
                      marginBottom: '12px',
                      paddingLeft: '20px',
                      position: 'relative'
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: '0',
                        top: '7px',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: 'rgba(29, 133, 126, 0.5)'
                      }}
                    />
                    {constraint}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* GOALS & SUCCESS CRITERIA */}
        <section style={{ paddingBottom: '64px' }}>
          <div
            style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(29, 133, 126, 0.7)',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '32px'
            }}
          >
            Goals & Success Criteria
          </div>

          {/* Goals */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {data.goals.map((goal, index) => (
              <div key={index}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(29, 133, 126, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}
                >
                  <CheckCircle2 size={18} style={{ color: 'rgba(29, 133, 126, 0.8)' }} />
                </div>
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '8px',
                    lineHeight: '1.3'
                  }}
                >
                  {goal.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: '1.5',
                    color: 'rgba(17, 24, 39, 0.7)',
                    fontFamily: 'Work Sans, sans-serif'
                  }}
                >
                  {goal.description}
                </p>
              </div>
            ))}
          </div>

          {/* Success Criteria */}
          <div
            style={{
              background: 'rgba(29, 133, 126, 0.04)',
              borderRadius: '12px',
              padding: '24px 28px',
              border: '1px solid rgba(29, 133, 126, 0.08)'
            }}
          >
            <div
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'rgba(17, 24, 39, 0.8)',
                fontFamily: 'Inter, sans-serif',
                marginBottom: '14px'
              }}
            >
              Success Indicators
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: '10px' }}>
              {data.successCriteria.map((criteria, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: '14px',
                    lineHeight: '1.5',
                    color: 'rgba(17, 24, 39, 0.75)',
                    fontFamily: 'Work Sans, sans-serif',
                    paddingLeft: '24px',
                    position: 'relative'
                  }}
                >
                  <CheckCircle2
                    size={14}
                    style={{
                      position: 'absolute',
                      left: '0',
                      top: '3px',
                      color: 'rgba(29, 133, 126, 0.6)'
                    }}
                  />
                  {criteria}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* EXPLORATION & APPROACH */}
        <section style={{ paddingBottom: '64px' }}>
          <div
            style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(29, 133, 126, 0.7)',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '24px'
            }}
          >
            Exploration & Approach
          </div>

          <div className="max-w-[760px]">
            <p
              style={{
                fontSize: '17px',
                lineHeight: '1.6',
                color: 'rgba(17, 24, 39, 0.85)',
                fontFamily: 'Work Sans, sans-serif',
                marginBottom: '28px'
              }}
            >
              {data.approach.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {data.approach.keyPoints.map((point, index) => (
                <div
                  key={index}
                  style={{
                    padding: '16px 20px',
                    background: 'rgba(250, 250, 250, 0.8)',
                    borderRadius: '10px',
                    border: '1px solid rgba(0, 0, 0, 0.04)'
                  }}
                >
                  <div
                    style={{
                      fontSize: '14px',
                      lineHeight: '1.5',
                      color: 'rgba(17, 24, 39, 0.75)',
                      fontFamily: 'Work Sans, sans-serif'
                    }}
                  >
                    {point}
                  </div>
                </div>
              ))}
            </div>

            {/* Approach Image */}
            {data.approach.image && (
              <div
                style={{
                  marginTop: '32px',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={data.approach.image.url}
                  alt={data.approach.image.alt}
                  style={{
                    width: '100%',
                    height: 'auto'
                  }}
                />
                {data.approach.image.caption && (
                  <div
                    style={{
                      padding: '12px 16px',
                      background: 'rgba(0, 0, 0, 0.06)',
                      fontSize: '14px',
                      color: 'rgba(17, 24, 39, 0.7)',
                      fontFamily: 'Work Sans, sans-serif'
                    }}
                  >
                    {data.approach.image.caption}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* SOLUTION DEEP DIVE */}
        <section style={{ paddingBottom: '64px' }}>
          <div
            style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(29, 133, 126, 0.7)',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '40px'
            }}
          >
            Solution Deep Dive
          </div>

          <div className="space-y-16">
            {data.solution.map((section, index) => (
              <div key={index} className="max-w-[820px]">
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: 600,
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '16px',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {section.title}
                </h3>

                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: 'rgba(17, 24, 39, 0.8)',
                    fontFamily: 'Work Sans, sans-serif',
                    marginBottom: '20px'
                  }}
                >
                  {section.description}
                </p>

                {/* Why it matters callout */}
                <div
                  style={{
                    background: 'linear-gradient(135deg, rgba(29, 133, 126, 0.06) 0%, rgba(29, 133, 126, 0.02) 100%)',
                    borderRadius: '12px',
                    padding: '20px 24px',
                    borderLeft: '3px solid rgba(29, 133, 126, 0.3)'
                  }}
                >
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: 'rgba(29, 133, 126, 0.8)',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '8px'
                    }}
                  >
                    Why this matters
                  </div>
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: '1.6',
                      color: 'rgba(17, 24, 39, 0.8)',
                      fontFamily: 'Work Sans, sans-serif',
                      margin: 0
                    }}
                  >
                    {section.whyItMatters}
                  </p>
                </div>

                {/* Solution Image */}
                {section.image && (
                  <div
                    style={{
                      marginTop: '32px',
                      borderRadius: '12px',
                      overflow: 'hidden'
                    }}
                  >
                    <img
                      src={section.image.url}
                      alt={section.image.alt}
                      style={{
                        width: '100%',
                        height: 'auto'
                      }}
                    />
                    {section.image.caption && (
                      <div
                        style={{
                          padding: '12px 16px',
                          background: 'rgba(0, 0, 0, 0.06)',
                          fontSize: '14px',
                          color: 'rgba(17, 24, 39, 0.7)',
                          fontFamily: 'Work Sans, sans-serif'
                        }}
                      >
                        {section.image.caption}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* OUTCOME & IMPACT */}
        <section style={{ paddingBottom: '64px' }}>
          <div
            style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(29, 133, 126, 0.7)',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '32px'
            }}
          >
            Outcome & Impact
          </div>

          {/* Metrics (if available) */}
          {data.outcome.metrics && (
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {data.outcome.metrics.map((metric, index) => (
                <div
                  key={index}
                  style={{
                    background: 'rgba(29, 133, 126, 0.04)',
                    borderRadius: '16px',
                    padding: '28px 24px',
                    border: '1px solid rgba(29, 133, 126, 0.08)',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      fontSize: '36px',
                      fontWeight: 600,
                      color: '#1D857E',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '8px',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {metric.value}
                  </div>
                  <div
                    style={{
                      fontSize: '14px',
                      color: 'rgba(17, 24, 39, 0.7)',
                      fontFamily: 'Work Sans, sans-serif'
                    }}
                  >
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Changes */}
          <div className="max-w-[820px] mb-12">
            <h4
              style={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#111827',
                fontFamily: 'Inter, sans-serif',
                marginBottom: '16px'
              }}
            >
              What Changed
            </h4>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {data.outcome.changes.map((change, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: '15px',
                    lineHeight: '1.6',
                    color: 'rgba(17, 24, 39, 0.8)',
                    fontFamily: 'Work Sans, sans-serif',
                    marginBottom: '12px',
                    paddingLeft: '28px',
                    position: 'relative'
                  }}
                >
                  <TrendingUp
                    size={16}
                    style={{
                      position: 'absolute',
                      left: '0',
                      top: '2px',
                      color: 'rgba(29, 133, 126, 0.6)'
                    }}
                  />
                  {change}
                </li>
              ))}
            </ul>
          </div>

          {/* Learnings */}
          <div className="max-w-[820px]">
            <h4
              style={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#111827',
                fontFamily: 'Inter, sans-serif',
                marginBottom: '16px'
              }}
            >
              Key Learnings
            </h4>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {data.outcome.learnings.map((learning, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: '15px',
                    lineHeight: '1.6',
                    color: 'rgba(17, 24, 39, 0.8)',
                    fontFamily: 'Work Sans, sans-serif',
                    marginBottom: '12px',
                    paddingLeft: '28px',
                    position: 'relative'
                  }}
                >
                  <Zap
                    size={16}
                    style={{
                      position: 'absolute',
                      left: '0',
                      top: '2px',
                      color: 'rgba(29, 133, 126, 0.6)'
                    }}
                  />
                  {learning}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* REFLECTION & SYSTEM THINKING */}
        {data.reflection && (
          <section
            style={{
              paddingBottom: '64px',
              borderTop: '1px solid rgba(0, 0, 0, 0.06)',
              paddingTop: '64px'
            }}
          >
            <div
              style={{
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(29, 133, 126, 0.7)',
                fontFamily: 'Inter, sans-serif',
                marginBottom: '32px'
              }}
            >
              Reflection & System Thinking
            </div>

            <div className="max-w-[820px] space-y-8">
              <div>
                <h4
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '10px'
                  }}
                >
                  Scalability Considerations
                </h4>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: '1.6',
                    color: 'rgba(17, 24, 39, 0.75)',
                    fontFamily: 'Work Sans, sans-serif',
                    margin: 0
                  }}
                >
                  {data.reflection.scalability}
                </p>
              </div>

              <div>
                <h4
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '10px'
                  }}
                >
                  Design System Implications
                </h4>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: '1.6',
                    color: 'rgba(17, 24, 39, 0.75)',
                    fontFamily: 'Work Sans, sans-serif',
                    margin: 0
                  }}
                >
                  {data.reflection.systemThinking}
                </p>
              </div>

              <div>
                <h4
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '10px'
                  }}
                >
                  What I'd Do Differently
                </h4>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: '1.6',
                    color: 'rgba(17, 24, 39, 0.75)',
                    fontFamily: 'Work Sans, sans-serif',
                    margin: 0
                  }}
                >
                  {data.reflection.nextTime}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* NAVIGATION */}
        <section
          style={{
            paddingTop: '40px',
            paddingBottom: '64px',
            borderTop: '1px solid rgba(0, 0, 0, 0.06)'
          }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Previous */}
            <Link
              to="/work"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '20px 24px',
                background: 'rgba(250, 250, 250, 0.6)',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(29, 133, 126, 0.04)';
                e.currentTarget.style.borderColor = 'rgba(29, 133, 126, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(250, 250, 250, 0.6)';
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.04)';
              }}
            >
              <ArrowLeft size={18} style={{ color: 'rgba(29, 133, 126, 0.7)' }} />
              <div>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: 'rgba(29, 133, 126, 0.6)',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '4px'
                  }}
                >
                  Back to
                </div>
                <div
                  style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    color: 'rgba(17, 24, 39, 0.85)',
                    fontFamily: 'Work Sans, sans-serif'
                  }}
                >
                  Selected Work
                </div>
              </div>
            </Link>

            {/* Next */}
            {data.navigation.next && (
              <Link
                to={`/work/${data.navigation.next.id}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 24px',
                  background: 'rgba(250, 250, 250, 0.6)',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 0, 0, 0.04)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(29, 133, 126, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(29, 133, 126, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(250, 250, 250, 0.6)';
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.04)';
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: 'rgba(29, 133, 126, 0.6)',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '4px'
                    }}
                  >
                    Next case study
                  </div>
                  <div
                    style={{
                      fontSize: '15px',
                      fontWeight: 500,
                      color: 'rgba(17, 24, 39, 0.85)',
                      fontFamily: 'Work Sans, sans-serif'
                    }}
                  >
                    {data.navigation.next.title}
                  </div>
                </div>
                <ArrowRight size={18} style={{ color: 'rgba(29, 133, 126, 0.7)' }} />
              </Link>
            )}
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="max-w-[1180px] mx-auto px-8 pb-20">
        <Footer />
      </div>
    </div>
  );
}