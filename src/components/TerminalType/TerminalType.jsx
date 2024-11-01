import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6"; 
import "./TerminalType.scss";
import MobileTerminal from "../../assets/images/terminal_type/terminal1.png";
import StationaryTerminal from "../../assets/images/terminal_type/terminal2.png";

function TerminalType  ()  {
  const [isExpanded, setIsExpanded] = useState([false, false]); 

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
        <h2>Терминал для каждого</h2>
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
              <h2>Мобильный</h2>
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
              Компактный переносной терминал, удобен в любых условиях и месте.
            </p>
            </div>
            <img
              src={MobileTerminal}
              alt=""
              style={{
                transform: window.innerWidth <= 768 ? "" :( isExpanded[0] ? "translateY(40px) " : "translateY(-10px)"),
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
              
              <h2>Стационарный</h2>
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
              Настольный терминал с чековым принтером.
            </p>
            </div>
            <img
              src={StationaryTerminal}
              alt=""
              style={{
                transform: window.innerWidth <= 768 ? "" : ( isExpanded[1] ? "translateY(30px) scale(0.8) rotate(15deg) " : "translateY(-20px) scale(0.8) rotate(15deg) ") ,
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
