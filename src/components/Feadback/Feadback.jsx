import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { PiChatCircleTextFill } from "react-icons/pi";
import AlaqanLogoFull from "../../assets/images/home/alaqan-full.svg";
import "./Feadback.scss";


const Feadback = () => {
  return (
    
    <section className='feadback_section'>
        <div className=" feadback wrapper">
        <div className="feadback_info ">
            <h3>КОНТАКТЫ</h3>
            <h1>Свяжитесь с нами</h1>

            <div className="details">
                <div className="addres">
                    <span><FaLocationDot /></span>
                    <div className="addres_text">
                        <h4>Наш адрес</h4>
                        <p>Astana Hub, ул. Мангилик Ел 55/7, <br />
                        Блок C3.5, офис 306</p>
                    </div>
                </div>
                <div className="contacts">
                    <span><PiChatCircleTextFill /> </span>
                    <div className="addres_text">
                        <h4>Контакты</h4>
                        <p>+7 701 220 5033 <br />
                        info@alaqan.kz</p>
                    </div>
                </div>
            </div>
        </div>
        <form>
            <img src={AlaqanLogoFull} alt="" />
            <div className="inputs">
                    <input type="text" name="name" placeholder="Ваше имя" />
                    <input type="phone" name="phone" placeholder="Номер телефона" />
                    <input type="email" name="email" placeholder="Почта" />

                    <div className="input-wrapper">
                        <input type="text" name="company" id="company" placeholder='Компания'/>
                        
                         <span className="optional">необязательно</span>
                       
                    </div>

                    <input type="text" name="message" placeholder="Сообщение" />
                    </div>

            
            <button>Отправить</button>
        </form>
        </div>
    </section>
  )
}

export default Feadback