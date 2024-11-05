 /* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import { paymentEvolutions } from "../../Data";
import "./PaymentEvolution.scss";

function PaymentEvolution() {
  const { t, i18n } = useTranslation();
  const [currentType, setCurrentType] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const stepWidth = window.innerWidth <= 768 ? 200 : 520; 
  const smallWidth = window.innerWidth <= 768 ? 150 : 390; 

  const handleNext = () => {
    if (currentType < paymentEvolutions.length - 1) {
      setCurrentType(prev => prev + 1);
      setExpanded(false);
    }
  };

  const handlePrev = () => {
    if (currentType > 0) {
      setCurrentType(prev => prev - 1);
      setExpanded(false);
    }
  };

  const handleStepClick = index => {
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
            <h2>{t('payment_evolution')}</h2>
            <div
              className="evolution__steps-container"
              role="button"
              tabIndex={0}
              {...handlers} 
              onKeyDown={e => {
                if (e.key === 'ArrowRight') handleNext();
                if (e.key === 'ArrowLeft') handlePrev();
              }}
            >
              <div
                className="evolution__steps-track"
                style={{
                  transform: `translateX(calc(-50% + ${stepWidth / 2 + ((smallWidth + 20) * currentType)}px))`,
                  transition: `transform 0.2s ease`,
                }}
              >
                {paymentEvolutions.map((type, index) => (
                  <div
                    key={type.id}
                    role="button"
                    tabIndex={0}
                    className={`evolution__step ${index === currentType ? "" : "evolution__step--nonactive"}`}
                    onClick={() => handleStepClick(index)}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleStepClick(index);
                      }
                    }}
                  >
                    <div className="evolution__image-container">
                      <img src={type.img} alt={`Шаг ${index + 1}`} />
                      {type.hoverImgRu && type.hoverImgEng && (
                        <img
                          style={{
                            zIndex: `${currentType === index ? 1 : -1}`,
                          }}
                          className="hoverImg"
                          src={i18n.language === 'ru' ? type.hoverImgRu : type.hoverImgEng}
                          alt={`Шаг ${index + 1}`}
                        />
                      )}
                      <div className="evolution__overlay" />
                    </div>
                    <p>{t(type.years)}</p>
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
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleStepClick(index);
                      }
                    }}
                  />
                )).reverse()}
              </div>
              <div className="evolution__step-details">
                <h1>{t(paymentEvolutions[currentType].type)}</h1>
                <div>
                  <div
                    className="evolution__description"
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
                    {t(paymentEvolutions[currentType].description)}
                  </div>
                  {window.innerWidth <= 768 && (
                    <button
                      className="expand-toggle"
                      onClick={toggleExpanded}
                      type="button"
                      aria-expanded={expanded}
                    >
                      {expanded ? t('collapse') : t('expand')}
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
                {t('btn_prev')}
              </button>
              <button
                type="button"
                className="next"
                onClick={handlePrev}
                disabled={currentType === 0}
              >
                {t('btn_next')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentEvolution;
