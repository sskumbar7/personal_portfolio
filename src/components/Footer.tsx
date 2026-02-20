import { FadeIn } from './animations/FadeIn';

export function Footer() {
  return (
    <footer className="mt-20 pt-8 text-center border-t border-gray-200 transition-colors">
      <FadeIn delay={0.1}>
        <p className="caption" style={{ fontSize: '13px', color: 'var(--color-muted-foreground)', fontFamily: 'Work Sans, sans-serif' }}>
          © 2025 Sandeep S Kumbar. All rights reserved.
        </p>
      </FadeIn>
    </footer>
  );
}
