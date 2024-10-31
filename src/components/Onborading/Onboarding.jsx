import React, { useState } from "react";
import "./Onboarding.scss";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useSwipeable } from "react-swipeable";
import { onboardingSlides } from "../../Data";

const Onboarding = () => {
  

  const [currentSlide, setCurrentSlide] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const stepWidth = window.innerWidth <= 768 ? 50: 35; // Step width based on viewport size

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === onboardingSlides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? onboardingSlides.length - 1 : prev - 1));
  };

  const handleStepClick = (index) => {
    setCurrentSlide(index); 
  };

  const toggleExpanded = () => setExpanded(!expanded);
  const handlers = useSwipeable({
    onSwipedLeft: handleNext ,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });



  return (
    <section className="onboarding wrapper">
      <div className="onboarding__container">
        <h2>App Onboarding</h2>

        <div className="steps-container" {...handlers}>
          <div
            className="steps-track"
            style={{
              transform: `translateX(calc(50% - ${ (currentSlide ) * (stepWidth-8)}vw - ${stepWidth/2}vw))`,
              transition: ` transform 0.2s ease`,
            }}

          >
            {onboardingSlides.map((slide, index) => (
              <div
                key={index}
                className={`step ${index === currentSlide ? "": "step--nonactive"}`}
                onClick={() => handleStepClick(index)}
              >
                <img src={slide.img} alt={`Шаг ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="step-details">
            <div className="step-num">
              <div className="line"></div>
              <ul>
                {onboardingSlides.map((_, index) => (
                  <li
                    key={index}
                    className={`step ${index === currentSlide ? "num-active" : ""}`}
                    onClick={() => handleStepClick(index)} 
                    style={{ cursor: "pointer" }} 
                  >
                    {index + 1} 
                  </li>
                ))}
              </ul>
            </div>

            <h1>{onboardingSlides[currentSlide].title}</h1>
            <div>
            <div
              className="step-description"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: expanded || window.innerWidth > 768 ? "unset" : 2,
                WebkitBoxOrient: "vertical",
                overflow: expanded || window.innerWidth > 768 ? "visible" : "hidden",
                textOverflow: "ellipsis",
                transition: "height 0.3s ease",
                height: window.innerWidth > 768 ? "3em " : (expanded ? "auto" : "3em"),
              }}
            >
              {onboardingSlides[currentSlide].description}
            
            </div>
            {window.innerWidth <= 768 && ( // Show only on mobile
              <p className="expand-toggle" onClick={toggleExpanded}>
              {expanded ? "Свернуть" : "Развернуть"}
              <span>
                {expanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </p>
            )}
            </div>
            
          </div>
        </div>

        <div className="controls">
          <button
            className="prev"
            onClick={handlePrev}
            disabled={currentSlide === 0} // Disable on the first slide
          >
            Назад
          </button>
          <button
            className="next"
            onClick={handleNext}
            disabled={currentSlide === onboardingSlides.length - 1} // Disable on the last slide
          >
            Далее
          </button>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
