import React, { useRef, useState, useEffect } from 'react';

import { FaLocationDot } from "react-icons/fa6";
import { PiChatCircleTextFill } from "react-icons/pi";
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import AlaqanLogoFull from "../../assets/images/home/alaqan-full.svg";

import "./Request.scss";

import Popup from '../../../../components/Popup/Popup';
import Loader from '../../../../components/Loader/Loader';
import LeftRequestPopup from '../../../../components/LeftRequestPopup/LeftRequestPopup';

const BOT_URL = 'https://lhhta28de6.execute-api.eu-central-1.amazonaws.com/v0';

const initialFormValue = {
  name: '',
  phone: '',
  email: '',
  company:'',
  message: '',
};


function Feadback  ()  {
    const apiClient = axios.create({
        baseURL: 'https://alaqan.kz/feedback/v1', // Replace with your API URL
      });
    
      const { t } = useTranslation();
      const locationUrl = useLocation();
      const { pathname } = locationUrl;
    
      const [domen, setDomen] = useState('alaqan.kz');
      const [formValue, setFormValue] = useState(initialFormValue);
      const [isLoading, setIsLoading] = useState(false);
      const [isOpen, setIsOpen] = useState(false);
      const [isLeftRequestPopupOpen, setIsLeftRequestPopupOpen] = useState(false);
    
      // const BOT_URL_MEKTEP = `https://lk.7line.kz/api/v1/dialers/create_task?api_token=3d06b68f8e7f2d17788713c6d5aabf08&dialer_id=436&phones=${formValue.phone}`;
    
      const form = useRef(null);
    
      const isMektepPage = pathname === '/mektep';
    
      const location = window.location.href;
    
      useEffect(() => {
        if (location.includes(process.env.REACT_APP_INTERNATIONAL_URL)) {
          setDomen('alaqan.com');
        } else {
          setDomen('alaqan.kz');
        }
      }, [location]);
    
      const requestSend = async () => {
        const formData = new FormData(form.current);
        const inputs = Object.fromEntries(formData);
    
        const text = isMektepPage
          ? `<b>Новая заявка Mektep</b>\n<b>Домен: </b> ${domen}\n<b>Имя: </b> ${inputs.name.toUpperCase()}\n<b>Номер телефона: </b> ${inputs.phone}`
          : `<b>Новая заявка</b>\n<b>Домен: </b> ${domen}\n<b>Имя: </b> ${inputs.name.toUpperCase()}\n<b>Номер телефона: </b> ${
              inputs.phone
            }\n<b>Email: </b> ${inputs.email}\n<b>Cообщение: </b> ${inputs.message}`;
    
        axios
          .post(BOT_URL, {
            site: 'alaqan.kz',
            text,
          })
          .finally(() => {
            if (!isMektepPage) {
              setIsLoading(false);
              setIsOpen(true);
              setFormValue(initialFormValue);
            }
          });
      };
    
      const mektepRequestSend = async () => {
        const url = `/call-me?phones=${formValue.phone}`;
        const token = 'Hb8AEyYGHeBrP68F4.2T4MbaWTrEChc8'; // Replace with your actual token
        try {
          apiClient.get(url, {
            headers: {
              Authorization: `${token}`,
            },
          });
    
          setIsLoading(false);
          setIsOpen(true);
          setFormValue(initialFormValue);
          requestSend();
        } catch {
          setIsLoading(false);
          setIsLeftRequestPopupOpen(true);
          setFormValue(initialFormValue);
        }
      };
    
      const submitHandler = (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        if (isMektepPage) {
          mektepRequestSend();
        } else {
          requestSend();
        }
      };
    
      const inputHandler = (event) => {
        const { name, value } = event.target;
        setFormValue((prev) => ({ ...prev, [name]: value }));
      };
    
  return (
    <>
    <div className='feadback_section '>
        <div className=" feadback wrapper">
        <div className="feadback_info ">
            <h3>{t('contact')}</h3>
            <h1>{t('get_touch')}</h1>

            <div className="details">
                <div className="addres">
                    <span><FaLocationDot /></span>
                    <div className="addres_text">
                        <h4>{t('our_address')}</h4>
                        <p>{t('address')}</p>
                    </div>
                </div>
                <div className="contacts">
                    <span><PiChatCircleTextFill /> </span>
                    <div className="addres_text">
                        <h4>{t('contacts')}</h4>
                        <p>+7 701 220 50 33 <br />
                        info@alaqan.kz</p>
                    </div>
                </div>
            </div>
        </div>
        <form
        className="form request__form"
            onSubmit={submitHandler}
            ref={form}
            >
              
            <Loader isLoading={isLoading} />
            <img src={AlaqanLogoFull} alt="" />
            <div className="inputs">
                <input
                        className={` ${isLoading && 'disabled'}`}
                        type="text"
                        value={formValue.name}
                        onChange={inputHandler}
                        placeholder={t('your_name')}
                        required
                        id="name"
                        name="name"
                    />
                <input
                    required
                    placeholder={t('phone')}
                    id="phone"
                    value={formValue.phone}
                    onChange={inputHandler}
                    name="phone"
                    className={`${
                      isLoading && 'disabled'
                    }`}
                  />
                <input
                    className={` ${isLoading && 'disabled'}`}
                    type="email"
                    required
                    value={formValue.email}
                    onChange={inputHandler}
                    placeholder={t('email')}
                    id="email"
                    name="email"
                    />
                <div className="input-wrapper">
                    <input 
                    className={`${isLoading && 'disabled'}`}
                    value={formValue.email}
                    onChange={inputHandler}
                    placeholder={t('company')}
                    type="text" 
                    name="company" 
                    id="company" 
                    />
                    
                      <span className="optional">{t('not_necessary')}</span>
                    
                </div>
                <input
                    type="text"
                    className={`${
                      isLoading && 'disabled'
                    }`}
                    value={formValue.message}
                    onChange={inputHandler}
                    placeholder={t('message')}
                    required
                    id="message"
                    name="message"
                    />
                    </div>
  
            <button type='submit' >Отправить</button>
        </form>
        </div>
    </div>
    <Popup isOpen={isOpen} setIsOpen={setIsOpen} />
    <LeftRequestPopup
      isOpen={isLeftRequestPopupOpen}
      setIsOpen={setIsLeftRequestPopupOpen}
    />
    </>
  )
}

export default Feadback