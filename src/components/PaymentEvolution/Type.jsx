import React, { useState } from "react";
import './PaymentEvolution.scss';
import TerminalGreen from "../../assets/terminal-green.png";

export default function Type({ id,  img,hoverImg, years,isSelected, type,onClick }) {
  const [currentImg, setCurrentImg] = useState(img); 

  const handleMouseEnter = () => {
    if (!isSelected) setCurrentImg(hoverImg); 
  };

  const handleMouseLeave = () => {
    if (!isSelected) setCurrentImg(img); 
  };

  const handleOnClick = () => {
    onClick(); 
    setCurrentImg(hoverImg);
  };

  return (
    <div className="payment_evolution_card" onClick={handleOnClick}>
      <div 
        className= {`imageBlock ${isSelected ? (id===1 ? "selectedTypeGreen" : "selectedType" ): ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} 
      >
        <img src= {` ${(id ==1 && isSelected) ? TerminalGreen: currentImg} `}
         alt={years}    className={` ${id === 1 ? "terminalAlaqan" : ""} `}/>
      </div>
      <h3>{years}</h3>
      <span>{type}</span>
    </div>
  );
}
