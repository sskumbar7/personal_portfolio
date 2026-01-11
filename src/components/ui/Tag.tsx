/**
 * Consolidated Tag Component
 * 
 * Variants:
 * - code: Monospace code-style tags (13px JetBrains Mono)
 * - skill: Small skill tags (11px monospace)
 * - badge: Current company badge with pulsing dot
 * - section-label: Uppercase section labels (14px Inter)
 * 
 * All tags follow the design system:
 * - Consistent border colors: rgba(29, 133, 126, 0.4)
 * - Primary color: #1D857E
 * - Border radius: 4px (rounded) or full
 */

export type TagVariant = 'code' | 'skill' | 'badge' | 'section-label';

export interface TagProps {
  variant?: TagVariant;
  children: React.ReactNode;
  className?: string;
  isClient?: boolean; // For skill tags - changes color to gray
}

export function Tag({ 
  variant = 'code', 
  children, 
  className = '',
  isClient = false 
}: TagProps) {
  
  // Code tag - Main hero tags (Agentic AI, etc.)
  if (variant === 'code') {
    return (
      <span
        className={`px-2.5 py-1 rounded border bg-transparent transition-all inline-block ${className}`}
        style={{
          fontSize: '13px',
          fontWeight: 500,
          fontFamily: 'JetBrains Mono, Fira Code, IBM Plex Mono, monospace',
          letterSpacing: '0.025em',
          lineHeight: '1.2',
          borderColor: 'rgba(29, 133, 126, 0.4)',
          color: '#1D857E',
        }}
      >
        {children}
      </span>
    );
  }

  // Skill tag - Small tags on cards
  if (variant === 'skill') {
    const textColor = isClient ? 'rgba(26, 26, 26, 0.7)' : 'rgba(29, 133, 126, 0.9)';
    const bgColor = isClient ? 'rgba(26, 26, 26, 0.04)' : 'rgba(29, 133, 126, 0.06)';
    const borderColor = isClient ? 'rgba(26, 26, 26, 0.12)' : 'rgba(29, 133, 126, 0.25)';

    return (
      <span
        className={`px-2 py-0.5 rounded inline-block ${className}`}
        style={{
          fontSize: '11px',
          fontWeight: 500,
          fontFamily: 'JetBrains Mono, monospace',
          letterSpacing: '0.02em',
          lineHeight: '1.2',
          color: textColor,
          backgroundColor: bgColor,
          border: '1px solid',
          borderColor: borderColor,
        }}
      >
        {children}
      </span>
    );
  }

  // Badge - Current company indicator
  if (variant === 'badge') {
    return (
      <span
        className={`px-3 py-1 rounded-full inline-flex items-center gap-1.5 ${className}`}
        style={{
          backgroundColor: 'rgba(29, 133, 126, 0.08)',
          border: '1px solid rgba(29, 133, 126, 0.25)',
          fontSize: '12px',
          fontWeight: 500,
          color: '#1D857E',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: '#1D857E',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }}
        />
        {children}
      </span>
    );
  }

  // Section label - Uppercase labels
  if (variant === 'section-label') {
    return (
      <span
        className={`section-label inline-block ${className}`}
        style={{
          fontSize: '14px',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#1D857E',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {children}
      </span>
    );
  }

  return null;
}
