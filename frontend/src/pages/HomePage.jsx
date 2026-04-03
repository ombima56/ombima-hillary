import HeroSection from "../components/ui/ProjectCard/HeroSection";
import Navbar from "../components/ui/ProjectCard/Navbar";
import AboutSection from "../components/ui/ProjectCard/AboutSection";
import ProjectsSection from "../components/ui/ProjectCard/ProjectsSection";
import EmailSection from "../components/ui/ProjectCard/EmailSection";
import Footer from "../components/ui/ProjectCard/Footer";
// import AchievementsSection from "../components/ui/ProjectCard/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-neutral-900 relative">
      {/* Subtle Background Accent (Non-gradient) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-600/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-600/5 blur-[100px] rounded-full"></div>
      </div>

      <Navbar />
      <div className="container mt-24 mx-auto px-6 sm:px-12 py-8">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
