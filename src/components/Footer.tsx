import { FadeIn } from './animations/FadeIn';

const buildDate = new Date(__BUILD_DATE__).toLocaleDateString('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
});

export function Footer() {
  return (
    <footer className="mt-20 pt-8 text-center border-t border-gray-200 transition-colors">
      <FadeIn delay={0.1}>
        <p className="caption" style={{ fontSize: '13px', color: 'var(--color-muted-foreground)', fontFamily: 'Work Sans, sans-serif' }}>
          © {new Date().getFullYear()} Sandeep S Kumbar. All rights reserved.
        </p>
        {/* System status: real build metadata injected at compile time */}
        <p
          className="mt-3"
          data-inspect="Real build metadata, injected at compile time — not vibes."
          data-inspect-token="vite define · __GIT_HASH__"
          style={{
            fontSize: '11px',
            letterSpacing: '0.02em',
            color: 'rgba(17, 24, 39, 0.35)',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace'
          }}
        >
          system v{__APP_VERSION__} · build {__GIT_HASH__} · {__ASSET_COUNT__} assets · deployed {buildDate}
        </p>
      </FadeIn>
    </footer>
  );
}
