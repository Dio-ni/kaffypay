import React, { useState } from "react";
import "./TerminalType.scss";
import MobileTerminal from "../../assets/images/terminal_type/terminal1.png";
import StationaryTerminal from "../../assets/images/terminal_type/terminal2.png";
import { FaPlus } from "react-icons/fa6"; 

const TerminalType = () => {
  const [isExpanded, setIsExpanded] = useState([false, false]); 

  const toggleExpand = (index) => {
    const newState = [...isExpanded];
    newState[index] = !newState[index]; 
    setIsExpanded(newState);
  };

  return (
    <section className="terminal_type">
      <div className="terminal_type_container wrapper">
        <h2>Терминал для каждого</h2>
        <div className="terminals">
          <div className="terminals_card"
          onClick={() => toggleExpand(0)}>
            <div className="back_circle"></div>
            <div className="card_text">
              <h2>Мобильный</h2>
              <div
                className="circle_plus"
                
                style={{
                  transform: isExpanded[0] ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                  background: isExpanded[0] ? "#1D1D1F" : "#007AFF",
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: 'pointer',
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
            <p className={isExpanded[0] ? "visible" : "hidden"}>
              Компактный переносной терминал, удобен в любых условиях и месте.
            </p>
            <img
              src={MobileTerminal}
              alt=""
              style={{
                transform: isExpanded[0] ? "translateY(-10px) scale(1.1)" : "translateY(-60px) scale(1.1)",
                transition: "transform 0.3s linear",
              }}
            />
          </div>

          <div className="terminals_card" 
          onClick={() => toggleExpand(1)}>
            <div className="back_circle"></div>
            <div className="card_text">
              <h2>Стационарный</h2>
              <div
                className="circle_plus"
                
                style={{
                  transform: isExpanded[1] ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                  background: isExpanded[1] ? "#1D1D1F" : "#007AFF",
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: 'pointer',
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
            <p className={isExpanded[1] ? "visible" : "hidden"}>
              Настольный терминал с чековым принтером.
            </p>
            <img
              src={StationaryTerminal}
              alt=""
              style={{
                transform: isExpanded[1] ? "translateY(-30px) scale(0.9)" : "translateY(-60px) scale(0.9)",
                transition: "transform 0.3s linear",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalType;
