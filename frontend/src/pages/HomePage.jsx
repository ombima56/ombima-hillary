import { HelmetProvider } from 'react-helmet-async';
import HeroSection from "../components/ui/ProjectCard/HeroSection";
import Navbar from "../components/ui/ProjectCard/Navbar";
import AboutSection from "../components/ui/ProjectCard/AboutSection";
import ProjectsSection from "../components/ui/ProjectCard/ProjectsSection";
import EmailSection from "../components/ui/ProjectCard/EmailSection";
import Footer from "../components/ui/ProjectCard/Footer";
import ScrollProgress from "../components/ui/ScrollProgress";
import BackToTop from "../components/ui/BackToTop";
import DarkModeToggle from "../components/ui/DarkModeToggle";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import GitHubStats from "../components/sections/GitHubStats";
import SEO from "../components/common/SEO";
import ErrorBoundary from "../components/common/ErrorBoundary";
// import AchievementsSection from "../components/ui/ProjectCard/AchievementsSection";

export default function Home() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <SEO />
        <main className="flex min-h-screen flex-col bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 bg-[length:400%_400%] animate-gradient">
          <ScrollProgress />
          <Navbar />
          <DarkModeToggle />
          <div className="container mt-24 mx-auto px-12 py-4">
            <HeroSection />
            {/* <AchievementsSection /> */}
            <AboutSection />
            <ProjectsSection />
            <GitHubStats />
            <TestimonialsSection />
            <EmailSection />
          </div>
          <Footer />
          <BackToTop />
        </main>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
