import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import "./PaymentEvolution.scss";
import { paymentEvolutions } from "../../Data";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



const PaymentEvolution = () => {
  const [currentType, setCurrentType] = useState(0);
  const [stepWidth, setStepWidth] = useState(window.innerWidth <= 768 ? 50 : 20);
  const [expanded, setExpanded] = useState(false); 

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
      setExpanded(false);
    }
  };

  const handlePrev = () => {
    if (currentType > 0) {
      setCurrentType((prev) => prev - 1);
      setExpanded(false);
    }
  };

  const handleStepClick = (index) => {
    setCurrentType(index);
    setExpanded(false);
  };

  const toggleExpanded = () => setExpanded(!expanded);

  const totalSteps = paymentEvolutions.length;
  const gap = 50;
  const totalWidthVW = (totalSteps - 1) * stepWidth + ((totalSteps - 1) * gap) / (window.innerWidth / 100);
  const paddingRight = totalWidthVW;
  
  const handlers = useSwipeable({
    onSwipedLeft: handlePrev,
    onSwipedRight: handleNext,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section className="evolution wrapper">
      <div className="evolution__container">
        <h2>Эволюция платежей</h2>

        <div className="evolution__steps-container" {...handlers}>
          <div
            className="evolution__steps-track"
            style={{
              transform: `translateX(calc(${currentType * stepWidth}vw + ${currentType * gap}px))`,
              transition: "transform 0.3s ease",
              marginRight: `${paddingRight}vw`,
            }}
          >
            {paymentEvolutions.map((type, index) => (
              <div
                key={index}
                className={`evolution__step ${index === currentType ? "evolution__step--active" : ""}`}
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
            <div
              className={`evolution__description `}
              style={{
                display: "-webkit-box",
                WebkitLineClamp: expanded || window.innerWidth > 768 ? "unset" : 2,
                WebkitBoxOrient: "vertical",
                overflow: expanded || window.innerWidth > 768 ? "visible" : "hidden",
                textOverflow: "ellipsis",
                height: expanded || window.innerWidth > 768 ? "auto" : "3em",
                transition: "height 0.3s ease",
              }}
            >
              {paymentEvolutions[currentType].description} 
            </div>
            <p className="expand-toggle" onClick={toggleExpanded}>
            {expanded ? "Свернуть" : "Развернуть"}
            <span>
              {expanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </p>
           
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
