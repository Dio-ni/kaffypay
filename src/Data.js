import Phone from "./assets/images/payment_evolution/grey/phone-.png";
import FaceRecognition from "./assets/images/payment_evolution/grey/face-recognition-biometrics.png";
import Terminal from "./assets/images/payment_evolution/grey/terminal.png";
import TerminalHoverRu from "./assets/images/payment_evolution/hover/ru/terminal.png";
import TerminalHoverEng from "./assets/images/payment_evolution/hover/eng/terminal.png";
import Cart from "./assets/images/payment_evolution/grey/image 71.png";
import Cash from "./assets/images/payment_evolution/grey/cash-banknote.png";
import Coin from "./assets/images/payment_evolution/grey/coin-money.png";

import onboarding1en from "./assets/images/onboarding/eng/on1.png";
import onboarding2en from "./assets/images/onboarding/eng/on2.png";
import onboarding3en from "./assets/images/onboarding/eng/on3.png";
import onboarding4en from "./assets/images/onboarding/eng/on4.png";
import onboarding5en from "./assets/images/onboarding/eng/on5.png";

import onboarding1ru from "./assets/images/onboarding/ru/on1.png";
import onboarding2ru from "./assets/images/onboarding/ru/on2.png";
import onboarding3ru from "./assets/images/onboarding/ru/on3.png";
import onboarding4ru from "./assets/images/onboarding/ru/on4.png";
import onboarding5ru from "./assets/images/onboarding/ru/on5.png";
import Bag from "./assets/images/payment_evolution/grey/grain-bag.png";







export const paymentEvolutions=[
  { 
      id:1,
      img:Terminal,
      hoverImgRu:TerminalHoverRu,
      hoverImgEng:TerminalHoverEng,
      years:"2024",
      type:'evolutions.e1.type',
      description:'evolutions.e1.text',
  },
  
  { 
      id:2,
      img:FaceRecognition,
      years:"2013",
      type:'evolutions.e2.type',
      description:'evolutions.e2.text',
  },
  { 
    id:3,
    img:Phone,
    years:"1994-2010",
    type:'evolutions.e3.type',
    description:'evolutions.e3.text',},
  { 
      id:4,
      img:Cart,
      years:"1950",
      type:'evolutions.e4.type',
      description:'evolutions.e4.text',},
  { 
      id:5,
      img:Cash,
      years:'evolutions.e5.years',
      type:'evolutions.e5.type',
      description:'evolutions.e5.text', },
  { 
      id:6,
      img:Coin,
      years:'evolutions.e6.years',
      type:'evolutions.e6.type',
      description:'evolutions.e6.text',},
  { 
    id:7,
    img:Bag,
    years:'evolutions.e7.years',
    type:'evolutions.e7.type',
    description:'evolutions.e7.text',}
  

];

export const onboardingSlides = [
  {
    title: 'onboarding.o1.sign_up',
    imgRu: onboarding1ru,
    imgEn: onboarding1en,
    description:'onboarding.o1.text',

  },
  {
    title: 'onboarding.o2.add_card',
    imgRu: onboarding2ru,
    imgEn: onboarding2en,
    description:'onboarding.o2.text',
  },
  {
    title: 'onboarding.o3.type',
    imgRu: onboarding3ru,
    imgEn: onboarding3en,
    description:'onboarding.o3.text',
  },
  {
    title: 'onboarding.o4.type',
    imgRu: onboarding4ru,
    imgEn: onboarding4en,
    description:'onboarding.o4.text'
  },
  {
    title: 'onboarding.o5.type',
    imgRu: onboarding5ru,
    imgEn: onboarding5en,
    description:'onboarding.o5.text',
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
  