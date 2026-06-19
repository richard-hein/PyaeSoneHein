import { useState, useEffect } from "react";
// Change to "motion/react" if you are strictly on Framer Motion v12+
import { motion } from "framer-motion";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY >= window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? [0, -10, 0] : 16,
      }}
      transition={{
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        },
        opacity: { duration: 0.3 },
      }}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-7 right-7 z-[200] w-12 h-12 rounded-xl
        flex items-center justify-center border border-primary/30 
        text-primary bg-[#0f1117]/80 backdrop-blur-md cursor-pointer
        shadow-[0_4px_20px_rgba(0,0,0,0.3)]
        hover:border-primary hover:bg-primary hover:text-[#0f1117] hover:scale-110
        ${isVisible ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
        />
      </svg>
    </motion.button>
  );
};

export default ScrollToTop;
