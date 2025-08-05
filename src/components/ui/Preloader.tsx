import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Orb from "./bg";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    // Show preloader for 3 seconds
    const timer = setTimeout(() => {
      setIsZooming(true);
      // After zoom animation completes, hide preloader
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 1000); // 1 second for zoom animation
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-background flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ 
              scale: isZooming ? 10 : 1,
              opacity: isZooming ? 0 : 1
            }}
            transition={{ 
              duration: 1,
              ease: "easeInOut"
            }}
            className="w-96 h-96 relative"
          >
            <Orb
              hoverIntensity={0.8}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
            />
          </motion.div>
          
          {/* Optional loading text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isZooming ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-20 text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-muted-foreground mb-4"
            >
              Loading Experience...
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="h-1 bg-gradient-primary rounded-full max-w-xs mx-auto"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
