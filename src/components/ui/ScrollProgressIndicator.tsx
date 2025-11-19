import { motion, useScroll, useSpring } from "framer-motion";
import { scrollToSection } from "@/lib/lenis-utils";
import { useEffect, useState } from "react";

const ScrollProgressIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [progress, setProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    { name: "Hero", id: "hero", range: [0, 12] },
    { name: "About", id: "about", range: [12, 24] },
    { name: "Experience", id: "experience", range: [24, 36] },
    { name: "Projects", id: "projects", range: [36, 48] },
    { name: "Skills", id: "skills", range: [48, 60] },
    { name: "Achievements", id: "achievements", range: [60, 72] },
    { name: "FAQ", id: "faq", range: [72, 84] },
    { name: "Contact", id: "contact", range: [84, 100] }
  ];

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      const progressPercent = Math.round(latest * 100);
      setProgress(progressPercent);

      // Find current section
      const current = sections.findIndex(section =>
        progressPercent >= section.range[0] && progressPercent < section.range[1]
      );
      setCurrentSection(current !== -1 ? current : sections.length - 1);
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="hidden md:block fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-accent origin-left z-[60] shadow-glow"
        style={{ scaleX }}
      />

      {/* Progress Bar Glow Effect */}
      <motion.div
        className="hidden md:block fixed bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary/30 via-primary/30 to-accent/30 origin-left z-[59] blur-sm"
        style={{ scaleX }}
      />

      


    </>
  );
};

export default ScrollProgressIndicator;
