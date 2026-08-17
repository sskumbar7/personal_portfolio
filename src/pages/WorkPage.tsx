import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useState } from 'react';
import { Lock, ArrowRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { publicCaseStudies, clientCaseStudies } from '../data/caseStudies';
import { shadows } from '../utils/shadows';
import { motion } from 'motion/react';

type FilterType = 'All' | 'Public' | 'Client' | 'Design Systems' | 'Interaction';

// Artifact hint component
const ArtifactHint = ({ type, isClient }: { type: string; isClient?: boolean }) => {
  // Professional Slate: Light background with visible slate pattern (Physical folder look)
  const baseColor = isClient ? 'rgba(71, 85, 105, 0.15)' : 'rgba(29, 133, 126, 0.18)';
  const accentColor = isClient ? 'rgba(51, 65, 85, 0.15)' : 'rgba(29, 133, 126, 0.12)';

  switch (type) {
    case 'token-table':
      return (
        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.7, filter: 'blur(0.3px)' }}>
          {/* Token table rows */}
          <rect x="15%" y="20%" width="70%" height="8" rx="2" fill={baseColor} />
          <rect x="15%" y="35%" width="50%" height="8" rx="2" fill={baseColor} />
          <rect x="68%" y="35%" width="17%" height="8" rx="2" fill={accentColor} />
          <rect x="15%" y="50%" width="42%" height="8" rx="2" fill={baseColor} />
          <rect x="60%" y="50%" width="25%" height="8" rx="2" fill={accentColor} />
          <rect x="15%" y="65%" width="55%" height="8" rx="2" fill={baseColor} />
          <rect x="73%" y="65%" width="12%" height="8" rx="2" fill={accentColor} />
        </svg>
      );

    case 'easing-curve':
      return (
        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.65, filter: 'blur(0.4px)' }}>
          {/* Bezier curve */}
          <path
            d="M 15 75 C 25 75, 35 20, 50 20 C 65 20, 75 75, 85 75"
            stroke={baseColor}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          {/* Control points */}
          <circle cx="35" cy="20" r="3" fill={accentColor} />
          <circle cx="65" cy="75" r="3" fill={accentColor} />
          {/* Baseline */}
          <line x1="15" y1="78" x2="85" y2="78" stroke={baseColor} strokeWidth="1.5" opacity="0.4" />
        </svg>
      );

    case 'schema-blocks':
      return (
        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.68, filter: 'blur(0.3px)' }}>
          {/* Layered schema blocks */}
          <rect x="20%" y="25%" width="60%" height="14" rx="3" fill={baseColor} />
          <rect x="25%" y="43%" width="50%" height="14" rx="3" fill={accentColor} />
          <rect x="30%" y="61%" width="40%" height="14" rx="3" fill={baseColor} opacity="0.8" />
          {/* Connection lines */}
          <line x1="50%" y1="39%" x2="50%" y2="43%" stroke={accentColor} strokeWidth="2" />
          <line x1="50%" y1="57%" x2="50%" y2="61%" stroke={accentColor} strokeWidth="2" />
        </svg>
      );

    case 'motion-timeline':
      return (
        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.7, filter: 'blur(0.3px)' }}>
          {/* Timeline track */}
          <rect x="15%" y="35%" width="70%" height="3" rx="1.5" fill={baseColor} opacity="0.5" />
          {/* Keyframes */}
          <rect x="20%" y="30%" width="2" height="13" rx="1" fill={accentColor} />
          <rect x="35%" y="30%" width="2" height="13" rx="1" fill={baseColor} />
          <rect x="55%" y="30%" width="2" height="13" rx="1" fill={accentColor} />
          <rect x="75%" y="30%" width="2" height="13" rx="1" fill={baseColor} />
          {/* Motion bars */}
          <rect x="22%" y="53%" width="28%" height="6" rx="2" fill={baseColor} opacity="0.7" />
          <rect x="57%" y="53%" width="18%" height="6" rx="2" fill={accentColor} opacity="0.7" />
          <rect x="22%" y="66%" width="15%" height="6" rx="2" fill={accentColor} opacity="0.7" />
          <rect x="40%" y="66%" width="35%" height="6" rx="2" fill={baseColor} opacity="0.7" />
        </svg>
      );

    case 'component-grid':
      return (
        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.65, filter: 'blur(0.3px)' }}>
          {/* Component grid */}
          <rect x="18%" y="22%" width="20%" height="20%" rx="3" fill={baseColor} />
          <rect x="42%" y="22%" width="20%" height="20%" rx="3" fill={accentColor} />
          <rect x="66%" y="22%" width="16%" height="20%" rx="3" fill={baseColor} opacity="0.7" />
          <rect x="18%" y="48%" width="20%" height="20%" rx="3" fill={accentColor} opacity="0.8" />
          <rect x="42%" y="48%" width="20%" height="20%" rx="3" fill={baseColor} />
          <rect x="66%" y="48%" width="16%" height="20%" rx="3" fill={accentColor} />
        </svg>
      );

    case 'dashboard-panels':
      return (
        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.68, filter: 'blur(0.4px)' }}>
          {/* Dashboard panels */}
          <rect x="15%" y="20%" width="32%" height="28%" rx="3" fill={baseColor} />
          <rect x="52%" y="20%" width="33%" height="28%" rx="3" fill={accentColor} opacity="0.8" />
          {/* Chart silhouette inside first panel */}
          <path
            d="M 20 40 L 28 35 L 35 38 L 42 30"
            stroke={accentColor}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Data blocks in second panel */}
          <rect x="57%" y="28%" width="18%" height="4" rx="1" fill={baseColor} opacity="0.6" />
          <rect x="57%" y="36%" width="23%" height="4" rx="1" fill={baseColor} opacity="0.6" />
          {/* Bottom panel */}
          <rect x="15%" y="55%" width="70%" height="22%" rx="3" fill={baseColor} opacity="0.6" />
          <rect x="20%" y="63%" width="12%" height="8" rx="2" fill={accentColor} opacity="0.5" />
          <rect x="35%" y="63%" width="20%" height="8" rx="2" fill={accentColor} opacity="0.5" />
          <rect x="58%" y="63%" width="16%" height="8" rx="2" fill={accentColor} opacity="0.5" />
        </svg>
      );

    case 'flow-diagram':
      return (
        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.65, filter: 'blur(0.3px)' }}>
          {/* Flow nodes */}
          <rect x="18%" y="25%" width="18%" height="22%" rx="3" fill={baseColor} />
          <rect x="42%" y="25%" width="18%" height="22%" rx="3" fill={accentColor} />
          <rect x="66%" y="25%" width="16%" height="22%" rx="3" fill={baseColor} opacity="0.8" />
          {/* Connection arrows */}
          <path d="M 36 36 L 42 36" stroke={accentColor} strokeWidth="2" markerEnd="url(#arrowhead)" />
          <path d="M 60 36 L 66 36" stroke={accentColor} strokeWidth="2" markerEnd="url(#arrowhead)" />
          {/* Bottom node */}
          <rect x="42%" y="58%" width="18%" height="22%" rx="3" fill={accentColor} opacity="0.7" />
          <path d="M 51 47 L 51 58" stroke={accentColor} strokeWidth="2" markerEnd="url(#arrowhead)" />
          <defs>
            <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill={accentColor} />
            </marker>
          </defs>
        </svg>
      );

    case 'system-diagram':
      return (
        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.68, filter: 'blur(0.3px)' }}>
          {/* Hierarchical system blocks */}
          <rect x="35%" y="18%" width="30%" height="15" rx="3" fill={accentColor} />
          {/* Second level */}
          <rect x="18%" y="42%" width="22%" height="12" rx="2.5" fill={baseColor} />
          <rect x="45%" y="42%" width="22%" height="12" rx="2.5" fill={baseColor} />
          <rect x="72%" y="42%" width="12%" height="12" rx="2.5" fill={baseColor} opacity="0.8" />
          {/* Third level */}
          <rect x="22%" y="64%" width="14%" height="10" rx="2" fill={accentColor} opacity="0.7" />
          <rect x="49%" y="64%" width="14%" height="10" rx="2" fill={accentColor} opacity="0.7" />
          {/* Connection lines */}
          <line x1="50%" y1="33%" x2="29%" y2="42%" stroke={baseColor} strokeWidth="1.5" opacity="0.5" />
          <line x1="50%" y1="33%" x2="56%" y2="42%" stroke={baseColor} strokeWidth="1.5" opacity="0.5" />
          <line x1="50%" y1="33%" x2="78%" y2="42%" stroke={baseColor} strokeWidth="1.5" opacity="0.5" />
          <line x1="29%" y1="54%" x2="29%" y2="64%" stroke={accentColor} strokeWidth="1.5" opacity="0.5" />
          <line x1="56%" y1="54%" x2="56%" y2="64%" stroke={accentColor} strokeWidth="1.5" opacity="0.5" />
        </svg>
      );

    case 'ux-research':
      return (
        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.65, filter: 'blur(0.3px)' }}>
          {/* Research Report Layout */}
          {/* Main Chart Area */}
          <rect x="15%" y="20%" width="45%" height="35%" rx="3" fill={baseColor} />
          <rect x="18%" y="45%" width="8%" height="8%" rx="1" fill={accentColor} opacity="0.8" />
          <rect x="28%" y="35%" width="8%" height="18%" rx="1" fill={accentColor} opacity="0.6" />
          <rect x="38%" y="25%" width="8%" height="28%" rx="1" fill={accentColor} />

          {/* Side stats */}
          <rect x="65%" y="20%" width="20%" height="15%" rx="3" fill={baseColor} opacity="0.8" />
          <rect x="65%" y="40%" width="20%" height="15%" rx="3" fill={baseColor} opacity="0.8" />

          {/* Text lines/Analysis */}
          <rect x="15%" y="62%" width="70%" height="6" rx="2" fill={baseColor} />
          <rect x="15%" y="72%" width="50%" height="6" rx="2" fill={baseColor} />
          <rect x="68%" y="72%" width="17%" height="6" rx="2" fill={accentColor} opacity="0.5" />
        </svg>
      );

    case 'usability-report':
      return (
        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.65, filter: 'blur(0.3px)' }}>
          {/* Usability Audit/Scorecard */}
          {/* Header row */}
          <rect x="15%" y="20%" width="70%" height="10%" rx="3" fill={baseColor} />

          {/* Review Rows with status indicators */}
          {/* Row 1 - Pass */}
          <rect x="15%" y="35%" width="70%" height="12%" rx="3" fill={baseColor} opacity="0.5" />
          <circle cx="20%" cy="41%" r="3" fill={accentColor} /> {/* Status dot */}
          <rect x="25%" y="39%" width="40%" height="4" rx="2" fill={baseColor} opacity="0.8" />

          {/* Row 2 - Warning/Fail */}
          <rect x="15%" y="50%" width="70%" height="12%" rx="3" fill={baseColor} opacity="0.5" />
          <circle cx="20%" cy="56%" r="3" fill={baseColor} opacity="0.8" />
          <rect x="25%" y="54%" width="30%" height="4" rx="2" fill={baseColor} opacity="0.8" />

          {/* Row 3 - Pass */}
          <rect x="15%" y="65%" width="70%" height="12%" rx="3" fill={baseColor} opacity="0.5" />
          <circle cx="20%" cy="71%" r="3" fill={accentColor} />
          <rect x="25%" y="69%" width="45%" height="4" rx="2" fill={baseColor} opacity="0.8" />
        </svg>
      );

    default:
      return null;
  }
};

