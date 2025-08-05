import Lenis from 'lenis';

// Get the global Lenis instance
let lenisInstance: Lenis | null = null;

export const setLenisInstance = (lenis: Lenis) => {
  lenisInstance = lenis;
};

export const scrollToSection = (target: string) => {
  if (lenisInstance) {
    // Remove the # if it exists
    const elementId = target.replace('#', '');
    const element = document.getElementById(elementId);
    
    if (element) {
      lenisInstance.scrollTo(element, {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  } else {
    // Fallback to regular smooth scroll
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
};
