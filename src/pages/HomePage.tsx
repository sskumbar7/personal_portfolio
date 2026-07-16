import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { SkillsSnapshot } from '../components/SkillsSnapshot';
import { Experience } from '../components/Experience';
import { CaseStudies } from '../components/CaseStudies';
import { AIWorkflowTeaser } from '../components/AIWorkflowTeaser';
import { Experiments } from '../components/Experiments';
import { BottomCTA } from '../components/BottomCTA';
import { SEO, seoConfig } from '../components/SEO';
import { InspectMode } from '../components/InspectMode';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoConfig.home} />
      <Navigation />
      <InspectMode />
      <main id="main-content">
        <Hero />
        <About />
        <SkillsSnapshot />
        <Experience />
        <CaseStudies />
        <AIWorkflowTeaser />
        <Experiments />
        <BottomCTA />
      </main>
    </div>
  );
}