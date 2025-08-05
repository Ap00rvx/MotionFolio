import { useEffect } from 'react';
import Lenis from 'lenis';
import { setLenisInstance } from '@/lib/lenis-utils';

export const useLenis = () => {
  useEffect(() => {
    // Add Lenis CSS classes to html element
    document.documentElement.classList.add('lenis');

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Set the global instance for utility functions
    setLenisInstance(lenis);

    // Lenis smooth scroll effect
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Integrate with Framer Motion and other scroll-based libraries
    lenis.on('scroll', (e) => {
      // This ensures scroll-based animations work correctly
      // You can add any scroll-based logic here
    });

    // Handle anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          lenis.scrollTo(element as HTMLElement);
        }
      }
    };

    // Add event listeners for anchor links
    document.addEventListener('click', handleAnchorClick);

    // Cleanup function
    return () => {
      document.documentElement.classList.remove('lenis');
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);
};
