import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { scrollToSection } from "@/lib/lenis-utils";
import Scene3D from "../3d/Scene3D";
import Hero3D from "../3d/Hero3D";
import React, { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // 3D Scene Animations
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 3]); // "Boom" effect: scale up
  const opacity3D = useTransform(scrollYProgress, [0, 0.3], [1, 0]); // Fade out 3D scene
  const y3D = useTransform(scrollYProgress, [0, 0.5], [0, -100]); // Move up slightly

  // Text Content Animations
  const opacityText = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]); // Fade in text
  const yText = useTransform(scrollYProgress, [0.2, 0.5], [100, 0]); // Slide up text

  return (
    <section ref={containerRef} className="h-[200vh] relative bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* 3D Scene Layer - Initially Full Screen */}
        <motion.div
          style={{ scale, opacity: opacity3D, y: y3D }}
          className="absolute inset-0 z-10 w-full h-full"
        >
          <Scene3D cameraPosition={[0, 0, 6]} className="h-full w-full">
            <Hero3D />
          </Scene3D>
        </motion.div>

        {/* Text Content Layer - Reveals on Scroll */}
        <motion.div
          style={{ opacity: opacityText, y: yText }}
          className="container mx-auto px-6 z-20 relative"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground tracking-tighter">
                Apurva B Raj
              </h1>
              <div className="h-1 w-32 bg-foreground mx-auto mb-8 rounded-full" />
            </div>

            <p className="text-2xl md:text-3xl text-muted-foreground mb-12 leading-relaxed font-light">
              Software Engineer
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5" />
                <span>apurvabraj@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-5 h-5" />
                <span>+91 6306880941</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>Ghaziabad</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <Button onClick={() => scrollToSection("#projects")} size="lg" className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 rounded-none px-8 py-6 text-lg">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Projects
              </Button>
              <Button
                onClick={
                  () => window.open("https://github.com/Ap00rvx", "_blank")
                }
                variant="outline" size="lg" className="border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300 rounded-none px-8 py-6 text-lg">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;