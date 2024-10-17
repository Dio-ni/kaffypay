import "./Onboarding.scss";
import onboarding1 from "../../assets/onboarding-1.png";
import onboarding2 from "../../assets/onboarding-2.png";
import onboarding3 from "../../assets/onboarding-3.png";
import onboarding4 from "../../assets/onboarding-4.jpg";
import onboarding5 from "../../assets/onboarding-5.svg";

const Onboarding = () => {
  return (
    <section className="onboarding wrapper">
      <div className="onboarding__container">
        <h2>Онбординг в приложении</h2>
        <div className="steps-container">
          <div className="step">
            <img src={onboarding1} alt="Шаг 1" />
            <p>1. Пройдите регистрацию</p>
          </div>
          <div className="step">
            <img src={onboarding2} alt="Шаг 2" />
            <p>2. Добавьте карту</p>
          </div>
          <div className="step">
            <img src={onboarding3} alt="Шаг 3" />
            <p>3. Нажмите отсканировать QR</p>
          </div>
          <div className="step">
            <img src={onboarding4} alt="Шаг 4" />
            <p>4. Сканируйте QR на терминале</p>
          </div>
          <div className="step double-size">
            <img src={onboarding5} alt="Шаг 5" />
            <p>5. Сканируйте ладонь и платите ладонью</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
