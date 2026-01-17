import { Target, Search, Sparkles, Workflow } from 'lucide-react';
import { motion } from 'motion/react';
import { Tag } from './ui/Tag';

export function About() {
  const capabilities = [
    {
      icon: Target,
      title: 'UX Strategy',
      description: 'Building cohesive design vision that aligns business goals with user needs.'
    },
    {
      icon: Search,
      title: 'Research & Systems',
      description: 'Deep user insights translated into scalable, systematic design frameworks.'
    },
    {
      icon: Sparkles,
      title: 'Interaction & Micro-motion',
      description: 'Choreographing delightful details that bring personality and clarity to interfaces.'
    },
    {
      icon: Workflow,
      title: 'Agentic AI Workflow Design',
      description: 'Designing intelligent, explainable AI experiences that augment human capability.'
    }
  ];

  return (
    <section className="bg-white relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-8 pt-12 pb-12 md:pt-20 md:pb-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 relative">
          {/* Left column */}
          <div className="relative">
            {/* Soft gradient background behind text */}
            <div
              className="absolute inset-0 -left-8 -right-4 rounded-3xl opacity-[0.04]"
              style={{
                background: 'radial-gradient(ellipse at center, #1D857E 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: 0
              }}
            />

            {/* Subtle vertical accent line */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full opacity-20"
              style={{
                background: 'linear-gradient(to bottom, transparent 0%, #1D857E 20%, #1D857E 80%, transparent 100%)'
              }}
            />

            <div className="relative z-10 pl-8 max-w-[520px]">
              <div className="mb-6">
                <div className="mb-3">
                  <h2 className="sr-only">About Me</h2>
                  <Tag variant="section-label">About Me</Tag>
                </div>
                <p style={{
                  fontSize: '16px',
                  color: '#6B7280',
                  lineHeight: '1.6',
                  fontWeight: 400
                }}>
                  Blending systems thinking, interaction craft, and human insight.
                </p>
              </div>

              {/* Pull quote / Design belief */}
              <motion.div
                className="mb-8 pb-6 border-b"
                style={{ borderColor: 'rgba(29, 133, 126, 0.1)' }}
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
              >
                <p style={{
                  fontSize: '18px',
                  lineHeight: '1.5',
                  color: 'rgba(29, 133, 126, 0.85)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontStyle: 'italic',
                  letterSpacing: '-0.01em'
                }}>
                  "Great design is systematic, strategic, and deeply human."
                </p>
              </motion.div>

              <div className="space-y-5">
                <p style={{ fontSize: '17px', lineHeight: '1.6', color: '#111827' }}>
                  I believe great design isn't just about aesthetics—it's about <span style={{ color: '#1D857E', fontWeight: 500 }}>systems thinking</span>,
                  strategic clarity, and building products that truly understand human behavior.
                </p>

                <p style={{ fontSize: '17px', lineHeight: '1.6', color: '#111827' }}>
                  My work bridges UX research, <span style={{ color: '#1D857E', fontWeight: 500 }}>interaction design</span>, and emerging <span style={{ color: '#1D857E', fontWeight: 500 }}>AI workflows</span> to
                  create experiences that feel both intelligent and deeply human.
                </p>

                <p style={{ fontSize: '17px', lineHeight: '1.6', color: 'rgba(17, 24, 39, 0.7)' }}>
                  Every project is an opportunity to build something calm, purposeful, and meaningful—rooted in research, refined through craft, and delivered with clarity.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - 2x2 grid of cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl border border-[rgba(29,133,126,0.08)] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
                style={{
                  padding: '32px'
                }}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.08,
                  ease: 'easeOut'
                }}
                whileHover={{
                  y: -4,
                  boxShadow: '0 12px 32px rgba(29, 133, 126, 0.08)',
                  borderColor: 'rgba(29, 133, 126, 0.2)'
                }}
              >
                {/* Icon with circular background */}
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: 'rgba(205, 233, 230, 0.3)'
                  }}
                  whileHover={{
                    y: -2,
                    rotate: 3,
                    scale: 1.05
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon
                    className="w-6 h-6"
                    style={{
                      color: '#1D857E',
                      strokeWidth: 1.5
                    }}
                  />
                </motion.div>

                <h4 style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  color: '#111827',
                  marginBottom: '12px'
                }}>
                  {item.title}
                </h4>

                <p className="caption" style={{ lineHeight: '1.5' }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}