export function WorkPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [hoveredFilter, setHoveredFilter] = useState<FilterType | null>(null);

  const filters: FilterType[] = ['All', 'Public', 'Client', 'Design Systems', 'Interaction'];

  // Helper to filter studies
  const getFilteredStudies = (studies: typeof publicCaseStudies, filter: FilterType) => {
    if (filter === 'All' || filter === 'Public' || filter === 'Client') return studies;

    return studies.filter(study => {
      if (filter === 'Design Systems') {
        return study.tags.some(t => t.includes('System') || t.includes('UI Kit') || t.includes('Visual Design'));
      }
      if (filter === 'Interaction') {
        return (study as any).category === 'interaction' || study.tags.some(t => t.includes('Interaction') || t.includes('Mobile') || t.includes('Prototyping') || t.includes('Motion'));
      }
      if (filter === 'AI + Design') {
        return study.tags.some(t => t.includes('AI') || t.includes('Intelligence'));
      }
      return true;
    });
  };

  // derived state
  const filteredPublic = activeFilter === 'Client' ? [] : getFilteredStudies(publicCaseStudies, activeFilter);
  const filteredClient = activeFilter === 'Public' ? [] : getFilteredStudies(clientCaseStudies, activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO SECTION - Contact Page Style */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(29, 133, 126, 0.11) 0%, rgba(29, 133, 126, 0.06) 40%, #FFFFFF 80%)'
        }}
      >
        <div className="max-w-[1180px] mx-auto px-8 pt-20 pb-14 relative">
          <motion.div
            className="text-center max-w-[860px] mx-auto space-y-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
          >
            {/* Headline — wraps naturally; `balance` keeps line lengths even
                so the serif never leaves an orphan word on its own line */}
            <h1
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: 'clamp(32px, 4vw, 50px)',
                fontWeight: 560,
                lineHeight: 1.14,
                letterSpacing: '-0.015em',
                color: '#111827',
                textWrap: 'balance'
              }}
            >
              Selected work across <span style={{ color: '#1D857E' }}>design systems</span>, <span style={{ color: '#1D857E' }}>interaction</span>, and AI-assisted workflows.
            </h1>

            {/* Supporting text */}
            <p
              style={{
                fontSize: '17px',
                lineHeight: '1.5',
                color: 'rgba(17, 24, 39, 0.7)',
                maxWidth: '600px',
                margin: '0 auto 8px'
              }}
            >
              A focused collection of personal explorations and selected client engagements.
            </p>

            {/* Secondary text - info chip style */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                lineHeight: '1.5',
                color: 'rgba(75, 85, 99, 0.85)',
                letterSpacing: '0.01em',
                padding: '6px 16px',
                borderRadius: '8px',
                backgroundColor: 'rgba(29, 133, 126, 0.04)',
                border: '1px solid rgba(29, 133, 126, 0.15)',
                fontFamily: 'Work Sans, sans-serif',
                margin: '0 auto 20px'
              }}
            >
              <Info
                size={16}
                style={{
                  color: 'rgba(29, 133, 126, 0.6)',
                  flexShrink: 0
                }}
              />
              <span>Personal case studies are public. Client work is shared on request.</span>
            </div>

            {/* Inline text link - subtle hover */}
            <Link
              to="/contact"
              className="inline-link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '15px',
                fontWeight: 500,
                color: 'rgba(29, 133, 126, 0.95)',
                fontFamily: 'Work Sans, sans-serif',
                textDecoration: 'none',
                position: 'relative',
                transition: 'color 0.2s ease'
              }}
            >
              Looking for client work details? Reach out
              <ArrowRight
                size={14}
                className="arrow-icon"
                style={{
                  transition: 'transform 0.2s ease'
                }}
              />
            </Link>
          </motion.div>
        </div>
      </section>

      <style>{`
        .inline-link:hover {
          color: rgba(29, 133, 126, 1);
        }
        .inline-link:hover::after {
          transform: scaleX(1);
        }
        .inline-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 20px;
          height: 1px;
          background: rgba(29, 133, 126, 0.4);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .inline-link:hover .arrow-icon {
          transform: translateX(3px);
        }
      `}</style>

      {/* FILTERS - Lightweight */}
      <section className="relative bg-white">
        <div className="max-w-[1180px] mx-auto px-8 pt-8 pb-4">
          <motion.div
            className="flex flex-wrap gap-3 md:gap-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
          >
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                onMouseEnter={() => setHoveredFilter(filter)}
                onMouseLeave={() => setHoveredFilter(null)}
                aria-pressed={activeFilter === filter}
                aria-label={`Filter by ${filter}`}
                className="px-4 py-2.5 md:px-3 md:py-1.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  fontFamily: 'Work Sans, sans-serif',
                  background: activeFilter === filter
                    ? '#1D857E'
                    : hoveredFilter === filter
                      ? 'rgba(0, 0, 0, 0.08)'
                      : 'rgba(0, 0, 0, 0.04)',
                  color: activeFilter === filter ? 'white' : 'rgba(17, 24, 39, 0.5)',
                  border: 'none',
                  cursor: 'pointer',
                  minHeight: '44px',
                  minWidth: '60px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                } as React.CSSProperties}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PUBLIC CASE STUDIES GRID */}
      {filteredPublic.length > 0 && (
        <section className="relative bg-white">
          <div className="max-w-[1180px] mx-auto px-8 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPublic.map((study, index) => {
                const IconComponent = study.icon;
                return (
                  <motion.div
                    key={study.id}
                    className="h-full"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  >
                  <Link
                    to={study.link}
                    className="block h-full"
                    style={{ textDecoration: 'none' }}
                    onMouseEnter={() => setHoveredCard(study.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div
                      className="h-full transition-all"
                      style={{
                        background: 'rgba(250, 250, 250, 0.6)',
                        borderRadius: '20px',
                        padding: '0',
                        border: '1px solid rgba(0, 0, 0, 0.04)',
                        boxShadow: hoveredCard === study.id
                          ? shadows.cardHover
                          : shadows.card,
                        transform: hoveredCard === study.id ? 'translateY(-3px)' : 'translateY(0)',
                        transition: 'all 0.25s ease-out',
                        overflow: 'hidden'
                      }}
                    >
                      {/* Hybrid preview header with artifact hint COMPONENT */}
                      <div
                        style={{
                          height: '240px', // Increased height for better image display on wider cards
                          background: study.gradient,
                          borderRadius: '20px 20px 0 0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        {(study as any).imageUrl ? (
                          <img
                            src={(study as any).imageUrl}
                            alt={`${study.title} preview`}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'top center', // Anchor to top for UI screenshots
                              transform: hoveredCard === study.id ? 'scale(1.05)' : 'scale(1)',
                              transition: 'transform 0.5s ease-out',
                            }}
                          />
                        ) : (
                          <>
                            {/* Artifact hint layer */}
                            <div style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              pointerEvents: 'none'
                            }}>
                              <ArtifactHint type={study.artifactType} isClient={true} />
                            </div>

                            {/* Icon */}
                            <IconComponent
                              size={32}
                              style={{
                                color: 'rgba(26, 26, 26, 0.4)',
                                strokeWidth: 1.5,
                                position: 'relative',
                                zIndex: 1
                              }}
                            />
                          </>
                        )}
                      </div>

                      {/* Content - reduced padding */}
                      <div style={{ padding: '16px 20px' }}>
                        <h3
                          style={{
                            fontSize: '19px',
                            fontWeight: 600,
                            letterSpacing: '-0.01em',
                            color: '#111827',
                            fontFamily: 'Inter, sans-serif',
                            lineHeight: '1.3',
                            marginBottom: '8px'
                          }}
                        >
                          {study.title}
                        </h3>

                        {/* Description - strictly 2 lines */}
                        <p
                          style={{
                            fontSize: '14px',
                            lineHeight: '1.35',
                            color: 'rgba(17, 24, 39, 0.7)',
                            fontFamily: 'Work Sans, sans-serif',
                            marginBottom: '12px',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}
                        >
                          {study.description}
                        </p>

                        {/* Tags */}
                        <div style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '5px',
                          marginBottom: '12px'
                        }}>
                          {study.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-0.5 rounded"
                              style={{
                                fontSize: '11px',
                                fontWeight: 500,
                                fontFamily: 'Work Sans, sans-serif',
                                background: 'rgba(29, 133, 126, 0.1)',
                                color: 'rgba(29, 133, 126, 0.8)'
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <div
                          className="inline-flex items-center gap-1.5"
                          style={{
                            fontSize: '13px',
                            fontWeight: 500,
                            color: '#1D857E',
                            fontFamily: 'Work Sans, sans-serif'
                          }}
                        >
                          View case study
                          <ArrowRight
                            size={13}
                            style={{
                              transform: hoveredCard === study.id ? 'translateX(3px)' : 'translateX(0)',
                              transition: 'transform 0.2s ease-out'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* SECTION DIVIDER */}
      {activeFilter !== 'Public' && (
        <section
          className="relative overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, rgba(29, 133, 126, 0.03) 0%, rgba(29, 133, 126, 0.02) 50%, rgba(29, 133, 126, 0.03) 100%)'
          }}
        >
          <div className="max-w-[1180px] mx-auto px-8 py-12">
            <motion.div
              className="max-w-[680px]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <div
                className="section-label"
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(29, 133, 126, 0.7)',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '8px'
                }}
              >
                Key Client Engagements
              </div>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: '1.5',
                  color: 'rgba(17, 24, 39, 0.55)',
                  fontFamily: 'Work Sans, sans-serif'
                }}
              >
                A snapshot of enterprise and confidential work. Full details available on request.
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* CLIENT CASE STUDIES GRID */}
      {activeFilter !== 'Public' && (
        <section
          className="relative"
          style={{
            backgroundColor: 'rgba(29, 133, 126, 0.03)',
            backgroundImage: 'radial-gradient(rgba(29, 133, 126, 0.2) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            minHeight: filteredClient.length === 0 ? '300px' : 'auto',
          }}
        >
          <div className="max-w-[1180px] mx-auto px-8 pt-12 pb-16">

            {/* EMPTY STATE */}
            {filteredClient.length === 0 && (
              <div className="flex flex-col items-center justify-center text-center py-16 px-4">
                <div className="w-16 h-16 rounded-2xl bg-white/60 border border-[rgba(29,133,126,0.1)] flex items-center justify-center mb-6 shadow-sm">
                  <Info size={24} style={{ color: 'rgba(29, 133, 126, 0.5)' }} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-inter tracking-tight">
                  No matching client projects
                </h3>
                <p className="text-[15px] text-gray-500 font-worksans max-w-[320px]">
                  None of the selected client engagements match the "{activeFilter}" filter.
                </p>
              </div>
            )}

            {/* GRID */}
            {filteredClient.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredClient.map((study, index) => {
                  const IconComponent = study.icon;
                  return (
                    <motion.div
                      key={study.id}
                      className="h-full"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.45, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    >
                    <Link
                      to={study.link}
                      className="block h-full"
                      style={{ textDecoration: 'none' }}
                      onMouseEnter={() => setHoveredCard(study.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div
                        className="h-full transition-all"
                        style={{
                          background: 'rgba(250, 250, 250, 0.4)',
                          borderRadius: '20px',
                          padding: '0',
                          border: '1px solid rgba(0, 0, 0, 0.03)',
                          boxShadow: hoveredCard === study.id
                            ? shadows.cardHover
                            : shadows.card,
                          transform: hoveredCard === study.id ? 'translateY(-3px)' : 'translateY(0)',
                          transition: 'all 0.25s ease-out',
                          overflow: 'hidden'
                        }}
                      >
                        {/* Hybrid preview header with artifact hint for Client Work */}
                        <div
                          style={{
                            height: '240px', // Increased height to match Public Work cards
                            background: study.gradient,
                            borderRadius: '20px 20px 0 0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                          }}
                        >
                          {/* Client Image with Locked Overlay Style */}
                          {(study as any).imageUrl ? (
                            <>
                              <div className="absolute inset-0 z-0">
                                <img
                                  src={(study as any).imageUrl}
                                  alt={`${study.title} preview`}
                                  className="w-full h-full object-cover"
                                  style={{
                                    objectPosition: 'top center',
                                    transform: hoveredCard === study.id ? 'scale(1.05)' : 'scale(1)',
                                    transition: 'transform 0.5s ease-out',
                                  }}
                                />
                              </div>

                              {/* Locked Blur Overlay */}
                              <div
                                style={{
                                  position: 'absolute',
                                  top: '25%', // Match detail page style
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  backdropFilter: 'blur(12px)',
                                  WebkitBackdropFilter: 'blur(12px)',
                                  background: 'rgba(255, 255, 255, 0.4)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  zIndex: 10
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: '12px',
                                    fontWeight: 500,
                                    color: 'rgba(29, 133, 126, 0.9)',
                                    fontFamily: 'Work Sans, sans-serif',
                                    background: 'rgba(255, 255, 255, 0.95)',
                                    padding: '8px 16px',
                                    borderRadius: '6px',
                                    border: '1px solid rgba(29, 133, 126, 0.2)',
                                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    textAlign: 'center'
                                  }}
                                >
                                  <span>🔒</span> Confidential content
                                </div>
                              </div>
                            </>
                          ) : (
                            <div className="absolute inset-0 z-0 opacity-100">
                              <ArtifactHint type={(study as any).artifactType} isClient={true} />
                            </div>
                          )}

                          {/* Icon - Only show if NO image */}
                          {!(study as any).imageUrl && (
                            <IconComponent
                              size={32}
                              style={{
                                color: 'rgba(51, 65, 85, 0.9)',
                                strokeWidth: 1.5,
                                position: 'relative',
                                zIndex: 1
                              }}
                            />
                          )}
                        </div>

                        {/* Content - reduced padding */}
                        <div style={{ padding: '16px 20px' }}>
                          <div className="flex items-start gap-2 mb-2">
                            <h3
                              style={{
                                fontSize: '19px',
                                fontWeight: 600,
                                letterSpacing: '-0.01em',
                                color: 'rgba(17, 24, 39, 0.75)',
                                fontFamily: 'Inter, sans-serif',
                                lineHeight: '1.3'
                              }}
                            >
                              {study.title}
                            </h3>
                            <Lock
                              size={13}
                              style={{
                                color: 'rgba(17, 24, 39, 0.3)',
                                marginTop: '5px',
                                flexShrink: 0
                              }}
                            />
                          </div>

                          {/* Description - strictly 2 lines */}
                          <p
                            style={{
                              fontSize: '14px',
                              lineHeight: '1.35',
                              color: 'rgba(17, 24, 39, 0.6)',
                              fontFamily: 'Work Sans, sans-serif',
                              marginBottom: '12px',
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden'
                            }}
                          >
                            {study.description}
                          </p>

                          {/* Tags */}
                          <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '5px',
                            marginBottom: '16px'
                          }}>
                            {study.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-2 py-0.5 rounded"
                                style={{
                                  fontSize: '11px',
                                  fontWeight: 500,
                                  fontFamily: 'Work Sans, sans-serif',
                                  background: 'rgba(0, 0, 0, 0.04)',
                                  color: 'rgba(17, 24, 39, 0.5)'
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* CTA */}
                          <div
                            className="inline-flex items-center gap-1.5"
                            style={{
                              fontSize: '13px',
                              fontWeight: 500,
                              color: 'rgba(29, 133, 126, 0.6)',
                              fontFamily: 'Work Sans, sans-serif'
                            }}
                          >
                            Preview available — reach out
                            <ArrowRight
                              size={13}
                              style={{
                                transform: hoveredCard === study.id ? 'translateX(3px)' : 'translateX(0)',
                                transition: 'transform 0.2s ease-out'
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Footer */}
      <div className="max-w-[1180px] mx-auto px-8 pb-20 md:pb-24 mt-auto">
        <Footer />
      </div>
    </div>
  );
}