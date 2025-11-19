import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/lenis-utils";
import { useState } from "react";

const Navigation = () => {
  const [hidden, setHidden] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > 100 && latest > previous) {
      setHidden(false); // Show on scroll down after 100px
    } else if (latest <= 100) {
      setHidden(true); // Hide at top
    }
  });

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Achievements", href: "#achievements" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/"
            className="text-xl font-bold text-foreground"
          >
            Apurva B Raj
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative bg-transparent border-none cursor-pointer py-2 px-1 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div>
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
            >
              Connect with me
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;