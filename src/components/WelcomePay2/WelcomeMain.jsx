import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "./WelcomeMain.scss";
import { motion, useScroll, useTransform } from "framer-motion";

import Hand from "../../assets/images/welcomeMain/Hand.png";
import TerminalRu from "../../assets/images/welcomeMain/ru/Terminal.png";

import TerminalEng from "../../assets/images/welcomeMain/eng/Terminal.png";

import HandLine from "../../assets/images/welcomeMain/hand-line.png";

function  WelcomeMain ()  {
  const { t,i18n } = useTranslation();

  const ref = useRef(null);
  const textOptions =[t('payments_without.cards'),t('payments_without.cash'),t('payments_without.phone')];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [terminalImage, setTerminalImage] = useState(TerminalRu); // Default to English image
  useEffect(() => {
    
    setTerminalImage(i18n.language === 'ru' ? TerminalRu : TerminalEng);
  }, [i18n.language, t]);  

  useEffect(() => {

    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textOptions.length); // Update text
        setFade(true);
      }, 500); 
    }, 1500); 

    return () => clearInterval(interval); 
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

  const handTransformX = useTransform(scrollYProgress, [0, 1], ["-14%", "25%"]);
  const handTransformY = useTransform(scrollYProgress, [0, 1], ["40%", "-20%"]);
  const handRotation = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const terminalTransformX = useTransform(scrollYProgress, [0, 1], ["75%", "0%"]);
  const terminalTransformY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const terminalRotation = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  
  return (
    <div className="welcome-main">
    <div className="container" ref={ref}>
      <div className="mobile-text">
      <h2>
        {t('palm_payments_without')} {" "}
        <span className={`fade-text ${fade ? "fade-in" : "fade-out"}`}>
          {textOptions[currentIndex]}
        </span>
      </h2>
    </div>

      <section className="welcome section_wrapper wrapper">
        <motion.div  
          className="welcome_left_img"
          style={{
            x: handTransformX,
            y: handTransformY,
            rotate: handRotation,
            scale:1.05
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={Hand} alt="Hand" />
        </motion.div>

          <img className="hand-line" src={HandLine} alt="" />
        <div className="welcome_center_text">
          <h2>
          {t('palm_payments_without')}{" "}
            <span className={`fade-text ${fade ? "fade-in" : "fade-out"}`}
            
            >
        {textOptions[currentIndex]}
      </span>
          </h2>
        </div>

        <motion.div
          className="welcome_right_img"
          style={{
            x: terminalTransformX,
            y: terminalTransformY,
            rotate: terminalRotation,
            scale:1.05
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img src={terminalImage} alt="Terminal" />
        </motion.div>
      </section>
    </div>
    
    </div>
  );
};

export default WelcomeMain;
