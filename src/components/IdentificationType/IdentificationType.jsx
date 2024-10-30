import React, { useState } from 'react';
import "./IdentificationType.scss";
import Alaqan from "../../assets/images/identification_type/Alaqan.svg";
import FaceId from "../../assets/images/identification_type/FaceId.svg";
import Fingerprint from "../../assets/images/identification_type/Fingerprint.svg";
import { FaCircleCheck, FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { PiDetectiveFill, PiCopyFill, PiGlobeHemisphereWestFill, PiContactlessPaymentFill, PiSmileyFill, PiHandCoinsFill } from "react-icons/pi";
import { HiLightningBolt } from "react-icons/hi";
import { useSwipeable } from "react-swipeable";

const identificationData = [
  {
    title: "Touch ID",
    icon: Fingerprint,
    properties: [
      { label: "FAR", value: "0,001%", colorClass: "red", icon: <FaCircleCheck /> },
      { label: "FRR", value: "0,06%", colorClass: "red", icon: <IoIosCloseCircle /> },
      { label: "Возможность фальсификации", value: "Открытая биометрия", colorClass: "red", icon: <PiDetectiveFill /> },
      { label: "Неизменность", value: "Порезы, воспаления и прочее меняют структуру", colorClass: "red", icon: <PiCopyFill /> },
      { label: "Внешние факторы", value: "Влажность, грязь", colorClass: "red", icon: <PiGlobeHemisphereWestFill /> },
      { label: "Скорость", value: "Высокая", icon: <HiLightningBolt /> },
      { label: "Бесконтактность", value: "Нет", colorClass: "red", icon: <PiContactlessPaymentFill /> },
      { label: "Психологический комфорт", value: "Антисанитария, ассоциация с криминалистикой", colorClass: "red", icon: <PiSmileyFill /> },
      { label: "Базовая стоимость решения", value: "Низкая", icon: <PiHandCoinsFill /> },
    ]
  },
  {
    title: "Face ID",
    icon: FaceId,
    properties: [
      { label: "FAR", value: "0,001%", colorClass: "red", icon: <FaCircleCheck /> },
      { label: "FRR", value: "2,5%", colorClass: "red", icon: <IoIosCloseCircle /> },
      { label: "Возможность фальсификации", value: "Динамичная видимая биометрия", colorClass: "red", icon: <PiDetectiveFill /> },
      { label: "Неизменность", value: "Меняется в течение всей жизни", colorClass: "red", icon: <PiCopyFill /> },
      { label: "Внешние факторы", value: "Аксессуары, волосы", colorClass: "red", icon: <PiGlobeHemisphereWestFill /> },
      { label: "Скорость", value: "Средняя", icon: <HiLightningBolt /> },
      { label: "Бесконтактность", value: "Да", icon: <PiContactlessPaymentFill /> },
      { label: "Психологический комфорт", value: "Сложности для людей с высоким и низким ростом", colorClass: "red", icon: <PiSmileyFill /> },
      { label: "Базовая стоимость решения", value: "2D – Средняя, 3D – Высокая", colorClass: "red", icon: <PiHandCoinsFill /> },
    ]
  },
  {
    title: "Palm ID",
    icon: Alaqan,
    properties: [
      { label: "FAR", value: "0,0008%", icon: <FaCircleCheck /> },
      { label: "FRR", value: "0,01%", icon: <IoIosCloseCircle /> },
      { label: "Возможность фальсификации", value: "Статичная невидимая биометрия", icon: <PiDetectiveFill /> },
      { label: "Неизменность", value: "Только глубокие порезы ладони (редкий случай)", icon: <PiCopyFill /> },
      { label: "Внешние факторы", value: "–", icon: <PiGlobeHemisphereWestFill /> },
      { label: "Скорость", value: "Высокая", icon: <HiLightningBolt /> },
      { label: "Бесконтактность", value: "Да", icon: <PiContactlessPaymentFill /> },
      { label: "Психологический комфорт", value: "Новинка для пользователей", icon: <PiSmileyFill /> },
      { label: "Базовая стоимость решения", value: "Средняя", icon: <PiHandCoinsFill /> },
    ]
  }
];


const IdentificationType = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < identificationData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section className="identification wrapper">
      <div className="identification__container">
        <div className="title">
          <h3>СРАВНЕНИЕ</h3>
          <h1>Способы идентификации</h1>
        </div>
        <div className="controls">
          <span onClick={handlePrevious}><FaAngleLeft /></span>
          <span onClick={handleNext}><FaAngleRight /></span>
        </div>

        <div className="comparison-container">
          <div className="column props">
            <span></span>
            <ul>
              <li>FAR</li>
              <li>FRR</li>
              <li>Возможность фальсификации</li>
              <li>Неизменность</li>
              <li>Внешние факторы</li>
              <li>Скорость</li>
              <li>Бесконтактность</li>
              <li>Психологический комфорт</li>
              <li>Базовая стоимость решения</li>
            </ul>
          </div>

          <div className="options column type" {...handlers}  style={{ transform: `translateX(-${currentIndex * 82.5}vw)`, transition: 'transform 0.3s ease-in-out' }}>
            {identificationData.map((type, index) => (
              <div key={index} className="type_block">
                <div className="type_title">
                  <h2>{type.title}</h2>
                  <span><img src={type.icon} alt={`${type.title} Icon`} /></span>
                </div>
                <ul>
                  {type.properties.map((property, i) => (
                    <li key={i}>
                      {property.icon && <span className="icon">{property.icon}</span>}
                      <p className="type_description">
                        <span>{property.label}</span>
                        <span className={property.colorClass || ""}>{property.value}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentificationType;
