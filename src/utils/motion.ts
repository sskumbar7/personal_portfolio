/**
 * Motion Design System
 * 
 * Standardized animation durations and easing functions
 * for consistent micro-interactions across the portfolio.
 * 
 * Principles:
 * - Fast feedback (150ms) for immediate interactions
 * - Medium transitions (250ms) for state changes
 * - Slow emphasis (400ms) for content reveals
 * - Respect user's prefers-reduced-motion preference
 */

/**
 * Motion duration tokens (in seconds)
 */
export const motion = {
  /**
   * Fast: 150ms
   * Use for: Hover states, focus indicators, button feedback
   * Feel: Instant, responsive
   */
  fast: {
    duration: 0.15,
    delay: 0,
  },

  /**
   * Medium: 250ms
   * Use for: State changes, toggles, micro-interactions
   * Feel: Smooth, comfortable
   */
  medium: {
    duration: 0.25,
    delay: 0,
  },

  /**
   * Slow: 400ms
   * Use for: Content reveals, emphasis, scroll-triggered animations
   * Feel: Deliberate, noticeable
   */
  slow: {
    duration: 0.4,
    delay: 0,
  },

  /**
   * Extended: 600ms
   * Use for: Complex animations, timeline drawing, extended transitions
   * Feel: Dramatic, emphasized
   */
  extended: {
    duration: 0.6,
    delay: 0,
  },

  /**
   * Stagger increments
   * Use for: Sequential animations in lists
   */
  stagger: {
    fast: 0.03,   // 30ms - tight spacing
    medium: 0.05, // 50ms - recommended default
    slow: 0.08,   // 80ms - loose spacing
  },
} as const;

/**
 * Easing curve tokens
 */
export const easing = {
  /**
   * Standard: Natural deceleration
   * Use for: Most animations, entering, revealing
   * Cubic bezier: [0.0, 0.0, 0.2, 1.0]
   */
  standard: 'easeOut',

  /**
   * Spring: Snappy with slight overshoot
   * Use for: Exits, dismissals, emphasis
   * Cubic bezier: [0.16, 1, 0.3, 1]
   */
  spring: [0.16, 1, 0.3, 1] as const,

  /**
   * Linear: Constant speed
   * Use for: Progress indicators, infinite loops
   */
  linear: 'linear',
} as const;

/**
 * Common animation presets
 */
export const presets = {
  /**
   * Button hover (primary/secondary)
   */
  buttonHover: {
    y: -2,
    transition: {
      duration: motion.fast.duration,
      ease: easing.standard,
    },
  },

  /**
   * Card hover
   */
  cardHover: {
    y: -2,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
    transition: {
      duration: motion.fast.duration,
      ease: easing.standard,
    },
  },

  /**
   * Fade in (scroll-triggered)
   */
  fadeIn: {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: motion.medium.duration,
      ease: easing.standard,
    },
  },

  /**
   * Fade in with delay (scroll-triggered)
   */
  fadeInDelayed: (delay: number = 0.1) => ({
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: motion.medium.duration,
      delay,
      ease: easing.standard,
    },
  }),

  /**
   * Stagger children (for lists)
   */
  staggerChildren: (staggerAmount: number = motion.stagger.medium) => ({
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: (index: number) => ({
      duration: motion.medium.duration,
      delay: index * staggerAmount,
      ease: easing.standard,
    }),
  }),

  /**
   * Scale line drawing (timeline, progress)
   */
  lineDrawing: (axis: 'scaleX' | 'scaleY' = 'scaleX') => ({
    initial: { [axis]: 0 },
    animate: { [axis]: 1 },
    transition: {
      duration: motion.extended.duration,
      ease: easing.spring,
    },
  }),

  /**
   * Tap feedback
   */
  tap: {
    scale: 0.98,
    transition: {
      duration: motion.fast.duration,
      ease: easing.standard,
    },
  },
} as const;

/**
 * Utility to get reduced motion settings
 * Returns 0 duration if user prefers reduced motion
 */
export function getMotionDuration(
  duration: number,
  prefersReducedMotion: boolean = false
): number {
  return prefersReducedMotion ? 0 : duration;
}

/**
 * Utility to create viewport intersection config
 */
export function createViewportConfig(margin: string = '-50px') {
  return {
    once: true,
    margin,
  };
}

/**
 * Type exports for Motion components
 */
export type MotionSpeed = keyof typeof motion;
export type EasingType = keyof typeof easing;
export type PresetType = keyof typeof presets;
