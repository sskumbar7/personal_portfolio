/**
 * Layered shadow tokens.
 *
 * Pairs a tight ambient shadow with a softer, more diffuse one so
 * elevated surfaces (cards, image frames) read as having real depth
 * instead of a single flat blur.
 */
export const shadows = {
  card: '0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.05)',
  cardHover: '0 2px 4px rgba(0, 0, 0, 0.06), 0 16px 32px rgba(0, 0, 0, 0.08)',
} as const;
