import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Eager load HomePage for instant First Contentful Paint
import { HomePage } from './pages/HomePage';

// Lazy load other pages for better initial bundle size
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const WorkPage = lazy(() => import('./pages/WorkPage').then(m => ({ default: m.WorkPage })));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage').then(m => ({ default: m.CaseStudyPage })));
const DiscussionForumCaseStudy = lazy(() => import('./pages/DiscussionForumCaseStudy').then(m => ({ default: m.DiscussionForumCaseStudy })));
const RecyclifyCaseStudy = lazy(() => import('./pages/RecyclifyCaseStudy').then(m => ({ default: m.RecyclifyCaseStudy })));
const VisualDesignCaseStudy = lazy(() => import('./pages/VisualDesignCaseStudy').then(m => ({ default: m.VisualDesignCaseStudy })));
const ConfidentialCaseStudy = lazy(() => import('./pages/ConfidentialCaseStudy').then(m => ({ default: m.ConfidentialCaseStudy })));
const ConfidentialCaseStudy2 = lazy(() => import('./pages/ConfidentialCaseStudy2').then(m => ({ default: m.ConfidentialCaseStudy2 })));
const ConfidentialCaseStudy3 = lazy(() => import('./pages/ConfidentialCaseStudy3').then(m => ({ default: m.ConfidentialCaseStudy3 })));
const StyleGuidePage = lazy(() => import('./pages/StyleGuidePage'));

// Loading component
const PageLoader = () => (
  <div 
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'white'
    }}
  >
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid rgba(29, 133, 126, 0.1)',
      borderTop: '3px solid #1D857E',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite'
    }} />
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export default function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:id" element={<CaseStudyPage />} />
          <Route path="/work/discussion-forum" element={<DiscussionForumCaseStudy />} />
          <Route path="/work/recyclify" element={<RecyclifyCaseStudy />} />
          <Route path="/work/visual-design" element={<VisualDesignCaseStudy />} />
          <Route path="/work/confidential" element={<ConfidentialCaseStudy />} />
          <Route path="/work/confidential-case-study-2" element={<ConfidentialCaseStudy2 />} />
          <Route path="/work/confidential-case-study-3" element={<ConfidentialCaseStudy3 />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/style-guide" element={<StyleGuidePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}