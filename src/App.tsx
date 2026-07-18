import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

// Homepage stays eager for instant first paint
import { HomePage } from "./pages/HomePage";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { SkipLink } from "./components/SkipLink";
import { BackToTop } from "./components/BackToTop";
import { GuidedTour } from "./components/GuidedTour";

// All other routes are code-split. Vercel serves hashed chunks as static
// files ahead of the SPA rewrite, so lazy chunks resolve correctly.
const ContactPage = lazy(() => import("./pages/ContactPage").then(m => ({ default: m.ContactPage })));
const WorkPage = lazy(() => import("./pages/WorkPage").then(m => ({ default: m.WorkPage })));
const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage").then(m => ({ default: m.CaseStudyPage })));
const DiscussionForumCaseStudy = lazy(() => import("./pages/DiscussionForumCaseStudy").then(m => ({ default: m.DiscussionForumCaseStudy })));
const RecyclifyCaseStudy = lazy(() => import("./pages/RecyclifyCaseStudy").then(m => ({ default: m.RecyclifyCaseStudy })));
const VisualDesignCaseStudy = lazy(() => import("./pages/VisualDesignCaseStudy").then(m => ({ default: m.VisualDesignCaseStudy })));
const ConfidentialCaseStudy = lazy(() => import("./pages/ConfidentialCaseStudy").then(m => ({ default: m.ConfidentialCaseStudy })));
const ConfidentialCaseStudy2 = lazy(() => import("./pages/ConfidentialCaseStudy2").then(m => ({ default: m.ConfidentialCaseStudy2 })));
const ConfidentialCaseStudy3 = lazy(() => import("./pages/ConfidentialCaseStudy3").then(m => ({ default: m.ConfidentialCaseStudy3 })));
const StyleGuidePage = lazy(() => import("./pages/StyleGuidePage"));
const DesignSystemPage = lazy(() => import("./pages/DesignSystemPage").then(m => ({ default: m.DesignSystemPage })));
const ClaudeDesignSystemCaseStudy = lazy(() => import("./pages/ClaudeDesignSystemCaseStudy").then(m => ({ default: m.ClaudeDesignSystemCaseStudy })));
const ExperimentsPage = lazy(() => import("./pages/ExperimentsPage").then(m => ({ default: m.ExperimentsPage })));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then(m => ({ default: m.NotFoundPage })));

export default function App() {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  return (
    <ErrorBoundary>
      <SkipLink />
      <BackToTop />
      <GuidedTour />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo({ top: 0, behavior: 'instant' })}
      >
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.18, ease: "easeOut" }}
        >
          <Suspense fallback={<div className="min-h-screen bg-white" />}>
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/work/discussion-forum" element={<DiscussionForumCaseStudy />} />
              <Route path="/work/recyclify" element={<RecyclifyCaseStudy />} />
              <Route path="/work/visual-design" element={<VisualDesignCaseStudy />} />
              <Route path="/work/confidential" element={<ConfidentialCaseStudy />} />
              <Route path="/work/confidential-case-study-2" element={<ConfidentialCaseStudy2 />} />
              <Route path="/work/confidential-case-study-3" element={<ConfidentialCaseStudy3 />} />
              <Route path="/work/claude-design-system" element={<ClaudeDesignSystemCaseStudy />} />
              <Route path="/work/:id" element={<CaseStudyPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/style-guide" element={<StyleGuidePage />} />
              <Route path="/design-system" element={<DesignSystemPage />} />
              <Route path="/experiments" element={<ExperimentsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </ErrorBoundary>
  );
}
