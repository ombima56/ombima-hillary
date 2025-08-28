import HeroSection from "../components/ui/ProjectCard/HeroSection";
import Navbar from "../components/ui/ProjectCard/Navbar";
import AboutSection from "../components/ui/ProjectCard/AboutSection";
import ProjectsSection from "../components/ui/ProjectCard/ProjectsSection";
import EmailSection from "../components/ui/ProjectCard/EmailSection";
import Footer from "../components/ui/ProjectCard/Footer";
import AchievementsSection from "../components/ui/ProjectCard/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-primary-800">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
