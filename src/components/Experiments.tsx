import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, CheckCircle2, FlaskConical } from 'lucide-react';
import { Tag } from './ui/Tag';
import { Button } from './ui/button';
import { shadows } from '../utils/shadows';

export function Experiments() {
  const prefersReducedMotion = useReducedMotion();

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
      <div
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '80px 32px'
        }}
        className="relative"
      >
        {/* Section Header — matches the centered pattern used by Featured Work */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Tag variant="section-label">Design Lab</Tag>
          <h2 style={{ color: 'var(--color-foreground)', fontWeight: 600 }}>Recent Experiments</h2>
          <p className="caption max-w-2xl mx-auto" style={{ fontSize: '17px', lineHeight: '1.5', color: 'var(--color-muted-foreground)' }}>
            Short-form experiments with emerging AI design tools.
          </p>
        </motion.div>

        {/* Teaser Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Context, Main Question, CTA */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(29, 133, 126, 0.06)',
                border: '1px solid rgba(29, 133, 126, 0.15)',
                padding: '6px 14px',
                borderRadius: '20px',
                color: '#1D857E',
                fontSize: '13px',
                fontWeight: 500,
                fontFamily: 'Work Sans, sans-serif'
              }}
            >
              <FlaskConical size={14} />
              <span>Quick Bite · 2 min read · Figma AI Agent</span>
            </div>

            <h3
              style={{
                fontSize: '28px',
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

            <div>
              <Button variant="secondary" asChild>
                <Link to="/experiments" className="group flex items-center gap-2">
                  Read the experiment
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Experiment log card */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
          >
            <motion.div
              style={{
                background: 'rgba(250, 250, 250, 0.6)',
                border: '1px solid rgba(29, 133, 126, 0.12)',
                borderRadius: '20px',
                padding: '32px',
                boxShadow: shadows.card,
                position: 'relative'
              }}
              whileHover={prefersReducedMotion ? {} : { y: -2, boxShadow: shadows.cardHover }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {/* Card Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid rgba(29, 133, 126, 0.08)',
                  paddingBottom: '20px',
                  marginBottom: '20px',
                  gap: '12px',
                  flexWrap: 'wrap'
                }}
              >
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
                  Experiment Log
                </span>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    fontFamily: 'Work Sans, sans-serif',
                    color: '#1D857E',
                    backgroundColor: 'rgba(29, 133, 126, 0.06)',
                    border: '1px solid rgba(29, 133, 126, 0.15)',
                    padding: '4px 12px',
                    borderRadius: '16px'
                  }}
                >
                  Outcome: functional baseline
                </span>
              </div>

              {/* Steps */}
              <ul style={{ padding: 0, margin: 0, listStyle: 'none' }} className="space-y-2.5">
                {teaserSteps.map((step, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '13.5px',
                      color: idx === teaserSteps.length - 1 ? '#111827' : '#4B5563',
                      fontFamily: 'Work Sans, sans-serif',
                      fontWeight: idx === teaserSteps.length - 1 ? 600 : 400
                    }}
                  >
                    <CheckCircle2
                      size={14}
                      style={{
                        color: idx === teaserSteps.length - 1 ? '#1D857E' : 'rgba(29, 133, 126, 0.4)',
                        flexShrink: 0
                      }}
                    />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
