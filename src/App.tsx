import { Routes, Route } from "react-router-dom";
// import { lazy, Suspense } from "react";

// Eager load homepage
import { HomePage } from "./pages/HomePage";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/sonner";
import { SkipLink } from "./components/SkipLink";

// Eager load all pages to fix GitHub Pages navigation crash (React #306)
import { ContactPage } from "./pages/ContactPage";
import { WorkPage } from "./pages/WorkPage";
import { CaseStudyPage } from "./pages/CaseStudyPage";
import { DiscussionForumCaseStudy } from "./pages/DiscussionForumCaseStudy";
import { RecyclifyCaseStudy } from "./pages/RecyclifyCaseStudy";
import { VisualDesignCaseStudy } from "./pages/VisualDesignCaseStudy";
import { ConfidentialCaseStudy } from "./pages/ConfidentialCaseStudy";
import { ConfidentialCaseStudy2 } from "./pages/ConfidentialCaseStudy2";
import { ConfidentialCaseStudy3 } from "./pages/ConfidentialCaseStudy3";
import StyleGuidePage from "./pages/StyleGuidePage";

export default function App() {
  return (
    <ErrorBoundary>
      <SkipLink />
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
    </ErrorBoundary>
  );
}
