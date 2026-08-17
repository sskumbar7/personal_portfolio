import { Heart, BarChart3, Accessibility, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';
import { Tag } from './ui/Tag';
import { shadows } from '../utils/shadows';

export function About() {
  const principles = [
    {
      icon: Heart,
      title: 'Human-Centered',
      description: 'Every decision starts with a person, not a screen.'
    },
    {
      icon: BarChart3,
      title: 'Data-Informed',
      description: "Evidence guides taste. It doesn't replace it."
    },
    {
      icon: Accessibility,
      title: 'Accessible',
      description: "If it excludes, it isn't finished."
    },
    {
      icon: RefreshCw,
      title: 'Iterative',
      description: 'Ship, learn, refine. In that order, on repeat.'
    }
  ];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        // Tinted band, fading to white at both edges so it never seams
        // against the white sections above and below
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F9F8 14%, #F5F9F8 86%, #FFFFFF 100%)'
      }}
    >
      <div className="max-w-[1180px] mx-auto px-8 pt-12 pb-12 md:pt-24 md:pb-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative items-start">
          {/* Left column */}
          <div className="relative">
            {/* Header */}
            <div className="mb-8">
              <div className="mb-4">
                <Tag variant="section-label">About Me</Tag>
              </div>

              <p style={{
                fontSize: '16px',
                color: '#6B7280',
                lineHeight: '1.6',
                fontWeight: 400,
                marginBottom: '32px'
              }}>
                Blending systems thinking, interaction craft, and human insight.
              </p>

              {/* Pull quote — the serif's second and only other appearance */}
              <motion.div
                className="mb-10"
                data-inspect="The serif returns for the thesis, and nowhere else. Two voices, both used sparingly."
                data-inspect-token="Fraunces italic · clamp(24px, 2.2vw, 30px)"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <p
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontStyle: 'italic',
                    fontWeight: 480,
                    fontSize: 'clamp(24px, 2.2vw, 30px)',
                    lineHeight: 1.35,
                    letterSpacing: '-0.01em',
                    color: '#1D857E'
                  }}
                >
                  “Great design is systematic, strategic, and deeply human.”
                </p>
              </motion.div>

              {/* Body Text */}
              <div className="space-y-6 text-[17px] leading-relaxed text-gray-700">
                <p>
                  I believe great design isn't just about aesthetics—it's about <span className="font-semibold text-[#1D857E]">systems thinking</span>,
                  strategic clarity, and building products that truly understand human behavior.
                </p>

                <p>
                  My work bridges UX research, <span className="font-semibold text-[#1D857E]">interaction design</span>, and
                  emerging <span className="font-semibold text-[#1D857E]">AI workflows</span> to create experiences that
                  feel both intelligent and deeply human.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Design Principles */}
          <div className="relative pt-2" data-tour="principles">
            <div className="mb-8">
              <div className="mb-4">
                <Tag variant="section-label">Design Principles</Tag>
              </div>
              <p className="text-sm text-gray-400">
                Core values that guide every decision
              </p>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              data-inspect="No percentages on principles. They're commitments, not metrics."
              data-inspect-token="honesty > data-viz"
            >
              {principles.map((item, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: index * 0.08, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3, boxShadow: shadows.cardHover }}
                  style={{
                    // Solid white against the tinted band so the cards
                    // actually read as elevated surfaces
                    background: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    borderRadius: '16px',
                    padding: '24px 22px',
                    boxShadow: shadows.card
                  }}
                >
                  <div className="flex items-start justify-between" style={{ marginBottom: '16px' }}>
                    <div className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-[#1D857E] transition-colors duration-300 bg-[#1D857E]/5 group-hover:bg-[#1D857E]/10">
                      <item.icon size={19} strokeWidth={1.5} />
                    </div>
                    <span
                      style={{
                        fontSize: '12px',
                        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                        color: 'rgba(29, 133, 126, 0.45)',
                        letterSpacing: '0.05em'
                      }}
                    >
                      0{index + 1}
                    </span>
                  </div>
                  <div className="text-[17px] font-semibold text-gray-800" style={{ marginBottom: '6px', fontFamily: 'Inter, sans-serif' }}>
                    {item.title}
                  </div>
                  <p style={{
                    fontSize: '14px',
                    lineHeight: 1.55,
                    color: '#6B7280',
                    fontFamily: 'Work Sans, sans-serif'
                  }}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
