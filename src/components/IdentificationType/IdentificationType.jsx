import React from 'react';
import "./IdentificationType.scss";
import { PiFingerprintFill } from "react-icons/pi";
import { TbFaceId } from "react-icons/tb";
import Alaqan from "../../assets/images/identification_type/Alaqan.svg";
import FaceId from "../../assets/images/identification_type/FaceId.svg";
import Fingerprint from "../../assets/images/identification_type/Fingerprint.svg";


const IdentificationType = () => {
  return (
    <>
    <section className="identification wrapper">
        <div className="identification__container">
            <div className="title">
            <h3>СРАВНЕНИЕ</h3>
            <h1>Способы идентификации</h1>
            </div>
            
            <div className="comparison-container">
        <div className="column">
          <span></span>
            <ul>    
                <li>FAR</li>
                <li>FRR</li>
                <li>Возможность фальсификации</li>
                <li>Неизменность</li>
                <li>Внешние факторы </li>
                <li>Скорость  </li>
                <li>Бесконтактность   </li>
                <li>Психологический комфорт   </li>
                <li>Базовая стоимость решения</li>
            </ul>
        </div>
      <div className="column type">
        <div className="type_title">
          <h2>Touch ID</h2>
          <span><img src={Fingerprint} alt="" /> </span>
        </div>
        
        <ul>
          <li className='red'> 0,001%</li>
          <li className='red'> 0,6%</li>
          <li className='red'> Открытая биометрия</li>
          <li className='red'> Порезы, воспаления и прочее меняют структуру</li>
          <li className='red'> Влажность, грязь</li>
          <li>Высокая</li>
          <li className='red'> Нет</li>
          <li className='red'>Антисанитария, ассоциация с криминалистикой</li>
          <li>Низкая</li>
        </ul>
      </div>
      <div className="column type">
      <div className="type_title">
          <h2>Face ID</h2>
          <span>
           <img src={FaceId} alt="" /> 
          </span>
        </div>
        <ul>
          <li className='red'> 0,1%</li>
          <li className='red'> 2,5%</li>
          <li className='red'> Динамичная видимая биометрия</li>
          <li className='red'> Меняется в течение всей жизни</li>
          <li className='red'> Аксессуары, волосы</li>
          <li>Средняя</li>
          <li> Да</li>
          <li className='red'>Сложности для людей с высоким и низким ростом</li>
          <li>2D – Средняя, <span className='red'>3D – Высокая</span></li>
        </ul>
      </div>
      <div className="column type">
        <div className="type_title alaqan-green">
          <h2>Palm ID</h2>
          <span><img src={Alaqan} alt="" /></span>
        </div>
        
        <ul>
          <li> 0,0008%</li>
          <li> 0,01%</li>
          <li> Статичная невидимая биометрия</li>
          <li> Только глубокие порезы ладони (редкий случай)</li>
          <li> –</li>
          <li>Высокая</li>
          <li> Да</li>
          <li>Новинка для пользователей</li>
          <li>Средняя</li>
        </ul>
      </div>
    </div>
        </div>
    </section>
    </>
  )
}

export default IdentificationType;



