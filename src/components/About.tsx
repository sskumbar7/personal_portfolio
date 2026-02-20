import { Heart, BarChart3, Accessibility, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';
import { Tag } from './ui/Tag';

export function About() {
  const principles = [
    {
      icon: Heart,
      title: 'Human-Centered',
      width: '100%' // Full width for concept
    },
    {
      icon: BarChart3,
      title: 'Data-Informed',
      width: '90%'
    },
    {
      icon: Accessibility,
      title: 'Accessible', // Using Accessibility icon if available, else fallback to something else in next step
      width: '95%'
    },
    {
      icon: RefreshCw,
      title: 'Iterative',
      width: '85%'
    }
  ];

  return (
    <section className="bg-white relative overflow-hidden">
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

              {/* Quote */}
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p
                  className="text-xl md:text-2xl font-medium italic text-[#1D857E]"
                  style={{ fontFamily: 'Work Sans, sans-serif' }}
                >
                  "Great design is systematic, strategic, and deeply human."
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

                <p className="text-gray-600">
                  Every project is an opportunity to build something calm, purposeful, and meaningful—rooted
                  in research, refined through craft, and delivered with clarity.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Design Principles */}
          <div className="relative pt-2">
            <div className="text-center mb-10 md:mb-12">
              <h3
                className="text-xs font-bold tracking-widest uppercase text-[#1D857E] opacity-60 mb-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Design Principles
              </h3>
              <p className="text-sm text-gray-400">
                Core values that guide every decision
              </p>
            </div>

            <div className="space-y-10">
              {principles.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1D857E]/5 text-[#1D857E]">
                      <item.icon size={20} strokeWidth={1.5} />
                    </div>
                    <span className="text-lg font-medium text-gray-800">
                      {item.title}
                    </span>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#1D857E]/50 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: item.width }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-xs text-gray-300 font-medium tracking-wide">
                Balanced approach across all principles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}