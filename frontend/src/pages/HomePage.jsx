import HeroSection from "../components/ui/ProjectCard/HeroSection";
import Navbar from "../components/ui/ProjectCard/Navbar";
import AboutSection from "../components/ui/ProjectCard/AboutSection";
import ProjectsSection from "../components/ui/ProjectCard/ProjectsSection";
import EmailSection from "../components/ui/ProjectCard/EmailSection";
import Footer from "../components/ui/ProjectCard/Footer";
import ScrollProgress from "../components/ui/ScrollProgress";
import BackToTop from "../components/ui/BackToTop";
// import AchievementsSection from "../components/ui/ProjectCard/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 bg-[length:400%_400%] animate-gradient">
      <ScrollProgress />
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        {/* <AchievementsSection /> */}
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
      <BackToTop />
    </main>
  );
}
