import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { scrollToSection } from "@/lib/lenis-utils";
import Orb from "../ui/bg";
import React from "react";

const HeroSection = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iMTAiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" /> */}
      <motion.div style={{ width: '100vw', height: '100vh', position: 'relative' }}
      initial={{ opacity: 0,scale: 19 }}
  viewport={{ once: true }}
      whileInView={{ opacity: .4, scale: 1  }}
      transition={{ duration: 1.5,  }}
      
     >
  <Orb
    hoverIntensity={0.3}
    rotateOnHover={false}
    hue={0}
    forceHoverState={true}
  />
</motion.div>
      
      <div className="container mx-auto px-6 z-10 absolute">
        <div className="text-center" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Apurva B Raj
            </h1>
            <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Full-Stack Developer specializing in Flutter, Node.js, and modern web technologies. 
            Building scalable applications with clean code and seamless user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>apurvabraj@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+91 6306880941</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Ghaziabad</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button onClick={() => scrollToSection("#projects")} size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Projects
            </Button>
            <Button
              onClick={
                () => window.open("https://github.com/Ap00rvx", "_blank")
              }
             variant="outline" size="lg" className="border-primary/20 hover:border-primary/40 transition-all duration-300">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ 
          y: [-10, 10, -10],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-20 h-20 bg-primary/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ 
          y: [10, -10, 10],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-xl"
      />
    </section>
  );
};

export default HeroSection;