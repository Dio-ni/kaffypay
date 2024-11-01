import React, { useState } from 'react';
import { FaCircleCheck, FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { PiDetectiveFill, PiCopyFill, PiGlobeHemisphereWestFill, PiContactlessPaymentFill, PiSmileyFill, PiHandCoinsFill } from "react-icons/pi";
import { HiLightningBolt } from "react-icons/hi";
import { useSwipeable } from "react-swipeable";

import "./IdentificationType.scss";
import Alaqan from "../../assets/images/identification_type/Alaqan.svg";
import FaceId from "../../assets/images/identification_type/FaceId.svg";
import Fingerprint from "../../assets/images/identification_type/Fingerprint.svg";

const identificationData = [
  {
    id:"touch_id",
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
    id:"face_id",
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
    { 
        label: "Базовая стоимость решения", 
        value: { text: "2D – Средняя,", highlighted: "3D – Высокая" },  // Separated the highlighted text
        icon: <PiHandCoinsFill /> 
      },  
    ]
  },
  {
    id:"palm_id",
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


function IdentificationType  ()  {
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
    <section className="identification container">
      <div className="identification__container">
        <div className="identification_title">
          <h3>СРАВНЕНИЕ</h3>
          <h1>Способы идентификации</h1>
        </div>
        <div className="controls">
          <span
            role="button"
            tabIndex={0}
            onClick={handlePrevious}
            onKeyDown={(e) => e.key === 'Enter' && handlePrevious()}
          >
            <FaAngleLeft />
          </span>
          <span
            role="button"
            tabIndex={0}
            onClick={handleNext}
            onKeyDown={(e) => e.key === 'Enter' && handleNext()}
          >
            <FaAngleRight />
          </span>
        </div>


        <div className="comparison-container">
          <div className="column props">
            <span />
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

          <div className="options column type" 
                role="button"
                {...handlers}
                tabIndex={0}
                onMouseDown={handlers.onMouseDown}
                onTouchStart={handlers.onTouchStart}
                onTouchEnd={handlers.onTouchEnd}
                onTouchMove={handlers.onTouchMove}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight') handleNext();
                  if (e.key === 'ArrowLeft') handlePrevious();
                }}
                style={{ transform: `translateX(-${currentIndex * 82.5}vw)`, transition: 'transform 0.3s ease-in-out' }}>
            {identificationData.map((type, index) => (
              <div key={type.id} className="type_block">
                <div className={`type_title ${index === 2 ? "alaqan-green": ""} `}>
                  <h2>{type.title}</h2>
                  <span><img src={type.icon} alt={`${type.title} Icon`} /></span>
                </div>
                <ul>
                {type.properties.map((property) => (
                  <li key={property.label}>
                    {property.icon && <span className="icon mobile">{property.icon}</span>}
                    <p className="type_description">
                      <span className="mobile">{property.label}</span>
                      { property.value &&  typeof property.value === "object" ? (
                        <>
                          <span>{property.value.text}</span>
                          <span className="red"> {property.value.highlighted}</span>
                        </>
                      ) : (
                        <span className={property.colorClass || ""}>{property.value}</span>
                      )}
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
