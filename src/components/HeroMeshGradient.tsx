import { useReducedMotion } from 'motion/react';

/**
 * HeroMeshGradient — a slow, dreamlike animated mesh of teal/mint blobs
 * that drift behind the Hero content.
 *
 * • Pure CSS keyframe animations — zero JS overhead after mount
 * • Respects prefers-reduced-motion (falls back to static gradient)
 * • Uses very low opacity to stay behind text without fighting it
 * • Three overlapping circles with offset animation timings create
 *   a constantly-shifting, organic feel
 */
export function HeroMeshGradient() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    // Static fallback: gentle gradient, no animation
    return (
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.12,
          background: 'radial-gradient(ellipse at 30% 50%, #1D857E 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        // Fade to white at the top so the gradient blends with the nav
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 100%)',
      }}
    >
      {/* Blob 1 — large, slow drift top-right to bottom-left */}
      <div
        style={{
          position: 'absolute',
          width: '65%',
          height: '75%',
          top: '-10%',
          right: '-5%',
          borderRadius: '40% 60% 70% 30% / 60% 30% 70% 40%',
          background: 'radial-gradient(ellipse at center, rgba(29, 133, 126, 0.16) 0%, rgba(29, 133, 126, 0.07) 45%, rgba(29, 133, 126, 0.02) 65%, transparent 80%)',
          animation: 'meshBlob1 8s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Blob 2 — medium, opposite drift path */}
      <div
        style={{
          position: 'absolute',
          width: '55%',
          height: '65%',
          bottom: '-5%',
          left: '-5%',
          borderRadius: '60% 40% 30% 70% / 40% 60% 40% 60%',
          background: 'radial-gradient(ellipse at center, rgba(59, 197, 161, 0.14) 0%, rgba(59, 197, 161, 0.06) 45%, rgba(59, 197, 161, 0.015) 65%, transparent 80%)',
          animation: 'meshBlob2 10s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Blob 3 — small accent, faster cycle */}
      <div
        style={{
          position: 'absolute',
          width: '40%',
          height: '45%',
          top: '25%',
          left: '20%',
          borderRadius: '50% 50% 40% 60% / 50% 40% 60% 50%',
          background: 'radial-gradient(ellipse at center, rgba(29, 133, 126, 0.12) 0%, rgba(78, 205, 196, 0.05) 45%, rgba(78, 205, 196, 0.01) 65%, transparent 80%)',
          animation: 'meshBlob3 7s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* CSS Keyframes injected via style tag */}
      <style>{`
        @keyframes meshBlob1 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1) rotate(0deg);
          }
          33% {
            transform: translate(-3%, 5%) scale(1.05) rotate(2deg);
          }
          66% {
            transform: translate(2%, -3%) scale(0.97) rotate(-1deg);
          }
        }

        @keyframes meshBlob2 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1) rotate(0deg);
          }
          33% {
            transform: translate(4%, -4%) scale(1.03) rotate(-2deg);
          }
          66% {
            transform: translate(-2%, 3%) scale(0.98) rotate(1.5deg);
          }
        }

        @keyframes meshBlob3 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1) rotate(0deg);
          }
          25% {
            transform: translate(5%, 3%) scale(1.06) rotate(3deg);
          }
          50% {
            transform: translate(-3%, -2%) scale(0.96) rotate(-2deg);
          }
          75% {
            transform: translate(2%, -4%) scale(1.02) rotate(1deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          @keyframes meshBlob1 { 0%, 100% { transform: none; } }
          @keyframes meshBlob2 { 0%, 100% { transform: none; } }
          @keyframes meshBlob3 { 0%, 100% { transform: none; } }
        }
      `}</style>
    </div>
  );
}
