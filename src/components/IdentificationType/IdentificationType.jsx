 /* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
    id: "touch_id",
    title: 'description_titles.t2.title',
    icon: Fingerprint,
    properties: [
      { label: "FAR", value: 'description_titles.t2.far', colorClass: "red", icon: <FaCircleCheck /> },
      { label: "FRR", value: 'description_titles.t2.frr', colorClass: "red", icon: <IoIosCloseCircle /> },
      { label: "Возможность фальсификации", value: 'description_titles.t2.falsification_possibility', colorClass: "red", icon: <PiDetectiveFill /> },
      { label: "Неизменность", value: 'description_titles.t2.immutability', colorClass: "red", icon: <PiCopyFill /> },
      { label: "Внешние факторы", value: 'description_titles.t2.external_factors', colorClass: "red", icon: <PiGlobeHemisphereWestFill /> },
      { label: "Скорость", value: 'description_titles.t2.authentication_speed', icon: <HiLightningBolt /> },
      { label: "Бесконтактность", value: 'description_titles.t2.contactless_authentication', colorClass: "red", icon: <PiContactlessPaymentFill /> },
      { label: "Психологический комфорт", value: 'description_titles.t2.psychological_comfort', colorClass: "red", icon: <PiSmileyFill /> },
      { label: "Базовая стоимость решения", value: 'description_titles.t2.basic_cost', icon: <PiHandCoinsFill /> },
    ]
  },
  {
    id: "face_id",
    title: 'description_titles.t3.title',
    icon: FaceId,
    properties: [
      { label: "FAR", value: 'description_titles.t3.far', colorClass: "red", icon: <FaCircleCheck /> },
      { label: "FRR", value: 'description_titles.t3.frr', colorClass: "red", icon: <IoIosCloseCircle /> },
      { label: "Возможность фальсификации", value: 'description_titles.t3.falsification_possibility', colorClass: "red", icon: <PiDetectiveFill /> },
      { label: "Неизменность", value: 'description_titles.t3.immutability', colorClass: "red", icon: <PiCopyFill /> },
      { label: "Внешние факторы", value: 'description_titles.t3.external_factors', colorClass: "red", icon: <PiGlobeHemisphereWestFill /> },
      { label: "Скорость", value: 'description_titles.t3.authentication_speed', icon: <HiLightningBolt /> },
      { label: "Бесконтактность", value: 'description_titles.t3.contactless_authentication', icon: <PiContactlessPaymentFill /> },
      { label: "Психологический комфорт", value: 'description_titles.t3.psychological_comfort', colorClass: "red", icon: <PiSmileyFill /> },
      { 
        label: "Базовая стоимость решения", 
        value: 'description_titles.t3.basic_cost', 
        icon: <PiHandCoinsFill /> 
      },  
    ]
  },
  {
    id: "palm_id",
    title: 'description_titles.t4.title',
    icon: Alaqan,
    properties: [
      { label: "FAR", value: 'description_titles.t4.far', icon: <FaCircleCheck /> },
      { label: "FRR", value: 'description_titles.t4.frr', icon: <IoIosCloseCircle /> },
      { label: "Возможность фальсификации", value: 'description_titles.t4.falsification_possibility', icon: <PiDetectiveFill /> },
      { label: "Неизменность", value: 'description_titles.t4.immutability', icon: <PiCopyFill /> },
      { label: "Внешние факторы", value: 'description_titles.t4.external_factors', icon: <PiGlobeHemisphereWestFill /> },
      { label: "Скорость", value: 'description_titles.t4.authentication_speed', icon: <HiLightningBolt /> },
      { label: "Бесконтактность", value: 'description_titles.t4.contactless_authentication', icon: <PiContactlessPaymentFill /> },
      { label: "Психологический комфорт", value: 'description_titles.t4.psychological_comfort', icon: <PiSmileyFill /> },
      { label: "Базовая стоимость решения", value: 'description_titles.t4.basic_cost', icon: <PiHandCoinsFill /> },
    ]
  }
];



function IdentificationType  ()  {
  const { t } = useTranslation();
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
          <h3>{t('comparison')}</h3>
          <h1>{t('identification_methods')}</h1>
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
              <li> {t('description_titles.t1.far')}</li>
              <li>{t('description_titles.t1.frr')}</li>
              <li>{t('description_titles.t1.falsification_possibility')}</li>
              <li>{t('description_titles.t1.immutability')}</li>
              <li>{t('description_titles.t1.external_factors')}</li>
              <li>{t('description_titles.t1.authentication_speed')}</li>
              <li>{t('description_titles.t1.contactless_authentication')}</li>
              <li>{t('description_titles.t1.psychological_comfort')}</li>
              <li>{t('description_titles.t1.basic_cost')}</li>
            </ul>
          </div>

          <div className="options column type" 
                role="button"
                tabIndex={0}
                {...handlers}
                style={{ transform: `translateX(-${currentIndex * 82.5}vw)`, transition: 'transform 0.3s ease-in-out' }}>
            {identificationData.map((type, index) => (
              <div key={type.id} className="type_block">
                <div className={`type_title ${index === 2 ? "alaqan-green": ""} `}>
                  <h2>{t(type.title)}</h2>
                  <span><img src={type.icon} alt={`${type.title} Icon`} /></span>
                </div>
                <ul>
                {type.properties.map((property) => (
                  <li key={property.label}>
                    {property.icon && <span className="icon mobile">{property.icon}</span>}
                    <p className="type_description">
                      <span className="mobile mobile_span_title">{t(property.label)}</span>
                      { property.value &&  typeof property.value === "object" ? (
                        <>
                          <span>{t(property.value.text)}</span>
                          <span className="red"> {t(property.value.highlighted)}</span>
                        </>
                      ) : (
                        <span className={property.colorClass || ""}>{t(property.value)}</span>
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
