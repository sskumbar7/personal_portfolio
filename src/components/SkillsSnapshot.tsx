import { motion } from 'motion/react';
import { Compass, Sparkles, Network } from 'lucide-react';
import { Tag } from './ui/Tag';

export function SkillsSnapshot() {
  const skillGroups = [
    {
      label: 'Experience Areas',
      subtext: 'Strategic foundation of product thinking.',
      icon: Compass,
      skills: ['UX Strategy', 'Systems Thinking', 'Research', 'Interaction Design']
    },
    {
      label: 'Craft & Execution',
      subtext: 'Designing with precision and personality.',
      icon: Sparkles,
      skills: ['Prototyping', 'Design Systems', 'Micro-interactions']
    },
    {
      label: 'AI Specialisation',
      subtext: 'Bridging design with emerging intelligence.',
      icon: Network,
      skills: ['AI Workflow Design', 'XAI']
    }
  ];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F9FDFC 0%, #FFFFFF 100%)'
      }}
    >
      <div className="max-w-[1180px] mx-auto px-8 pt-12 pb-12 md:pt-20 md:pb-20 relative">
        {/* Section Header */}
        <div className="mb-16">
          <div className="mb-4">
            <Tag variant="section-label">Strategic Expertise</Tag>
          </div>
          <p style={{
            fontSize: '16px',
            color: '#6B7280',
            lineHeight: '1.6',
            fontWeight: 400
          }}>
            A structured blend of strategy, craft, and AI-driven design.
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 relative">
          {skillGroups.map((group, index) => (
            <div key={index} className="relative">
              {/* Column Content */}
              <div className="flex flex-col items-start">
                {/* Circular Icon with stroke style */}
                <motion.div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: 'rgba(205, 233, 230, 0.2)'
                  }}
                  initial={{ opacity: 0, y: 4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: 'easeOut'
                  }}
                  whileHover={{
                    y: -2,
                    boxShadow: '0 4px 16px rgba(29, 133, 126, 0.2)',
                    transition: { duration: 0.2 }
                  }}
                >
                  <group.icon
                    className="w-6 h-6"
                    style={{
                      color: '#1D857E',
                      strokeWidth: 1.5
                    }}
                  />
                </motion.div>

                {/* Category Title */}
                <motion.h4
                  className="uppercase"
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: '#111827',
                    marginBottom: '12px',
                    fontFamily: 'Inter, sans-serif'
                  }}
                  initial={{ opacity: 0, y: 4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + 0.1,
                    ease: 'easeOut'
                  }}
                >
                  {group.label}
                </motion.h4>

                {/* Category Subtitle */}
                <motion.p
                  style={{
                    fontSize: '16px',
                    color: '#6B7280',
                    fontWeight: 400,
                    lineHeight: '1.5',
                    marginBottom: '32px'
                  }}
                  initial={{ opacity: 0, y: 4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + 0.15,
                    ease: 'easeOut'
                  }}
                >
                  {group.subtext}
                </motion.p>

                {/* Skills List */}
                <motion.div
                  className="flex flex-col gap-3 w-full"
                  initial={{ opacity: 0, y: 4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + 0.2,
                    ease: 'easeOut'
                  }}
                >
                  {group.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      style={{
                        fontSize: '17px',
                        fontWeight: 500,
                        lineHeight: '1.5',
                        letterSpacing: '0.005em',
                        color: '#111827'
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Vertical Divider Between Columns */}
              {index < skillGroups.length - 1 && (
                <div
                  className="hidden md:block absolute top-0 -right-6 h-full w-[1px]"
                  style={{
                    backgroundColor: 'rgba(17, 24, 39, 0.06)'
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}