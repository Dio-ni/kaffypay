import "./PaymentType.scss";
import LineFront from "../../assets/images/payment_type/Line_front.png";
import LineBack from "../../assets/images/payment_type/Line_back.png";
import PaymentList from "../../assets/images/payment_type/payment_list.png";
import BankCard from "../../assets/images/payment_type/bank_card.png";
import BankCard2 from "../../assets/images/payment_type/bank_card_2.png"; // Импорт нового изображения
import Notification from "../../assets/images/payment_type/notification.png";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

const PaymentType = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Current scrollY value:", latest);

    // Управление видимостью элементов на основе скролла
    if (latest > 3300) {
      setIsVisible(true); // Показать элементы
    } else {
      setIsVisible(false); // Скрыть элементы
    }

    // Движение элементов при прокрутке
    if (latest >3500) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };
  const fadeInFromBottomCard2 = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const fadeInFromTop = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  // Анимация движения по оси X
  const notificationX = useTransform(scrollY, [3600,3900], ["0%", "50%"]);

  
  const bankCardX = useTransform(scrollY, [3700,3900], ["0%", "50%"]);
  const bankCard2X = useTransform(scrollY, [3700,3900], ["0%", "30%"]); // Движение для BankCard2
  const bankCard3X = useTransform(scrollY, [3700,3900], ["0%", "10%"]); // Движение для BankCard2
  const bankCard4X = useTransform(scrollY, [3700,3900], ["0%", "-10%"]); // Движение для BankCard2


  return (
    <section className="payment_type section_wrapper" ref={ref}>
      <div className=" payment_type_container">
        <div className="payment_type_left">
          <p>СПОСОБ ОПЛАТЫ</p>
          <h2>Подойдет любая карта</h2>
        </div>
        <div className="payment_type_right">
          <div className="line">
            <img className="line_front" src={LineFront} alt="LineFront" />
            <img className="line_back" src={LineBack} alt="LineBack" />
          </div>

          {/* Анимация появления и движения BankCard */}
          <motion.img
            className="bank_card"
            src={BankCard}
            alt="BankCard"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"} // Появление
            variants={fadeInFromBottom}
            style={isScrolled ? { x: bankCardX } : {}} // Движение при прокрутке
          />

          {/* Появление PaymentList */}
          <motion.img
            className="payment_list"
            src={PaymentList}
            alt="PaymentList"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInFromBottom}
          />

          {/* Анимация появления и движения BankCard2 */}
          {/* <motion.img
            className="bank_card_2" // Добавьте соответствующий класс для стилей
            src={BankCard2}
            alt="BankCard2"
            initial="hidden"
            animate={isScrolled ? "visible" : "hidden"} // Появление при скролле
            variants={fadeInFromBottomCard2}
            style={isScrolled ? { x: bankCard2X } : {}} // Движение при прокрутке
          />
          <motion.img
            className="bank_card_2" // Добавьте соответствующий класс для стилей
            src={BankCard2}
            alt="BankCard2"
            initial="hidden"
            animate={isScrolled ? "visible" : "hidden"} // Появление при скролле
            variants={fadeInFromBottomCard2}
            style={isScrolled ? { x: bankCard3X } : {}} // Движение при прокрутке
          />
          <motion.img
            className="bank_card_2" // Добавьте соответствующий класс для стилей
            src={BankCard2}
            alt="BankCard2"
            initial="hidden"
            animate={isScrolled ? "visible" : "hidden"} // Появление при скролле
            variants={fadeInFromBottomCard2}
            style={isScrolled ? { x: bankCard4X } : {}} // Движение при прокрутке
          /> */}
          <motion.img
            className="bank_card"
            src={BankCard}
            alt="BankCard"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"} // Появление
            variants={fadeInFromBottomCard2}
            style={isScrolled ? { x: bankCard2X } : {}} // Движение при прокрутке
          />
          <motion.img
            className="bank_card"
            src={BankCard}
            alt="BankCard"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"} // Появление
            variants={fadeInFromBottomCard2}
            style={isScrolled ? { x: bankCard3X } : {}} // Движение при прокрутке
          />
          <motion.img
            className="bank_card"
            src={BankCard}
            alt="BankCard"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"} // Появление
            variants={fadeInFromBottomCard2}
            style={isScrolled ? { x: bankCard4X } : {}} // Движение при прокрутке
          />

          {/* Анимация появления и движения Notification */}
          <motion.img
            className="notification"
            src={Notification}
            alt="Notification"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"} // Появление
            variants={fadeInFromTop}
            style={isScrolled ? { x: notificationX } : {}} // Движение при прокрутке
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentType;
