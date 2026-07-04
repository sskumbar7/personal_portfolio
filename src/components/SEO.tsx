import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
}

export function SEO({
  title = 'Sandeep S Kumbar - Lead Experience Designer',
  description = 'Senior UX Designer specializing in design systems, AI-assisted workflows, and strategic product design. Portfolio featuring enterprise design systems, interaction design, and UX research.',
  keywords = 'UX Designer, Design Systems, Product Designer, UI/UX, Experience Design, Interaction Design, AI Design, Agentic AI, User Research, KPMG, Google EPAM',
  image = '/og-image.jpg',
  type = 'website'
}: SEOProps) {
  const location = useLocation();
  const url = `https://sandeepkumbar.com${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Sandeep S Kumbar');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph meta tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:site_name', 'Sandeep S Kumbar Portfolio', true);

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Additional SEO tags
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('googlebot', 'index, follow');
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

  }, [title, description, keywords, image, type, url]);

  const jsonLd = type === 'website' ? structuredDataConfig.website : structuredDataConfig.person;

  return (
    <script type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </script>
  );
}

// Predefined SEO configurations for different pages
export const seoConfig = {
  home: {
    title: 'Sandeep S Kumbar - Lead Experience Designer | UX Portfolio',
    description: 'Senior UX Designer at KPMG specializing in design systems, AI-assisted workflows, and strategic product design. View my portfolio of enterprise work and personal projects.',
    keywords: 'UX Designer Portfolio, Design Systems Expert, Product Designer, Enterprise UX, AI Design, Sandeep Kumbar'
  },
  work: {
    title: 'Selected Work - Sandeep S Kumbar | UX Case Studies',
    description: 'Browse my collection of UX design case studies including design systems, interaction design, and confidential enterprise projects.',
    keywords: 'UX Case Studies, Design Portfolio, Design Systems, Interaction Design, UX Research'
  },
  contact: {
    title: 'Contact - Sandeep S Kumbar | Get in Touch',
    description: 'Get in touch for UX design collaboration, design systems consulting, or portfolio review. Available for select freelance projects.',
    keywords: 'Contact UX Designer, Hire Product Designer, Design Consultation, Freelance UX Designer'
  },
  discussionForum: {
    title: 'Discussion Forum Design - Case Study | Sandeep S Kumbar',
    description: 'UX case study: Designing a mobile-first discussion forum with focus on community engagement and content discovery.',
    keywords: 'Discussion Forum Design, Mobile UX, Community Platform, UX Case Study'
  },
  recyclify: {
    title: 'Recyclify - Sustainable Marketplace | UX Case Study',
    description: 'Designing a circular economy marketplace connecting buyers and sellers for sustainable product exchange.',
    keywords: 'Marketplace Design, Sustainable UX, E-commerce Platform, User Journey Mapping'
  },
  visualDesign: {
    title: 'Visual Design Collection | Sandeep S Kumbar',
    description: 'A curated collection of visual design explorations, UI components, and design system artifacts.',
    keywords: 'Visual Design, UI Design, Design System Components, Interface Design'
  },
  confidential: {
    title: 'Research-Driven Website Revamp - Client Case Study',
    description: 'Enterprise UX project focusing on research-driven website redesign and strategic user experience improvements.',
    keywords: 'Enterprise UX, Website Redesign, UX Research, Client Work'
  }
};

export const structuredDataConfig = {
  person: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sandeep S Kumbar',
    url: 'https://sandeepkumbar.com',
    image: 'https://sandeepkumbar.com/assets/portrait-placeholder.jpg', // Replace with actual URL
    sameAs: [
      'https://www.linkedin.com/in/sskumbar7',
      'https://github.com/sskumbar7'
    ],
    jobTitle: 'Lead Experience Designer',
    worksFor: {
      '@type': 'Organization',
      name: 'KPMG'
    },
    description: 'Senior UX Designer specializing in design systems, AI-assisted workflows, and strategic product design.'
  },
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sandeep S Kumbar Portfolio',
    url: 'https://sandeepkumbar.com',
    author: {
      '@type': 'Person',
      name: 'Sandeep S Kumbar'
    }
  }
};
