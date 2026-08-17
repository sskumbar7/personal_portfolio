import { motion, useReducedMotion } from 'motion/react';
import { Tag } from './ui/Tag';
import { CountUp } from './animations/CountUp';

export function Experience() {
  const companies = [
    { name: 'KPMG', year: '2025', isCurrent: true },
    { name: 'Happiest Minds', year: '2023', isCurrent: false },
    { name: 'Epam(Google)', year: '2021', isCurrent: false },
    { name: 'Ecolab', year: '2020', isCurrent: false },
    { name: 'Goavega', year: '2016', isCurrent: false },
    { name: 'Micro Village', year: '2014', isCurrent: false },
  ];

  return (
    <section className="bg-white relative overflow-hidden" data-tour="timeline">

      <div className="max-w-[1180px] mx-auto px-8 pt-12 pb-12 md:pt-20 md:pb-20 relative">
        <div className="max-w-[1100px] mx-auto">
          {/* Section Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <Tag variant="section-label">Experience Timeline</Tag>
          </motion.div>

          {/* Years Badge - Centered Above Timeline */}
          <div className="flex justify-center mb-16">
            <motion.div
              className="px-10 py-3 rounded-full bg-white cursor-default relative z-10"
              data-inspect="The page's only infinite animation lives where 'now' does."
              data-inspect-token="scale 1 → 1.015 · 4s ∞"
              style={{
                border: '1px solid rgba(29, 133, 126, 0.3)',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                color: '#1D857E'
              }}
              whileHover={{
                y: -1.5,
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)'
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              animate={{
                scale: [1, 1.015, 1],
              }}
              transition={{
                scale: {
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                },
                default: { duration: 0.2 }
              }}
            >
              <CountUp to={11} suffix="+" /> Years of Experience
            </motion.div>
          </div>

          {/* MOBILE: Vertical Timeline Container */}
          <div className="relative max-w-3xl mx-auto md:hidden">
            {/* Vertical Center Timeline Line */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[0.75px]"
              aria-hidden="true"
              style={{
                background: 'rgba(29, 133, 126, 0.2)',
                transformOrigin: 'top'
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Timeline Nodes - Alternating Left/Right */}
            <div className="relative space-y-8">
              {companies.map((company, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={company.name}
                    className="relative flex items-center"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.08,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    {/* Left Side Content */}
                    {isLeft ? (
                      <motion.div
                        className="flex-1 pr-8 text-right space-y-1"
                        whileHover={{ x: -2 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div
                          className="cursor-default"
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: company.isCurrent ? '18px' : '17px',
                            fontWeight: company.isCurrent ? 600 : 500,
                            letterSpacing: '0.01em',
                            color: '#111827',
                            opacity: company.isCurrent ? 0.95 : 0.75
                          }}
                        >
                          {company.name}
                        </div>

                        <div
                          className="caption"
                          style={{
                            fontFamily: 'Work Sans, sans-serif',
                            fontSize: '14px',
                            fontWeight: 400,
                            letterSpacing: '0.02em',
                            color: '#6B7280',
                            opacity: 0.8
                          }}
                        >
                          {company.year}
                        </div>
                      </motion.div>
                    ) : (
                      <div className="flex-1" />
                    )}

                    {/* Center Dot */}
                    <motion.div
                      className="relative z-10 flex-shrink-0"
                      whileHover={{
                        scale: 1.15
                      }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {/* Active Ring (only for current) */}
                      {company.isCurrent && (
                        <motion.div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                          style={{
                            width: '20px',
                            height: '20px',
                            border: '1.5px solid rgba(29, 133, 126, 0.3)'
                          }}
                          animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.6, 0.3, 0.6]
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                        />
                      )}

                      {/* Dot */}
                      <motion.div
                        className="rounded-full bg-[#1D857E] cursor-default relative"
                        style={{
                          width: '8px',
                          height: '8px',
                          boxShadow: '0 0 0 4px rgba(255, 255, 255, 1), 0 2px 8px rgba(29, 133, 126, 0.25)'
                        }}
                        whileHover={{
                          boxShadow: '0 0 0 4px rgba(255, 255, 255, 1), 0 0 16px rgba(29, 133, 126, 0.5), 0 4px 12px rgba(29, 133, 126, 0.4)'
                        }}
                        animate={company.isCurrent ? {
                          boxShadow: [
                            '0 0 0 4px rgba(255, 255, 255, 1), 0 2px 8px rgba(29, 133, 126, 0.25)',
                            '0 0 0 4px rgba(255, 255, 255, 1), 0 0 20px rgba(29, 133, 126, 0.6), 0 2px 12px rgba(29, 133, 126, 0.4)',
                            '0 0 0 4px rgba(255, 255, 255, 1), 0 2px 8px rgba(29, 133, 126, 0.25)'
                          ]
                        } : {}}
                        transition={company.isCurrent ? {
                          duration: 2.5,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        } : { duration: 0.2 }}
                      />
                    </motion.div>

                    {/* Right Side Content */}
                    {!isLeft ? (
                      <motion.div
                        className="flex-1 pl-8 text-left space-y-1"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div
                          className="cursor-default"
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: company.isCurrent ? '18px' : '17px',
                            fontWeight: company.isCurrent ? 600 : 500,
                            letterSpacing: '0.01em',
                            color: '#111827',
                            opacity: company.isCurrent ? 0.95 : 0.75
                          }}
                        >
                          {company.name}
                        </div>

                        <div
                          className="caption"
                          style={{
                            fontFamily: 'Work Sans, sans-serif',
                            fontSize: '14px',
                            fontWeight: 400,
                            letterSpacing: '0.02em',
                            color: '#6B7280',
                            opacity: 0.8
                          }}
                        >
                          {company.year}
                        </div>
                      </motion.div>
                    ) : (
                      <div className="flex-1 flex justify-end pl-8">
                        {/* Current Badge for KPMG - positioned on the right */}
                        {company.isCurrent && (
                          <motion.div
                            className="flex-shrink-0"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <Tag variant="badge">Current</Tag>
                          </motion.div>
                        )}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* DESKTOP: Horizontal Timeline Container */}
          <div className="hidden md:block relative" style={{ paddingTop: '0px', paddingBottom: '80px' }}>
            {/* Horizontal Timeline Line */}
            <motion.div
              className="absolute left-0 right-0 h-[0.75px]"
              aria-hidden="true"
              style={{
                background: 'rgba(29, 133, 126, 0.2)',
                top: '0px',
                transformOrigin: 'left'
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Horizontal Timeline Nodes */}
            <div className="relative flex justify-between">
              {companies.map((company, index) => {
                return (
                  <motion.div
                    key={company.name}
                    className="relative flex flex-col items-center"
                    style={{ flex: '1 1 0' }}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.08,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    {/* Center Dot - overlapping the line */}
                    <motion.div
                      className="relative z-10 flex-shrink-0"
                      style={{
                        marginTop: '-4px', // Half of dot height (8px) to center on line
                        marginBottom: '16px'
                      }}
                      whileHover={{
                        scale: 1.15
                      }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {/* Active Ring (only for current) */}
                      {company.isCurrent && (
                        <motion.div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                          style={{
                            width: '20px',
                            height: '20px',
                            border: '1.5px solid rgba(29, 133, 126, 0.3)'
                          }}
                          animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.6, 0.3, 0.6]
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                        />
                      )}

                      {/* Dot */}
                      <motion.div
                        className="rounded-full bg-[#1D857E] cursor-default relative"
                        style={{
                          width: '8px',
                          height: '8px',
                          boxShadow: '0 0 0 4px rgba(255, 255, 255, 1), 0 2px 8px rgba(29, 133, 126, 0.25)'
                        }}
                        whileHover={{
                          boxShadow: '0 0 0 4px rgba(255, 255, 255, 1), 0 0 16px rgba(29, 133, 126, 0.5), 0 4px 12px rgba(29, 133, 126, 0.4)'
                        }}
                        animate={company.isCurrent ? {
                          boxShadow: [
                            '0 0 0 4px rgba(255, 255, 255, 1), 0 2px 8px rgba(29, 133, 126, 0.25)',
                            '0 0 0 4px rgba(255, 255, 255, 1), 0 0 20px rgba(29, 133, 126, 0.6), 0 2px 12px rgba(29, 133, 126, 0.4)',
                            '0 0 0 4px rgba(255, 255, 255, 1), 0 2px 8px rgba(29, 133, 126, 0.25)'
                          ]
                        } : {}}
                        transition={company.isCurrent ? {
                          duration: 2.5,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        } : { duration: 0.2 }}
                      />
                    </motion.div>

                    {/* Content - positioned below the dots */}
                    <motion.div
                      className="text-center space-y-1"
                      whileHover={{ y: 2 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div
                        className="cursor-default"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: company.isCurrent ? '18px' : '17px',
                          fontWeight: company.isCurrent ? 600 : 500,
                          letterSpacing: '0.01em',
                          color: '#111827',
                          opacity: company.isCurrent ? 0.95 : 0.75,
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {company.name}
                      </div>

                      <div
                        className="caption"
                        style={{
                          fontFamily: 'Work Sans, sans-serif',
                          fontSize: '14px',
                          fontWeight: 400,
                          letterSpacing: '0.02em',
                          color: '#6B7280',
                          opacity: 0.8
                        }}
                      >
                        {company.year}
                      </div>

                      {/* Current Badge */}
                      {company.isCurrent && (
                        <motion.div
                          className="mt-2"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <Tag variant="badge">Current</Tag>
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}