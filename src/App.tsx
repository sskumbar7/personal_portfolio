import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Eager load homepage
import { HomePage } from "./pages/HomePage";

// Lazy pages
const ContactPage = lazy(() => import("./pages/ContactPage"));
const WorkPage = lazy(() => import("./pages/WorkPage"));
const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));
const DiscussionForumCaseStudy = lazy(() => import("./pages/DiscussionForumCaseStudy"));
const RecyclifyCaseStudy = lazy(() => import("./pages/RecyclifyCaseStudy"));
const VisualDesignCaseStudy = lazy(() => import("./pages/VisualDesignCaseStudy"));
const ConfidentialCaseStudy = lazy(() => import("./pages/ConfidentialCaseStudy"));
const ConfidentialCaseStudy2 = lazy(() => import("./pages/ConfidentialCaseStudy2"));
const ConfidentialCaseStudy3 = lazy(() => import("./pages/ConfidentialCaseStudy3"));
const StyleGuidePage = lazy(() => import("./pages/StyleGuidePage"));

const PageLoader = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "white",
    }}
  >
    <div
      style={{
        width: "40px",
        height: "40px",
        border: "3px solid rgba(29,133,126,0.2)",
        borderTop: "3px solid #1D857E",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }}
    />
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
  );
}
