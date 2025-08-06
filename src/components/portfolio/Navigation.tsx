import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/lenis-utils";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/"
          
            className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent"
          >
            Apurva B Raj
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative bg-transparent border-none cursor-pointer py-2 px-1"
                whileHover={{ y: 0 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white origin-left shadow-sm shadow-white/50 hover:w-full"
                 
                />
              </motion.button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button 
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Connect with me
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;