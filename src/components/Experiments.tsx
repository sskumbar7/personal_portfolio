import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Tag } from './ui/Tag';
import { Button } from './ui/button';

export function Experiments() {
  const prefersReducedMotion = useReducedMotion();

  // Mini summary of steps to teaser on the right card
  const teaserSteps = [
    'Gathered requirements & transcripts',
    'Shared visual reference screenshots',
    'Generated structured prompt with Copilot',
    'Figma design agent execution',
    'Iterated first pass to functional baseline'
  ];

  return (
    <section 
      style={{
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)'
      }}
    >
      {/* Decorative background grid pattern */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          opacity: 0.2,
          pointerEvents: 'none',
          backgroundImage: 'radial-gradient(rgba(29, 133, 126, 0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div 
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '80px 32px'
        }}
        className="relative"
      >
        {/* Section Header */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ marginBottom: '16px' }}>
            <Tag variant="section-label">R&D Lab</Tag>
          </div>
          <h2 
            style={{
              fontSize: '36px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              color: '#111827',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}
          >
            Design Experiments
          </h2>
        </div>

        {/* Teaser Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Context, Main Question, CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(29, 133, 126, 0.06)',
                border: '1px solid rgba(29, 133, 126, 0.15)',
                padding: '6px 12px',
                borderRadius: '20px',
                color: '#1D857E',
                fontSize: '13px',
                fontWeight: 500,
                fontFamily: 'JetBrains Mono, monospace'
              }}
            >
              <Sparkles size={14} />
              <span>⚡ Quick Bites • 2 min read • Figma AI Agent</span>
            </div>

            <h3 
              style={{
                fontSize: '28px',
                mdFontSize: '32px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                color: '#111827',
                lineHeight: '1.3',
                letterSpacing: '-0.01em'
              }}
            >
              Can Figma's AI agent design a functional first draft of a UI on the first try? I put it to the test.
            </h3>

            <p 
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#6B7280',
                fontFamily: 'Work Sans, sans-serif'
              }}
            >
              Last week I experimented with Figma's AI agent on an internal project: a conversational platform designed to automate business tasks. The results were surprising.
            </p>

            <div style={{ pt: '8px' }}>
              <Link to="/experiments" style={{ textDecoration: 'none' }}>
                <Button 
                  variant="default"
                  className="group"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  Read Full Experiment
                  <ArrowRight 
                    size={16} 
                    className="transition-transform group-hover:translate-x-1" 
                  />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Preview Dashboard Card */}
          <div className="lg:col-span-6">
            <motion.div
              style={{
                background: 'linear-gradient(135deg, rgba(250, 250, 250, 0.8) 0%, rgba(244, 249, 248, 0.9) 100%)',
                border: '1px solid rgba(29, 133, 126, 0.12)',
                borderRadius: '24px',
                padding: '32px',
                boxShadow: '0 10px 30px rgba(29, 133, 126, 0.04)',
                position: 'relative'
              }}
              whileHover={prefersReducedMotion ? {} : { y: -6, boxShadow: '0 20px 40px rgba(29, 133, 126, 0.08)' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {/* Card Header stats */}
              <div 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  borderBottom: '1px solid rgba(29, 133, 126, 0.08)',
                  paddingBottom: '20px',
                  marginBottom: '20px'
                }}
              >
                <div>
                  <span 
                    style={{ 
                      fontSize: '11px', 
                      fontFamily: 'Inter, sans-serif', 
                      fontWeight: 600, 
                      color: 'rgba(29, 133, 126, 0.6)', 
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    Lab Output
                  </span>
                  <div style={{ fontSize: '24px', fontFamily: 'Inter, sans-serif', fontWeight: 700, color: '#1D857E' }}>
                    1st Draft <span style={{ fontSize: '13px', fontWeight: 500, color: '#6B7280' }}>functional baseline</span>
                  </div>
                </div>

                {/* Animated Radial Dial */}
                <div style={{ width: '60px', height: '60px', position: 'relative' }}>
                  <svg width="60" height="60" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="rgba(29, 133, 126, 0.1)"
                      strokeWidth="3.5"
                    />
                    <motion.path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#1D857E"
                      strokeWidth="3.5"
                      strokeDasharray="100, 100"
                      initial={{ strokeDasharray: "0, 100" }}
                      whileInView={{ strokeDasharray: "100, 100" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                    />
                  </svg>
                  <div 
                    style={{ 
                      position: 'absolute', 
                      top: 0, 
                      left: 0, 
                      right: 0, 
                      bottom: 0, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#1D857E'
                    }}
                  >
                    Base
                  </div>
                </div>
              </div>

              {/* Steps abstract */}
              <div className="space-y-4">
                <span 
                  style={{ 
                    fontSize: '11px', 
                    fontFamily: 'Inter, sans-serif', 
                    fontWeight: 600, 
                    color: '#9CA3AF', 
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    display: 'block'
                  }}
                >
                  Timeline Abstract
                </span>

                <ul style={{ padding: 0, margin: 0, listStyle: 'none' }} className="space-y-2.5">
                  {teaserSteps.map((step, idx) => (
                    <li 
                      key={idx} 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px',
                        fontSize: '13.5px',
                        color: idx === 4 ? '#111827' : '#4B5563',
                        fontFamily: 'Work Sans, sans-serif',
                        fontWeight: idx === 4 ? 600 : 400
                      }}
                    >
                      <CheckCircle2 
                        size={14} 
                        style={{ 
                          color: idx === 4 ? '#1D857E' : 'rgba(29, 133, 126, 0.4)', 
                          flexShrink: 0 
                        }} 
                      />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative side accent */}
              <div 
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#1D857E',
                  opacity: 0.6
                }}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
