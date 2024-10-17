import Logo from "../../assets/logo.svg";
import React from 'react';
import "./Navbar.scss";
import { IoMenu } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';


const Navbar = () => {
    const [selectedLang,setSelectedLang]=useState(1);
    const langs=['Каз','Рус','Eng'];
const [showNav, setShowNav]=useState(false);    
  return (
    <header className="navbar">
        <nav className="navbar_container wrapper">
            <ul className={`${showNav ? "show" : ""}`}>
                <li onClick={()=> setShowNav(false)}><a href="#"><img src={Logo} alt="Logo"/></a></li>
                <li onClick={()=> setShowNav(false)}><a href="#">Главная</a></li>
                <li onClick={()=> setShowNav(false)}><a href="#">Для бизнеса</a></li>
                <li onClick={()=> setShowNav(false)}><a href="#">Для Школы</a></li>
                <li onClick={()=> setShowNav(false)}><a href="#">Оплата</a></li>
                <li onClick={()=> setShowNav(false)}><a href="#">О компании</a></li>
            </ul>
            <div className="navbar_btns">
                <div className="lng_btns">
                    {langs.map((lng,index)=>(
                        <a href="#"
                        className={
                            selectedLang===index 
                            ? "lang" : ""
                        }
                        key={lng}
                        onClick={()=>{setSelectedLang(index)}}>
                            {lng}
                        </a>
                    ))}
                </div>
                <a href="#" className="btn">Связаться</a>
            </div>

            <div className="navbar_menu" onClick={()=> setShowNav(!showNav)}>
                {showNav ? <IoMdClose /> : <IoMenu />}
            </div>
        </nav>
    </header>
  )
}

export default Navbar