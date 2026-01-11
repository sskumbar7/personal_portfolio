import { Tag } from './Tag';

/**
 * Consolidated Section Header Component
 * 
 * Consistent section header design across all pages:
 * - Section label (uppercase, 14px, teal)
 * - Main heading (H2, 24px desktop / 22px mobile)
 * - Optional description text
 * 
 * Follows editorial spacing scale
 */

export interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : '';
  const maxWidth = align === 'center' ? 'max-w-3xl' : '';

  return (
    <div className={`${alignClass} ${className}`}>
      {label && (
        <div className={`mb-4 ${align === 'center' ? 'flex justify-center' : ''}`}>
          <Tag variant="section-label">{label}</Tag>
        </div>
      )}
      
      <h2 className={`mb-3 ${maxWidth}`}>
        {title}
      </h2>
      
      {description && (
        <p
          className={`${maxWidth}`}
          style={{
            fontSize: '17px',
            lineHeight: '1.5',
            color: 'rgba(17, 24, 39, 0.7)',
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
