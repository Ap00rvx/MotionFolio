import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import ScrollVelocity from "@/components/ui/scrollReveal";


const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
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
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
