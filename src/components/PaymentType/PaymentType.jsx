import "./PaymentType.scss";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

// import LineFront from "../../assets/images/payment_type/Line_front.png";
// import LineBack from "../../assets/images/payment_type/Line_back.png";
import PaymentList from "../../assets/images/payment_type/payment_list.png";
import BankCard from "../../assets/images/payment_type/bank_card.png";
// import BankCard2 from "../../assets/images/payment_type/bank_card_2.png"; 
// import BankCard3 from "../../assets/images/payment_type/bank_card_3.png"; 
// import BankCard4 from "../../assets/images/payment_type/bank_card_4.png"; // Импорт нового изображения
import Notification from "../../assets/images/payment_type/notification.png";

function PaymentType ()  {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // const [isScrolled, setIsScrolled] = useState(false);

  // const { scrollY } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end end"],
  // });

 
  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };
  const fadeInFromBottomCard2 = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const fadeInFromTop = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  // Анимация движения по оси X
  // const notificationX = useTransform(scrollY, [0,1], ["0%", "10%"]);
  
  // const bankCardX = useTransform(scrollY, [0,1], ["0%", "50%"]);
  // const bankCard2X = useTransform(scrollY, [3600,3800], ["0%", "30%"]); // Движение для BankCard2
  // const bankCard3X = useTransform(scrollY, [3600,3800], ["0%", "10%"]); // Движение для BankCard2
  // const bankCard4X = useTransform(scrollY, [3600,3800], ["0%", "-10%"]); // Движение для BankCard2


  return (
    <div className="payment_type" ref={ref}>
    <div className="container">
      <div className="payment_type_inner">
      <div className=" payment_type_container">
        <div className="payment_type_left">
        <p>PAYMENT METHOD</p>
          <h2>Any Card
          Will Do</h2>
        </div>
        <div className="payment_type_right">
          {/* <div className="line">
            <img className="line_front" src={LineFront} alt="LineFront" />
            <img className="line_back" src={LineBack} alt="LineBack" />
          </div> */}

          {/* Анимация появления и движения BankCard */}
          {/* <motion.img
            className="bank_card"
            src={BankCard4}
            alt="BankCard"
            initial=""
            animate={isVisible ? "visible" : "hidden"} // Появление
            variants={fadeInFromBottom}
            style={isScrolled ? { x: bankCardX } : {}} // Движение при прокрутке
          /> */}

          {/* Появление PaymentList */}
          <motion.img
            className="payment_list"
            src={PaymentList}
            alt="PaymentList"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInFromBottom}
          />

          {/* <motion.img
            className="bank_card"
            src={BankCard2}
            alt="BankCard"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"} // Появление
            variants={fadeInFromBottomCard2}
            style={isScrolled ? { x: bankCard2X } : {}} // Движение при прокрутке
          /> */}
          {/* <motion.img
            className="bank_card"
            src={BankCard3}
            alt="BankCard"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"} // Появление
            variants={fadeInFromBottomCard2}
            style={isScrolled ? { x: bankCard3X } : {}} // Движение при прокрутке
          /> */}
          <motion.img
            className="bank_card"
            src={BankCard}
            alt="BankCard"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} // Появление
            variants={fadeInFromBottomCard2}
            // style={isScrolled ? { x: bankCard4X } : {}} // Движение при прокрутке
          />

          {/* Анимация появления и движения Notification */}
          <motion.img
            className="notification"
            src={Notification}
            alt="Notification"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} // Появление
            variants={fadeInFromTop}
            // style={isScrolled ? { x: notificationX } : {}} // Движение при прокрутке
          />
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default PaymentType;
