import { next } from '@vercel/edge';

// Social media crawler user agents
const CRAWLER_REGEX = /WhatsApp|facebookexternalhit|Facebot|Twitterbot|LinkedInBot|Slackbot|TelegramBot|Discordbot|Pinterest|Googlebot|bingbot|Applebot/i;

// Page-specific OG metadata
const PAGE_META: Record<string, { title: string; description: string; image: string }> = {
  '/work/claude-design-system': {
    title: 'I Let Claude Build a Design System. I Just Directed It. | Sandeep S Kumbar',
    description: 'A weekend experiment in treating AI as a design companion. Directing Claude to build a token-driven UI system for Studybud.',
    image: '/claude-cover.png'
  },
  '/work/discussion-forum': {
    title: 'Discussion Forum Design - Case Study | Sandeep S Kumbar',
    description: 'UX case study: Designing a mobile-first discussion forum with focus on community engagement and content discovery.',
    image: '/discussion-cover.png'
  },
  '/work/recyclify': {
    title: 'Recyclify - Sustainable Marketplace | UX Case Study',
    description: 'Designing a circular economy marketplace connecting buyers and sellers for sustainable product exchange.',
    image: '/recyclify-cover.png'
  },
  '/work/visual-design': {
    title: 'Visual Design Collection | Sandeep S Kumbar',
    description: 'A curated collection of visual design explorations, UI components, and design system artifacts.',
    image: '/visual-design-cover.png'
  },
  '/work': {
    title: 'Selected Work - Sandeep S Kumbar | UX Case Studies',
    description: 'Browse my collection of UX design case studies including design systems, interaction design, and confidential enterprise projects.',
    image: '/og-image.jpg'
  },
  '/contact': {
    title: 'Contact - Sandeep S Kumbar | Get in Touch',
    description: 'Get in touch for UX design collaboration, design systems consulting, or portfolio review.',
    image: '/og-image.jpg'
  }
};

const DEFAULT_META = {
  title: 'Sandeep S Kumbar - Lead Experience Designer | UX Portfolio',
  description: 'Senior UX Designer specializing in design systems, AI-assisted workflows, and strategic product design.',
  image: '/og-image.jpg'
};

const BASE_URL = 'https://www.sandeepkumbar.com';

export default function middleware(request: Request) {
  const userAgent = request.headers.get('user-agent') || '';

  // Only intercept social media crawlers
  if (!CRAWLER_REGEX.test(userAgent)) {
    return next();
  }

  const url = new URL(request.url);
  const pathname = url.pathname.replace(/\/$/, '') || '/'; // Normalize trailing slash
  const meta = PAGE_META[pathname] || DEFAULT_META;

  const absoluteImage = meta.image.startsWith('http')
    ? meta.image
    : `${BASE_URL}${meta.image}`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${meta.title}</title>

  <!-- Primary Meta Tags -->
  <meta name="title" content="${meta.title}" />
  <meta name="description" content="${meta.description}" />

  <!-- Open Graph / Facebook / WhatsApp -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${BASE_URL}${pathname}" />
  <meta property="og:title" content="${meta.title}" />
  <meta property="og:description" content="${meta.description}" />
  <meta property="og:image" content="${absoluteImage}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="Sandeep S Kumbar Portfolio" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="${BASE_URL}${pathname}" />
  <meta name="twitter:title" content="${meta.title}" />
  <meta name="twitter:description" content="${meta.description}" />
  <meta name="twitter:image" content="${absoluteImage}" />

  <!-- Redirect real users to the SPA -->
  <meta http-equiv="refresh" content="0;url=${BASE_URL}${pathname}" />
</head>
<body>
  <p>Redirecting to <a href="${BASE_URL}${pathname}">${meta.title}</a></p>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

export const config = {
  matcher: ['/', '/work', '/work/:path*', '/contact'],
};
