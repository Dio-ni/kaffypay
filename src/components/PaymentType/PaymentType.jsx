import "./PaymentType.scss";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { useTranslation } from 'react-i18next';

import PaymentListRu from "../../assets/images/payment_type/ru/payment_list.png";
import BankCardRu from "../../assets/images/payment_type/ru/bank_card.png";
import NotificationRu from "../../assets/images/payment_type/ru/notification.png";

import PaymentListEn from "../../assets/images/payment_type/eng/payment_list.png";
import BankCardEn from "../../assets/images/payment_type/eng/bank_card.png";
import NotificationEn from "../../assets/images/payment_type/eng/notification.png";

function PaymentType ()  {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t , i18n} = useTranslation();
  
 
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
        <p>{t('payment_method')}</p>
          <h2 
         style={{
          maxWidth: i18n.language === 'ru' ? '100%' : '300px'
        }}
         >{t('any_card_will_do')}</h2>
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
            src={i18n.language === 'ru' ? PaymentListRu:PaymentListEn}
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
            src={i18n.language === 'ru' ? BankCardRu: BankCardEn}
            alt="BankCard"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} // Появление
            variants={fadeInFromBottomCard2}
            // style={isScrolled ? { x: bankCard4X } : {}} // Движение при прокрутке
          />

          {/* Анимация появления и движения Notification */}
          <motion.img
            className="notification"
            src={i18n.language === 'ru' ? NotificationRu:NotificationEn}
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
