import { useState, useCallback, useRef, useEffect } from "react";
import resumeData from "./data/resumeData";

// Layout components
import Sidebar from "./components/layout/Sidebar";
import FloatingNav from "./components/layout/FloatingNav";
import Footer from "./components/layout/Footer";
import CursorSpotlight from "./components/layout/CursorSpotlight";

// Section components
import HeroSection from "./components/sections/HeroSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import EducationSection from "./components/sections/EducationSection";
import ToolsSection from "./components/sections/ToolsSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import ContactSection from "./components/sections/ContactSection";

// UI feedback components
import ProjectModal from "./components/ui/ProjectModal";
import Toast from "./components/ui/Toast";
import ThemeToggle from "./components/ui/ThemeToggle";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "dark" || saved === "light") return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [toast, setToast] = useState({ isVisible: false, message: "", isError: false });
  const toastTimerRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Storage access may be restricted in some iframe environments
    }
  }, [theme]);

  const showToast = useCallback((message, isError = false) => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }

    setToast({ isVisible: true, message, isError });

    toastTimerRef.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, isVisible: false }));
    }, 4000);
  }, []);

  const handleDownloadCV = useCallback(() => {
    showToast("Preparing printable CV...");
    setTimeout(() => {
      window.print();
    }, 400);
  }, [showToast]);

  return (
    <>
      {/* Top-Left Theme Switcher (White & Dark Mode) */}
      <ThemeToggle theme={theme} setTheme={setTheme} />

      {/* Ambient background & cursor spotlight effects */}
      <CursorSpotlight />

      {/* Main Page Layout Wrapper */}
      <div className="page-wrapper">
        {/* Profile Sidebar (Left) */}
        <Sidebar
          profile={resumeData.profile}
          onDownloadCV={handleDownloadCV}
        />

        {/* Content Feed (Right) */}
        <main className="main-content">
          <HeroSection
            profile={resumeData.profile}
            stats={resumeData.stats}
          />

          <ExperienceSection
            experience={resumeData.experience}
          />

          <ProjectsSection
            projects={resumeData.projects}
            onSelectProject={setSelectedProject}
          />

          <EducationSection
            education={resumeData.education}
          />

          <ToolsSection
            tools={resumeData.tools}
          />

          <TestimonialsSection
            testimonials={resumeData.testimonials}
          />

          <ContactSection
            profile={resumeData.profile}
            onShowToast={showToast}
          />

          <Footer name={resumeData.profile.name} />
        </main>
      </div>

      {/* Floating Navigation Dock */}
      <FloatingNav items={resumeData.navigation} />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        isError={toast.isError}
        isVisible={toast.isVisible}
      />
    </>
  );
}

export default App;
