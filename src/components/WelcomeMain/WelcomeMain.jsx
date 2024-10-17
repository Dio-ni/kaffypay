import "./WelcomeMain.scss";
import Hand from "../../assets/Hand.png";
import Terminal from "../../assets/Terminal.png";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WelcomeMain = () => {
  const texts = [" карт", " наличных", " QR"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Intersection Observer for visibility
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  // Text fading effect
  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => {
      setIsFadingOut(true);
    }, 2500);

    const changeTextTimeout = setTimeout(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setIsFadingOut(false);
    }, 3000);

    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(changeTextTimeout);
    };
  }, [currentTextIndex]);

  return (
    <section ref={ref} className="welcome">
      <motion.div
        style={{
          x: inView ? "0%" : "0%",
          y: inView ? "20%" : "0%",
          rotate: inView ? -10 : 0,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: inView ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }} // Faster transition
        className="welcome_left_img"
      >
        <img src={Hand} alt="Hand" />
      </motion.div>

      <div className="welcome_center_text">
        <h2>
          Оплата ладонью вместо{" "}
          <span
            style={{
              opacity: isFadingOut ? 0 : 1,
              transition: "opacity 0.5s ease",
            }}
          >
            {texts[currentTextIndex]}
          </span>
        </h2>
      </div>

      <motion.div
        style={{
          x: inView ? "0%" : "100%",
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: inView ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }} // Faster transition
        className="welcome_right_img"
      >
        <img src={Terminal} alt="Terminal" />
      </motion.div>
    </section>
  );
};

export default WelcomeMain;
