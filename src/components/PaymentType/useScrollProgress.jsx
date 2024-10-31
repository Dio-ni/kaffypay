// useScrollProgress.js
import { useEffect, useState } from "react";

const useScrollProgress = (ref) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate scroll progress as a percentage
        const totalHeight = bottom - top;
        const visibleHeight = Math.min(totalHeight, viewportHeight - top);
        const progress = Math.max(0, Math.min(1, visibleHeight / totalHeight));
        
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call on mount to set initial value

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return scrollProgress;
};

export default useScrollProgress;
