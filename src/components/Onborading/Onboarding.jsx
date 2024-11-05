 /* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import "./Onboarding.scss";
import { IoIosArrowDown,IoIosArrowUp  } from "react-icons/io";
import { useTranslation } from 'react-i18next';

import { useSwipeable } from "react-swipeable";
import { onboardingSlides } from "../../Data";

function Onboarding  ()  {
  const { t,i18n } = useTranslation();
    

  const [currentSlide, setCurrentSlide] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const stepWidth = window.innerWidth <= 768 ?  200 : 520 ; // Step width based on viewport size
  const smallWidth= window.innerWidth <= 768 ?  150 : 390 ;
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
    <div className="onvoarding">
    <div className="container">
      <div className="onboarding__inner">
        <h2>{t('app_onboarding')} </h2>

        <div className="steps-container" 
        role="button"
        tabIndex={0}
        {...handlers}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') handleNext();
          if (e.key === 'ArrowLeft') handlePrev();
        }}>
          <div
            className="steps-track"
            style={{
              transform: `translateX(calc(50% - ${stepWidth/2 +  (( smallWidth +20)*currentSlide)}px))`,
              transition: ` transform 0.2s ease`,
            }}

          >
            {onboardingSlides.map((slide, index) => (
              <div
                key={slide.title}
                className={`step ${index === currentSlide ? "" : "step--nonactive"}`}
                role="button" 
                tabIndex={0} 
                onClick={() => handleStepClick(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') { // Обработка нажатий Enter и Space
                    handleStepClick(index);
                  }
                }}
              >
                <img src={i18n.language === 'ru' ? slide.imgRu : slide.imgEn} alt={`Шаг ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="step-details">
            <div className="step-num">
              <div className="line"/>
              <ul>
                {onboardingSlides.map((prop, index) => (
                  <li
                  key={prop.title} 
                  className={`step ${index === currentSlide ? "num-active" : ""}`}
                  >
                     <button
                        type="button" 
                        tabIndex={0} 
                        onClick={() => handleStepClick(index)} 
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') { // Обработка нажатий Enter и Space
                            handleStepClick(index);
                          }
                        }}
                        style={{ cursor: "pointer", background: "none", border: "none", padding: 0 }} 
                      >
                        {index + 1} 
                      </button>
                  </li>
                ))}
              </ul>
            </div>

            <h1>{t(onboardingSlides[currentSlide].title)}</h1>
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
                height: window.innerWidth > 768 ? "3em " : (expanded ? "auto" : "3.3em"),
              }}
            >
              {t(onboardingSlides[currentSlide].description)}
            
            </div>
            {window.innerWidth <= 768 && ( 
              <button 
                className="expand-toggle" 
                onClick={toggleExpanded} 
                type="button" // Добавляем тип для кнопки
                aria-expanded={expanded} // Указываем состояние кнопки
                aria-label={expanded ? "Свернуть описание" : "Развернуть описание"} // Добавляем описания для доступности
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
            onClick={handlePrev}
            disabled={currentSlide === 0} // Disable on the first slide
          >
            {t('btn_prev')}
          </button>
          <button
            type="button"
            className="next"
            onClick={handleNext}
            disabled={currentSlide === onboardingSlides.length - 1} // Disable on the last slide
          >
            {t('btn_next')}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Onboarding;
