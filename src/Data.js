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
        description:"В 2018 году команда Alaqan начинает исследования и разработку биометрии вен ладони. Продукт проходит 6-летнюю проверку и доработку, пока не становится самой точной и быстрой биометрией, что позволяет смело внедрять Alaqan в процесс оплаты. <br /> В 2024 году первые точки оплаты появились в Казахстане и постепенно появляются по всему Казахстану и миру.",
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
        hoverImg:Face_RecognitionHover,
        years:"2013",
        type:"Face Pay",
        description:"В июле 2013 года финская компания Uniqul запустила и опробовала первую в мире платежную систему, основанную на распознавании лиц. Хотя технология ещё не была широко распространена, это был один из первых шагов к интеграции распознавания лица в процессы оплаты.",
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
      hoverImg:PhoneHover,
      years:"1994-2010",
      type:"NFC и QR",
      description:"QR-коды, разработанные в Японии в 1994 году, активно применяются для платежей с 2010-х годов. Они позволяют пользователям сканировать код с помощью смартфона для осуществления платежей. NFC появился в 2000-х годах и используется для бесконтактных платежей через карты и смартфоны.",
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
        hoverImg:CartHover,
        years:"1950",
        type:"Карты",
        description:"Банковские карты появились в середине XX века как удобный способ безналичных расчетов. Первая кредитная карта была выпущена в 1950 году компанией Diners Club, она использовалась для оплаты услуг в ресторанах и отелях. В 1958 году Bank of America выпустил первую массовую кредитную карту, называемую BankAmericard, которая впоследствии стала Visa.",
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
        hoverImg:CashHover,
        years:"7 век",
        type:"Бумажные деньги",
        description:"Первые бумажные деньги появились в Китае в VII веке во время династии Тан. Они были введены в оборот из-за нехватки металла для монет и использовались как заменители тяжёлых монет. В начале XI века, при династии Сун, бумажные деньги стали официально использоваться правительством и распространились по всей стране. Эти деньги представляли собой расписки, которые можно было обменять на товары или монеты, и стали основным средством обмена в Китае.",
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
        hoverImg:CoinHover,
        years:"7 век до н.э.",
        type:"Монеты",
        description:"Первые металлические монеты появились около VII века до н.э. в Лидии, древнем государстве на территории современной Турции. Эти монеты изготавливались из природного сплава золота и серебра, и использовались для упрощения торговли. Лидийские монеты стали первым стандартизированным и широко признанным средством обмена, что привело к их распространению в других частях мира.",
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
      hoverImg:BagHover,
      years:"Период неолита",
      type:"Бартер",
      description:"Бартер — это самая древняя форма торговли, при которой люди обменивали товары и услуги напрямую без использования денег. Бартер возник задолго до появления денежных систем, в доисторические времена. Люди обменивали то, что у них было в избытке (например, зерно или скот), на то, в чем они нуждались (например, инструменты или одежду). Эта система обмена была основным способом торговли до появления монет и бумажных денег, но она имела свои сложности, такие как трудность в оценке эквивалентности товаров и услуг и необходимость совпадения нужд обменщиков.",
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
  