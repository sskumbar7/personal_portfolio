import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Tag } from './ui/Tag';
import { publicCaseStudies } from '../data/caseStudies';


// Artifact hint component (same as WorkPage)
const ArtifactHint = ({ type }: { type: string }) => {
  // Static colors for light mode (teal theme)
  const baseColor = 'rgba(29, 133, 126, 0.18)';
  const accentColor = 'rgba(29, 133, 126, 0.12)';

  switch (type) {
    case 'token-table':
      return (
        <svg width="100%" height="100%" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.7, filter: 'blur(0.3px)' }}>
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
        <svg width="100%" height="100%" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.65, filter: 'blur(0.4px)' }}>
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
        <svg width="100%" height="100%" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.68, filter: 'blur(0.3px)' }}>
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
        <svg width="100%" height="100%" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.7, filter: 'blur(0.3px)' }}>
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
        <svg width="100%" height="100%" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.65, filter: 'blur(0.3px)' }}>
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
        <svg width="100%" height="100%" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.68, filter: 'blur(0.4px)' }}>
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
        <svg width="100%" height="100%" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.65, filter: 'blur(0.3px)' }}>
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
        <svg width="100%" height="100%" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.68, filter: 'blur(0.3px)' }}>
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

export function CaseStudies() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section
      className="relative overflow-hidden transition-colors duration-300"
      style={{
        background: 'linear-gradient(180deg, #F9FDFC 0%, #FFFFFF 100%)'
      }}
    >
      <div className="max-w-[1180px] mx-auto px-8 pt-12 pb-12 md:pt-20 md:pb-20 relative">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Tag variant="section-label">Featured Work</Tag>
          <h2 style={{ color: 'var(--color-foreground)', fontWeight: 600 }}>Case Studies</h2>
          <p className="caption max-w-2xl mx-auto" style={{ fontSize: '17px', lineHeight: '1.5', color: 'var(--color-muted-foreground)' }}>
            Purposeful, research-driven, strategic outcomes.
          </p>
        </div>

        {/* 3 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {publicCaseStudies.slice(0, 3).map((study) => {
            const IconComponent = study.icon;
            return (
              <Link
                key={study.id}
                to={study.link}
                className="block"
                style={{ textDecoration: 'none' }}
              >
                <motion.div
                  className="h-full transition-all group"
                  style={{
                    background: 'rgba(250, 250, 250, 0.6)',
                    borderRadius: '20px',
                    padding: '0',
                    border: '1px solid rgba(0, 0, 0, 0.04)',
                    overflow: 'hidden',
                    position: 'relative' // For absolute positioning of children if needed
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{
                    y: -6,
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  {/* Hybrid preview header with artifact hint */}
                  <div
                    style={{
                      height: '240px',
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
                          objectPosition: 'top center'
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
                          <ArtifactHint type={study.artifactType} />
                        </div>

                        {/* Icon */}
                        <IconComponent
                          size={32}
                          aria-hidden="true"
                          style={{
                            color: 'rgba(29, 133, 126, 0.5)',
                            strokeWidth: 1.5,
                            position: 'relative',
                            zIndex: 1
                          }}
                        />
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ padding: '16px 20px' }}>
                    <h3
                      className="dark:text-gray-100"
                      style={{
                        fontSize: '19px',
                        fontWeight: 600,
                        letterSpacing: '-0.01em',
                        color: 'var(--color-foreground)',
                        fontFamily: 'Inter, sans-serif',
                        lineHeight: '1.3',
                        marginBottom: '8px'
                      }}
                    >
                      {study.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="dark:text-gray-400"
                      style={{
                        fontSize: '14px',
                        lineHeight: '1.35',
                        color: 'var(--color-muted-foreground)',
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
                        aria-hidden="true"
                        style={{
                          transform: hoveredCard === study.id ? 'translateX(3px)' : 'translateX(0)',
                          transition: 'transform 0.2s ease-out'
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* View all case studies CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border transition-all"
            style={{
              borderColor: 'rgba(29, 133, 126, 0.3)',
              color: '#1D857E',
              backgroundColor: 'transparent',
              fontFamily: 'Work Sans, sans-serif',
              fontWeight: 500,
              fontSize: '15px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#1D857E';
              e.currentTarget.style.backgroundColor = 'rgba(29, 133, 126, 0.04)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(29, 133, 126, 0.3)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            View all case studies
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}