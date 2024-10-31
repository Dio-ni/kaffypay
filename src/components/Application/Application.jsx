import "./Application.scss";
import Iphone_Emulator from "../../assets/images/application/phone.png";
import Magnum from "../../assets/images/application/magnum_left.png";
import Nomad from "../../assets/images/application/nomad_right.png";

const Application = () => {
  return (
    <section className="application section_wrapper">
        <img className="application_left" src={Magnum} alt="" />
        <img className="application_right" src={Nomad} alt="" />
        <div className="application_text">
          <h4>INTRODUCING</h4>
          <h2>Alaqan Mobile App</h2>
          <p>SuperApp to simplify your financial life</p>
  
        </div>
        <img className="phone-emulator" src={Iphone_Emulator} alt="" />
    </section>
  )
}

export default Application