import React, { useState } from "react";
import "./Onboarding.scss";
import onboarding1 from "../../assets/onboarding-1.png";
import onboarding2 from "../../assets/onboarding-2.png";
import onboarding3 from "../../assets/onboarding-3.png";
import onboarding4 from "../../assets/onboarding-4.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useSwipeable } from "react-swipeable";

const Onboarding = () => {
  const slides = [
    {
      title: "Регистрация",
      img: onboarding1,
      description: "Пройдите простую регистрацию, введите номер телефона, подтвердите СМС кодом и введите имя."
    },
    {
      title: "Добавьте карту",
      img: onboarding2,
      description: "Нажмите Добавить карту и введите реквизиты карты."
    },
    {
      title: "Продолжите регистрацию",
      img: onboarding3,
      description: "Нажмите Отсканировать QR на главном экране."
    },
    {
      title: "Сканируйте QR",
      img: onboarding4,
      description: "Наведите камеру на QR на терминале Alaqan, чтобы связать его с вашим аккаунтом."
    },
    {
      title: "Сканируйте QR",
      img: onboarding4,
      description: "Наведите камеру на QR на терминале Alaqan, чтобы связать его с вашим аккаунтом."
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const stepWidth = window.innerWidth <= 768 ? 50 : 20; // Step width based on viewport size

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleStepClick = (index) => {
    setCurrentSlide(index); // Update the current slide based on the clicked index
  };

  const toggleExpanded = () => setExpanded(!expanded);
  const handlers = useSwipeable({
    onSwipedLeft: handleNext ,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const gap=30;
  const paddingLeft = `132vw`;


  return (
    <section className="onboarding wrapper">
      <div className="onboarding__container">
        <h2>Онбординг в приложении</h2>

        <div className="steps-container" {...handlers}>
          <div
            className="steps-track"
            style={{
              transform: `translateX(calc(${-currentSlide * stepWidth}vw - ${currentSlide * gap}px))`,
              transition: "transform 0.3s ease",
              paddingLeft: paddingLeft,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`step ${index === currentSlide ? "step--active" : ""}`}
                onClick={() => handleStepClick(index)}
                style={{ width: `${stepWidth}vw` }} // Set width of each step
              >
                <img src={slide.img} alt={`Шаг ${index + 1}`} />
                <div className="overlay" /> {/* Overlay for the image */}
              </div>
            ))}
          </div>

          <div className="step-details">
            <div className="step-num">
              <div className="line"></div>
              <ul>
                {slides.map((_, index) => (
                  <li
                    key={index}
                    className={`step ${index === currentSlide ? "num-active" : ""}`}
                    onClick={() => handleStepClick(index)} // Add click handler to each step
                    style={{ cursor: "pointer" }} // Change cursor to pointer for clickability
                  >
                    {index + 1} {/* Display the step number */}
                  </li>
                ))}
              </ul>
            </div>

            <h1>{slides[currentSlide].title}</h1>
            <div
              className="step-description"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: expanded || window.innerWidth > 768 ? "unset" : 2,
                WebkitBoxOrient: "vertical",
                overflow: expanded || window.innerWidth > 768 ? "visible" : "hidden",
                textOverflow: "ellipsis",
                transition: "height 0.3s ease",
                height: expanded || window.innerWidth > 768 ? "auto" : "3em",
              }}
            >
              {slides[currentSlide].description}
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
            disabled={currentSlide === slides.length - 1} // Disable on the last slide
          >
            Далее
          </button>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
