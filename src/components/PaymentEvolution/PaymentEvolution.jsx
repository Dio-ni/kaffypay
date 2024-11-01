import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";

import { paymentEvolutions } from "../../Data";

import "./PaymentEvolution.scss";



function PaymentEvolution  ()  {
  const [currentType, setCurrentType] = useState(0);
  const [expanded, setExpanded] = useState(false); 
  const stepWidth = window.innerWidth <= 768 ? 200: 520; // Step width based on viewport size

  const smallWidth = window.innerWidth <= 768 ? 150:390; // Step width based on viewport size

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

  
  const handlers = useSwipeable({
    onSwipedLeft: handlePrev,
    onSwipedRight: handleNext,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="evolution">

    <div className="container">
      <div className="evolution_inner">
      <div className="evolution__container">
        <h2>Payment Evolution</h2>

        <div className="evolution__steps-container" 
         role="button"
         tabIndex={0}
         onMouseDown={handlers.onMouseDown}
         onTouchStart={handlers.onTouchStart}
         onTouchEnd={handlers.onTouchEnd}
         onTouchMove={handlers.onTouchMove}
         onKeyDown={(e) => {
           if (e.key === 'ArrowRight') handleNext();
           if (e.key === 'ArrowLeft') handlePrev();
         }}>
          <div
            className="evolution__steps-track"
            style={{
              // transform: `translateX(calc(-50% + ${ (currentType ) * (stepWidth-8)}vw + ${stepWidth/2}vw))`,
              transform: `translateX(calc(-50% + ${stepWidth/2 +  (( smallWidth +20)*currentType)}px))`,
              
              transition:` transform 0.2s ease`,
            }}
          >
            {paymentEvolutions.map((type, index) => (
              <div
                key={type.id}
                role="button" 
                tabIndex={0} 
                className={`evolution__step ${index === currentType ? "": "evolution__step--nonactive"}`}
                onClick={() => handleStepClick(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') { // Обработка нажатий Enter и Space
                    handleStepClick(index);
                  }
                }}
              >
                <div className="evolution__image-container">
                  <img src={type.img} alt={`Шаг ${index + 1}`} />
                  {type.hoverImg ? 
                  <img
                  style={{
                    zIndex: `${currentType === index ? 1:-1}`,
                    
                  }}
                  className="hoverImg" src={type.hoverImg} alt={`Шаг ${index + 1}`} />
                   : ""}
                  <div className="evolution__overlay" />
                </div>
                <p>{type.years}</p>
              </div>
            ))}
          </div>

          <div className="evolution__indicators">
            {paymentEvolutions.map((type, index) => (
              <div
                key={type.id}
                className={`evolution__indicator ${index === currentType ? "evolution__indicator--active" : ""}`}
                onClick={() => handleStepClick(index)}
                style={{ cursor: "pointer" }}
                role="button" 
                tabIndex={0} 
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') { // Обработка нажатий Enter и Space
                    handleStepClick(index);
                  }
                }}
              />
            )).reverse()}
          </div>

          <div className="evolution__step-details">
            <h1>{paymentEvolutions[currentType].type}</h1>
            <div>
            <div
              className={`evolution__description `}
              style={{
                display: "-webkit-box",
                WebkitLineClamp: expanded || window.innerWidth > 768 ? "unset" : 2,
                WebkitBoxOrient: "vertical",
                overflow: expanded || window.innerWidth > 768 ? "visible" : "hidden",
                textOverflow: "ellipsis",
                height: window.innerWidth > 768 ? "7em" : (expanded ? "auto" : "3em"),
                transition: "height 0.3s ease",
              }}
            >
              {paymentEvolutions[currentType].description} 
            </div>
            {window.innerWidth <= 768 && ( 
              <button 
                className="expand-toggle" 
                onClick={toggleExpanded} 
                type="button" 
                aria-expanded={expanded} 
                aria-label={expanded ? "Свернуть описание" : "Развернуть описание"} // Добавляем описания для доступности
              >
                {expanded ? "Свернуть" : "Развернуть"}
                <span>
                  {expanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </button>
            )}

            </div>
           
          </div>
        </div>

        <div className="controls">
          <button
            type="button"
            className="prev"
            onClick={handleNext}
            disabled={currentType === paymentEvolutions.length - 1}
          >
            Назад
          </button>
          <button
            type="button"
            className="next"
            onClick={handlePrev}
            disabled={currentType === 0}
          >
            Далее
          </button>
        </div>
        
      </div>
      </div>
    </div>
    
    </div>
  );
};

export default PaymentEvolution;
