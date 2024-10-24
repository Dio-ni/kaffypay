import React, { useState } from "react";
import "./PaymentEvolution.scss";
import { paymentEvolutions } from "../../Data";

const EvolutionOfPayments = () => {
  const [currentType, setCurrentType] = useState(0);

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



  return (
    <section className="evolution wrapper">
      <div className="evolution__container">
        <h2>Эволюция платежей</h2>

        <div className="evolution__steps-container">
          <div
            className="evolution__steps-track"
            style={{
              transform: `translateX(${currentType * 400}px)`, // Move track left based on currentType
              transition: 'transform 0.3s ease', // Smooth transition effect
            }}
          >
            {paymentEvolutions.map((type, index) => (
              <div
                key={index}
                className={`evolution__step 
                  ${index === currentType ? "evolution__step--active" : ""}
                  ${index === 0 ? "step-first" : ""}
                `}
                onClick={() => handleStepClick(index)} // Add click handler
              >
                <div className="evolution__image-container">
                  <img src={index === currentType ? type.hoverImg : type.img} alt={`Шаг ${index + 1}`} />
                  <div className="evolution__overlay" /> {/* Overlay for the image */}
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
              onClick={() => handleStepClick(index)} // Add click handler to indicators
              style={{ cursor: 'pointer' }} // Add pointer cursor to indicate clickability
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
            onClick={handlePrev} // Update click handler for the previous button
            disabled={currentType === 0} // Disable if it's the first item
          >
            Назад
          </button>
          <button
            className="next"
            onClick={handleNext} // Update click handler for the next button
            disabled={currentType === paymentEvolutions.length - 1} // Disable if it's the last item
          >
            Далее
          </button>
        </div>
      </div>
    </section>
  );
};

export default EvolutionOfPayments;
