import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Tag } from './Tag';
import { motion as motionTokens, easing } from '../../utils/motion';

/**
 * Consolidated Case Study Card Component
 * 
 * Consistent card design across Homepage and Work page:
 * - 16px border radius (rounded-2xl)
 * - Soft border: #DDE9E7
 * - Shadow: 0 4px 20px rgba(0, 0, 0, 0.04)
 * - Hover: translateY(-2px) + enhanced shadow
 * - Transition: 200ms ease
 * 
 * Supports both vertical and horizontal layouts
 */

export interface CaseStudyCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  href: string;
  isClient?: boolean;
  layout?: 'vertical' | 'horizontal';
  gradient?: string;
  artifactHint?: React.ReactNode;
  className?: string;
}

export function CaseStudyCard({
  title,
  description,
  tags,
  image,
  href,
  isClient = false,
  layout = 'vertical',
  gradient,
  artifactHint,
  className = '',
}: CaseStudyCardProps) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Vertical card layout (Homepage)
  if (layout === 'vertical') {
    return (
      <Link to={href} className="block group">
        <motion.div
          className={`bg-white rounded-2xl border overflow-hidden h-full flex flex-col ${className}`}
          style={{
            borderColor: '#DDE9E7',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
          }}
          whileHover={{
            y: prefersReducedMotion ? 0 : -2,
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
          }}
          transition={{ duration: motionTokens.fast.duration, ease: easing.standard }}
        >
          {/* Image or gradient header */}
          <div className="relative aspect-[16/10] overflow-hidden">
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : gradient ? (
              <div
                className="w-full h-full relative"
                style={{ background: gradient }}
              >
                {artifactHint}
              </div>
            ) : null}
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="mb-2 text-gray-900 group-hover:text-[#1D857E] transition-colors">
              {title}
            </h3>
            <p
              className="mb-4 flex-1"
              style={{
                fontSize: '15px',
                lineHeight: '1.5',
                color: 'rgba(17, 24, 39, 0.7)',
              }}
            >
              {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag, index) => (
                <Tag key={index} variant="skill" isClient={isClient}>
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  // Horizontal card layout (Work page - optional future use)
  return (
    <Link to={href} className="block group">
      <motion.div
        className={`bg-white rounded-2xl border overflow-hidden flex flex-col md:flex-row ${className}`}
        style={{
          borderColor: '#DDE9E7',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
        }}
        whileHover={{
          y: prefersReducedMotion ? 0 : -2,
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
        }}
        transition={{ duration: motionTokens.fast.duration, ease: easing.standard }}
      >
        {/* Image */}
        {image && (
          <div className="relative w-full md:w-1/3 aspect-[16/10] md:aspect-auto overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="mb-2 text-gray-900 group-hover:text-[#1D857E] transition-colors">
            {title}
          </h3>
          <p
            className="mb-4 flex-1"
            style={{
              fontSize: '15px',
              lineHeight: '1.5',
              color: 'rgba(17, 24, 39, 0.7)',
            }}
          >
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, index) => (
              <Tag key={index} variant="skill" isClient={isClient}>
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}