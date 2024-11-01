import "./Application.scss";
import React from "react";

import IphoneEmulator from "../../assets/images/application/phone.png";
import Magnum from "../../assets/images/application/magnum_left.png";
import Nomad from "../../assets/images/application/nomad_right.png";

function  Application () {
  return (
      <div className="application">
        <div className="container ">
          <div className="application_inner">
          <img className="application_left" src={Magnum} alt="" />
          <img className="application_right" src={Nomad} alt="" />
          <div className="application_text">
            <h4>INTRODUCING</h4>
            <h2>Alaqan Mobile App</h2>
            <p>SuperApp to simplify your financial life</p>
    
          </div>
          <img className="phone-emulator" src={IphoneEmulator} alt="" />
          </div>
        </div>
      </div>
  )
}

export default Application