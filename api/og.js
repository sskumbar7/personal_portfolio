export const config = {
  runtime: 'edge',
};

const PAGE_META = {
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
  },
  '/': {
    title: 'Sandeep S Kumbar - Lead Experience Designer | UX Portfolio',
    description: 'Senior UX Designer specializing in design systems, AI-assisted workflows, and strategic product design.',
    image: '/og-image.jpg'
  }
};

const BASE_URL = 'https://www.sandeepkumbar.com';

export default function handler(request) {
  const url = new URL(request.url);
  const path = url.searchParams.get('path') || '/';
  const normalizedPath = path.replace(/\/$/, '') || '/';

  const meta = PAGE_META[normalizedPath] || PAGE_META['/'];
  const absoluteImage = `${BASE_URL}${meta.image}`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${meta.title}</title>
  <meta name="description" content="${meta.description}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${BASE_URL}${normalizedPath}" />
  <meta property="og:title" content="${meta.title}" />
  <meta property="og:description" content="${meta.description}" />
  <meta property="og:image" content="${absoluteImage}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="Sandeep S Kumbar Portfolio" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${meta.title}" />
  <meta name="twitter:description" content="${meta.description}" />
  <meta name="twitter:image" content="${absoluteImage}" />
</head>
<body></body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
