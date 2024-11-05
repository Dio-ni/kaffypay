import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6"; 
import { useTranslation } from 'react-i18next';

import "./TerminalType.scss";
import MobileTerminalRu from "../../assets/images/terminal_type/ru/terminal1.png";
import StationaryTerminalRu from "../../assets/images/terminal_type/ru/terminal2.png";
import MobileTerminalEn from "../../assets/images/terminal_type/eng/terminal1.png";
import StationaryTerminalEn from "../../assets/images/terminal_type/eng/terminal2.png";

function TerminalType  ()  {
  const [isExpanded, setIsExpanded] = useState([false, false]); 

  const { t,i18n } = useTranslation();
  const toggleExpand = (index) => {
    const newState = [...isExpanded];
    newState[index] = !newState[index]; 
    setIsExpanded(newState);
  };

  return (
    
    <div className="terminal_type">
      <div className="container">
        <div className="terminal_type_inner">
          
      <div className="terminal_type_container ">
        <h2>{t('terminal_for_everyone')} </h2>
        <div className="terminals">
        <div
            className="terminals_card"
            onClick={() => toggleExpand(0)}
            onKeyDown={(e) => e.key === 'Enter' && toggleExpand(0)}
            role="button"
            tabIndex={0}
          >
            <div className="back_circle"/>
            <div>
            <div className="card_text">
              <h2>{t('mobile_terminal')}</h2>
              <div
                className="circle_plus"
                
                style={{
                  transform: isExpanded[0] ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                  background: isExpanded[0] ? "#1D1D1F" : "#007AFF",
                  
              }}
              >
                <FaPlus
                  style={{
                    color: "#fff",
                    fontSize: "24px",
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>
            </div>
            <p className={window.innerWidth <= 768 ? "" : (isExpanded[0] ? "vis" : "hid")}>
              {t('mobile_text')}
            </p>
            </div>
            <img
              src={i18n.language === 'ru' ? MobileTerminalRu:MobileTerminalEn}
              alt=""
              style={{
                transform: window.innerWidth <= 768 ? "" :( isExpanded[0] ? "translateY(50px) " : "translateY(-15px)"),
                transition: "transform 0.3s ease-in-out",
              }}
            />
            
          </div>

          <div 
          className="terminals_card"
          onClick={() => toggleExpand(1)}
          onKeyDown={(e) => e.key === 'Enter' && toggleExpand(1)}
          role="button"
          tabIndex={0}>
            <div className="back_circle"/>
            <div>
            <div className="card_text">
              
              <h2>{t('stationary_terminal')}</h2>
              <div
                className="circle_plus"
                
                style={{
                  transform: isExpanded[1] ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                  background: isExpanded[1] ? "#1D1D1F" : "#007AFF",
                  
                }}
              >
                <FaPlus
                  style={{
                    color: "#fff",
                    fontSize: "24px",
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>
            </div>
            <p className={ window.innerWidth <= 768 ? "" : (isExpanded[1] ? "vis" : "hid")}>
                  {t('stationary_text')}
            </p>
            </div>
            <img
              src={i18n.language === 'ru' ? StationaryTerminalRu:StationaryTerminalEn}
              alt=""
              style={{
                transform: window.innerWidth <= 768 ? "" : ( isExpanded[1] ? "translateY(60px) scale(0.8) rotate(15deg) " : " scale(0.8) rotate(15deg) ") ,
                transition: "transform 0.3s ease-in-out",
              }}
            />
          </div>
        </div>
      </div>
    </div>
      </div>
      </div>
  );
};

export default TerminalType;
