import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useState } from 'react';
import { Lock, ArrowRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { publicCaseStudies, clientCaseStudies } from '../data/caseStudies';

type FilterType = 'All' | 'Public' | 'Client' | 'Design Systems' | 'Interaction';

// Artifact hint component
const ArtifactHint = ({ type, isClient }: { type: string; isClient?: boolean }) => {
  const baseColor = isClient ? 'rgba(26, 26, 26, 0.15)' : 'rgba(29, 133, 126, 0.18)';
  const accentColor = isClient ? 'rgba(107, 114, 128, 0.12)' : 'rgba(29, 133, 126, 0.12)';

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

    default:
      return null;
  }
};

export function WorkPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

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
          minHeight: '450px',
          background: 'linear-gradient(180deg, rgba(29, 133, 126, 0.11) 0%, rgba(29, 133, 126, 0.06) 40%, #FFFFFF 80%)'
        }}
      >
        <div className="max-w-[1180px] mx-auto px-8 pt-24 pb-28 relative">
          <div className="text-center max-w-[720px] mx-auto space-y-10">
            {/* Headline with selective green emphasis */}
            <h1
              className="leading-tight"
              style={{
                color: '#111827',
                fontSize: '36px',
                lineHeight: '1.2'
              }}
            >
              Selected work across <span style={{ color: '#1D857E' }}>design systems</span>,<br />
              <span style={{ color: '#1D857E' }}>interaction</span>, and AI-assisted workflows.
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
          </div>
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
          <div className="flex flex-wrap gap-3 md:gap-2">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                aria-label={`Filter by ${filter}`}
                className="px-4 py-2.5 md:px-3 md:py-1.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  fontFamily: 'Work Sans, sans-serif',
                  background: activeFilter === filter ? '#1D857E' : 'rgba(0, 0, 0, 0.04)',
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
          </div>
        </div>
      </section>

      {/* PUBLIC CASE STUDIES GRID */}
      {filteredPublic.length > 0 && (
        <section className="relative bg-white">
          <div className="max-w-[1180px] mx-auto px-8 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPublic.map((study) => {
                const IconComponent = study.icon;
                return (
                  <Link
                    key={study.id}
                    to={study.link}
                    className="block"
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
                          ? '0 6px 20px rgba(0, 0, 0, 0.06)'
                          : '0 4px 16px rgba(0, 0, 0, 0.04)',
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
                              transition: 'transform 0.5s ease'
                            }}
                            className="group-hover:scale-105"
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
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* SECTION DIVIDER */}
      {filteredClient.length > 0 && (
        <section
          className="relative overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, rgba(29, 133, 126, 0.03) 0%, rgba(29, 133, 126, 0.02) 50%, rgba(29, 133, 126, 0.03) 100%)'
          }}
        >
          <div className="max-w-[1180px] mx-auto px-8 py-12">
            <div className="max-w-[680px]">
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
            </div>
          </div>
        </section>
      )}

      {/* CLIENT CASE STUDIES GRID */}
      {filteredClient.length > 0 && (
        <section
          className="relative"
          style={{
            backgroundColor: 'rgba(29, 133, 126, 0.03)',
            backgroundImage: 'radial-gradient(rgba(29, 133, 126, 0.2) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        >
          <div className="max-w-[1180px] mx-auto px-8 pt-12 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredClient.map((study) => {
                const IconComponent = study.icon;
                return (
                  <Link
                    key={study.id}
                    to={study.link}
                    className="block"
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
                          ? '0 6px 20px rgba(0, 0, 0, 0.05)'
                          : '0 4px 16px rgba(0, 0, 0, 0.03)',
                        transform: hoveredCard === study.id ? 'translateY(-3px)' : 'translateY(0)',
                        transition: 'all 0.25s ease-out',
                        overflow: 'hidden'
                      }}
                    >
                      {/* Gradient header with icon */}
                      <div
                        style={{
                          height: '85px',
                          background: study.gradient,
                          borderRadius: '20px 20px 0 0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <IconComponent
                          size={36}
                          style={{
                            color: 'rgba(26, 26, 26, 0.4)',
                            strokeWidth: 1.5
                          }}
                        />
                      </div>

                      {/* Content - reduced padding */}
                      <div style={{ padding: '16px 20px' }}>
                        <div className="flex items-start gap-2 mb-8">
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
                              marginTop: '2px',
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
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <div className="max-w-[1180px] mx-auto px-8 pb-20 md:pb-24">
        <Footer />
      </div>
    </div>
  );
}