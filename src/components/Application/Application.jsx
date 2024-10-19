import "./Application.scss";
import Iphone_Emulator from "../../assets/Iphone-emulator.png";
import Magnum from "../../assets/images/application/magnum_left.png";
import Nomad from "../../assets/images/application/nomad_right.png";

const Application = () => {
  return (
    <section className="application section_wrapper">
        <img className="application_left" src={Magnum} alt="" />
        <img className="application_right" src={Nomad} alt="" />
        <h4>ПРЕДСТАВЛЯЕМ</h4>
        <h2>Приложение Alaqan</h2>
        <p>SuperApp для упрощения вашей финансовой жизни</p>
        <img src={Iphone_Emulator} alt="" />
    </section>
  )
}

export default Application