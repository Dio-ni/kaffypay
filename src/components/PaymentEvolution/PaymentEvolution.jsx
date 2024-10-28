import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./PaymentEvolution.scss";
import { paymentEvolutions } from "../../Data";

const PaymentEvolution = () => {
  const [currentType, setCurrentType] = useState(0);
  const [stepWidth, setStepWidth] = useState(window.innerWidth <= 768 ? 50 : 20); // 50vw for mobile, 20vw for desktop

  // Update stepWidth on resize to handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      setStepWidth(window.innerWidth <= 768 ? 50 : 20);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (currentType < paymentEvolutions.length - 1) {
      setCurrentType((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentType > 0) {
      setCurrentType((prev) => prev - 1);
    }
  };

  const handleStepClick = (index) => {
    setCurrentType(index);
  };

  const totalSteps = paymentEvolutions.length;
  const gap = 50; // px
  const totalWidthVW = (totalSteps - 1) * stepWidth + ((totalSteps - 1) * gap) / (window.innerWidth / 100);
  const paddingRight = totalWidthVW;

  // Swipeable options
  const handlers = useSwipeable({
    onSwipedLeft:  handlePrev, // Swipe left
    onSwipedRight:handleNext, // Swipe right
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Optional: Allows mouse events
  });

  return (
    <section className="evolution wrapper">
      <div className="evolution__container">
        <h2>Эволюция платежей</h2>

        <div className="evolution__steps-container" {...handlers}>
          <div
            className="evolution__steps-track"
            style={{
              transform: `translateX(calc(${currentType * (stepWidth)}vw + ${currentType * gap}px))`, // Include gap for each step
              transition: "transform 0.3s ease",
              paddingRight: `${paddingRight}vw`,
            }}
          >
            {paymentEvolutions.map((type, index) => (
              <div
                key={index}
                className={`evolution__step 
                  ${index === currentType ? "evolution__step--active" : ""}
                `}
                onClick={() => handleStepClick(index)}
              >
                <div className="evolution__image-container">
                  <img src={index === currentType ? type.hoverImg : type.img} alt={`Шаг ${index + 1}`} />
                  <div className="evolution__overlay" />
                </div>
                <p>{type.years}</p>
              </div>
            ))}
          </div>
          <div className="evolution__indicators">
            {paymentEvolutions.map((_, index) => (
              <div
                key={index}
                className={`evolution__indicator ${index === currentType ? "evolution__indicator--active" : ""}`}
                onClick={() => handleStepClick(index)}
                style={{ cursor: "pointer" }}
              />
            )).reverse()}
          </div>
          <div className="evolution__step-details">
            <h1>{paymentEvolutions[currentType].type}</h1>
            <p>{paymentEvolutions[currentType].description}</p>
          </div>
        </div>

        <div className="controls">
          <button
            className="prev"
            onClick={handlePrev}
            disabled={currentType === 0}
          >
            Назад
          </button>
          <button
            className="next"
            onClick={handleNext}
            disabled={currentType === paymentEvolutions.length - 1}
          >
            Далее
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentEvolution;
