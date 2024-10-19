import React, { useState } from "react";
import "./Onboarding.scss";
import onboarding1 from "../../assets/onboarding-1.png";
import onboarding2 from "../../assets/onboarding-2.png";
import onboarding3 from "../../assets/onboarding-3.png";
import onboarding4 from "../../assets/onboarding-4.jpg";

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
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="onboarding wrapper">
      <div className="onboarding__container">
        <h2>Онбординг в приложении</h2>

        <div className="steps-container">
          <div
            className="steps-track"
            style={{
              transform: `translateX(${-currentSlide * 430}px)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`step ${index === currentSlide ? "active" : ""}`}
              >
                <div className="image-container">
                  <img src={slide.img} alt={`Шаг ${index + 1}`} />
                  <div className="overlay" /> {/* Overlay for the image */}
                </div>
                {/* <p>
                  {index + 1}. {slide.title}
                </p> */}
              </div>
            ))}
          </div>
          
          <div className="step-details">
            <div className="step-num">
            <div className="line"></div>
            <ul>
                <li className={`step ${0 === currentSlide ? "num-active" : ""}`}>1</li>
                <li className={`step ${1 === currentSlide ? "num-active" : ""}`}>2</li>
                <li className={`step ${2 === currentSlide ? "num-active" : ""}`}>3</li>
                <li className={`step ${3 === currentSlide ? "num-active" : ""}`}>4</li>
                <li className={`step ${4 === currentSlide ? "num-active" : ""}`}>5</li>
            </ul>
            </div>

            <h1>{slides[currentSlide].title}</h1>
            <p>{slides[currentSlide].description}</p>
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
          Вперед
        </button>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
