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

import Bag from "./assets/images/payment_evolution/grey/grain-bag.png";
import BagHover from "./assets/images/payment_evolution/hover/grain-bag.png";




export const paymentEvolutions=[
    { 
        id:1,
        img:Terminal,
        hoverImg:TerminalHover,
        years:"2024",
        type:"Alaqan Pay",
        description:"В 2018 году Alaqan начал разработку биометрии вен ладони. Через 6 лет продукт стал точной и быстрой системой для оплаты. В 2024 году первые точки оплаты появились в Казахстане и распространяются по миру.",
        features:            
        ["Всегда с тобой",
            "Подделать невозможно",
            "Невозможно украсть, забыть, потерять",
            "Высокая точность",
            "Высокая скорость",
            "Не нужен интернет",
            "Не нужно обновлять"]
        
      },
    
    { 
        id:2,
        img:Face_Recognition,
        years:"2013",
        type:"Face Pay",
        description:"В июле 2013 года Uniqul запустила первую в мире платежную систему с распознаванием лиц, что стало важным шагом к интеграции этой технологии в оплату.",
        features:            
        ["Низкая точность",
            "Низкая скорость",
            "Определенное расположение лица",
            "Большое устройство ",
            "Сложности для людей разного роста",
            "Изменение внешности и аксессуары",
            "Высокая стоимость"]

    },
    { 
      id:3,
      img:Phone,
      years:"1994-2010",
      type:"NFC и QR",
      description:"NFC, появившийся в 2000-х, применяется для бесконтактных платежей через карты и смартфон. QR-коды, разработанные в 1994 году в Японии, стали использоваться для платежей только с 2010-х.",
      features:[
        "Нужен телефон",
        "Нужен интернет",
        "Телефон может разрядиться",
        "Много времени на оплату",
        "Высокая комиссия"
      ]
  },
    { 
        id:4,
        img:Cart,
        years:"1950",
        type:"Банковские карты",
        description:"Банковские карты появились в середине XX века. Diners Club выпустила первую кредитную карту в 1950 году, а в 1958 году Bank of America создал BankAmericard, ставшую позже Visa.",
        features:[
          "Нужно носить с собой",
          "Можно потерять",
          "Много времени на оплату",
          "Высокая комиссия"
        ]
    },
    { 
        id:5,
        img:Cash,
        years:"7 век",
        type:"Бумажные деньги",
        description:"Первые бумажные деньги появились в Китае в VII веке при династии Тан. К XI веку они стали официальным средством обмена.",
        features:[
          "Нужно носить с собой",
          "Можно потерять",
          "Может износиться или повредиться",
          "Не гегиенично"
        ]
    },
    { 
        id:6,
        img:Coin,
        years:"7 век до н.э.",
        type:"Монеты",
        description:"Первые металлические монеты появились в VII веке до н.э. в Лидии, на территории современной Турции. Они стали первым стандартизированным средством обмена.",
        features:[
          "Нужно носить с собой",
          "Можно потерять",
          "Тяжелый вес",
          "Не гегиенично"
        ]
    },
    { 
      id:7,
      img:Bag,
      years:"Период неолита",
      type:"Бартер",
      description:"Бартер — древнейшая форма торговли, когда товары и услуги обменивались напрямую. Эта система существовала до появления денег, но имела сложности с оценкой и совпадением нужд.",
      features:[
        "Сложность высчитать эквивалент",
        "Нужно носить с собой",
          "Можно потерять",
          "Тяжелый вес",
          "Не гегиенично",
          "Транспортировка",
          "Хранение"
      ]
    }
    

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
  