import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import FAQSection from "@/components/portfolio/FAQSection";
import ContactSection from "@/components/portfolio/ContactSection";
import ScrollVelocity from "@/components/ui/scrollReveal";
import ScrollProgressIndicator from "@/components/ui/ScrollProgressIndicator";
import { useLenis } from "@/hooks/use-lenis";
import { motion } from "framer-motion";

const Index = () => {
  // Initialize Lenis smooth scrolling
  useLenis();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full"
      >
        <ScrollProgressIndicator />
        <Navigation />
        <div id="hero">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="experience">
          <ExperienceSection />
        </div>
        <div className="relative">
          <ScrollVelocity
            texts={[
              "Transforming Ideas into pixel-perfect solutions ✧",
              "Crafting seamless user experiences with code ✧",
            ]}
            velocity={100}
            className="custom-scroll-text"
          />
          {/* Left Gradient Overlay */}
          <div
            className="pointer-events-none absolute left-0 top-0 h-full md:w-1/2 z-10"
            style={{
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
              background: "linear-gradient(to right, rgba(0,0,0,1), transparent)",
            }}
          />
          {/* Right Gradient Overlay */}
          <div
            className="pointer-events-none absolute right-0 top-0 h-full md:w-1/2 z-10"
            style={{
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              background: "linear-gradient(to left, rgba(0,0,0,1), transparent)",
            }}
          />
        </div>

        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="achievements">
          <AchievementsSection />
        </div>
        <div id="faq">
          <FAQSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
