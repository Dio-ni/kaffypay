import Carts from "./assets/carts.png";
import Phone from "./assets/images/payment_evolution/grey/phone-.png";
import PhoneHover from "./assets/images/payment_evolution/hover/phone.png";
import Face_Recognition from "./assets/images/payment_evolution/grey/face-recognition-biometrics.png";
import Face_RecognitionHover from "./assets/images/payment_evolution/hover/face-recognition-biometrics.png";
import Terminal from "./assets/images/payment_evolution/grey/terminal.png";
import TerminalHover from "./assets/images/payment_evolution/hover/terminal.png";
import Cart from "./assets/images/payment_evolution/grey/image 71.png";
import CartHover from "./assets/images/payment_evolution/hover/image 71.png";
import Cash from "./assets/images/payment_evolution/grey/cash-banknote.png";
import CashHover from "./assets/images/payment_evolution/hover/cash-banknote.png";
import Coin from "./assets/images/payment_evolution/grey/coin-money.png";
import CoinHover from "./assets/images/payment_evolution/hover/coin-money.png";

import onboarding1 from "./assets/images/onboarding/on1.png";
import onboarding2 from "./assets/images/onboarding/on2.png";
import onboarding3 from "./assets/images/onboarding/on3.png";
import onboarding4 from "./assets/images/onboarding/on4.png";
import onboarding5 from "./assets/images/onboarding/on5.png";
import Bag from "./assets/images/payment_evolution/grey/grain-bag.png";
import BagHover from "./assets/images/payment_evolution/hover/grain-bag.png";




export const paymentEvolutions=[
    { 
        id:1,
        img:Terminal,
        hoverImg:TerminalHover,
        years:"2024",
        type:"Alaqan Pay",
        description:"In 2018, Alaqan began developing palm vein biometrics. After 6 years, the product has become an accurate and fast payment system. In 2024, the first payment points appeared in Kazakhstan and spread around the world.",
    },
    
    { 
        id:2,
        img:Face_Recognition,
        years:"2013",
        type:"Face Pay",
        description:"In July 2013, Uniqul launched the world's first facial recognition payment system, which was an important step towards integrating this technology into payment.",

    },
    { 
      id:3,
      img:Phone,
      years:"1994-2010",
      type:"NFC и QR",
      description:"NFC, which appeared in the 2000s, is used for contactless payments via cards and smartphones.QR codes, developed in 1994 in Japan, have been used for payments only since the 2010s."
  },
    { 
        id:4,
        img:Cart,
        years:"1950",
        type:"Bank Cards",
        description:"Bank cards appeared in the middle of the XX century.Diners Club issued the first credit card in 1950, and in 1958, Bank of America created BankAmericard, which later became Visa.",
    },
    { 
        id:5,
        img:Cash,
        years:"7th century",
        type:"Paper Money",
        description:"The first paper money appeared in China in the 7th century during the Tang Dynasty. By the 11th century, they had become an official medium of exchange.",
    },
    { 
        id:6,
        img:Coin,
        years:"7th century BC",
        type:"Coins",
        description:"The first metal coins appeared in the VII century BC in Lydia, on the territory of modern Turkey. They became the first standardized medium of exchange."
    },
    { 
      id:7,
      img:Bag,
      years:"Neolithic",
      type:"Barter",
      description:"Barter is the oldest form of trade, when goods and services were exchanged directly. This system existed before the advent of money, but had difficulties with assessing and matching needs."
    }
    

];

export const onboardingSlides = [
  {
    title: "Sign up",
    img: onboarding1,
    description:"Go through a simple registration, enter your phone number, confirm with an SMS code and enter your name.",

  },
  {
    title: "Add a card",
    img: onboarding2,
    description: "Click Add Card and enter the card details.",
  },
  {
    title: "Continue registration",
    img: onboarding3,
    description:"Click Scan QR on the home screen.",
  },
  {
    title: "Scan the QR code",
    img: onboarding4,
    description:"Point the camera at the QR code on the Alaqan terminal to link it to your account."
  },
  {
    title: "Done",
    img: onboarding5,
    description:"Scan biometrics and pay with your palm.",
  },
];
export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  