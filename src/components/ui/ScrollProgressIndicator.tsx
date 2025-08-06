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
        className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-accent origin-left z-[60] shadow-glow"
        style={{ scaleX }}
      />
      
      {/* Progress Bar Glow Effect */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary/30 via-primary/30 to-accent/30 origin-left z-[59] blur-sm"
        style={{ scaleX }}
      />
      
      {/* Progress Percentage Indicator */}
      {/* <motion.div
        className="fixed top-4 right-4 z-[60] bg-background/90 backdrop-blur-md border border-border/50 rounded-full px-3 py-1.5 text-xs font-medium text-foreground shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: progress > 5 ? 1 : 0, scale: progress > 5 ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-2">
          <motion.div 
            className="w-2 h-2 bg-primary rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-primary font-semibold">{progress}%</span>
        </div>
      </motion.div> */}

      {/* Section Navigation Dots */}
      <motion.div
        className="fixed right-6 bottom-[35vh] z-[60] space-y-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: progress > 10 ? 1 : 0, x: progress > 10 ? 0 : 20 }}
        transition={{ duration: 0.3 }}
      >
        {sections.map((section, index) => {
          const isActive = currentSection === index;
          const isPassed = currentSection > index;
          
          return (
            <motion.div
              key={section.name}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.1 }}
              onClick={() => scrollToSection(`#${section.id}`)}
            >
              {/* Dot */}
              <motion.div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 relative ${
                  isActive 
                    ? 'bg-primary border-primary shadow-lg shadow-primary/50' 
                    : isPassed
                    ? 'bg-primary/60 border-primary/60'
                    : 'bg-transparent border-muted-foreground/40 hover:border-primary/60'
                }`}
                animate={{
                  scale: isActive ? 1.3 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                {/* Active dot pulse effect */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-primary rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.8, 0, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </motion.div>
              
              {/* Section Label */}
              <motion.div
                className="absolute right-6 bottom-1/2 transform translate-y-1/2 bg-background/95 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-2 text-xs font-medium text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg"
                initial={{ x: 10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
              >
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-primary' : 'bg-muted-foreground/50'}`} />
                  {section.name}
                </div>
              </motion.div>
              
              {/* Connection Line */}
              {index < sections.length - 1 && (
                <motion.div 
                  className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0.5 h-4 transition-all duration-300 ${
                    isPassed ? 'bg-primary/40' : 'bg-muted-foreground/20'
                  }`}
                  animate={{
                    backgroundColor: isPassed ? 'rgba(255,255,255,0.4)' : 'rgba(156,163,175,0.2)'
                  }}
                />
              )}
            </motion.div>
          );
        })}
      </motion.div>

     
    </>
  );
};

export default ScrollProgressIndicator;
