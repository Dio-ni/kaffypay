import Logo from "../../assets/images/home/alaqan-full.svg";
import React from 'react';
import "./Navbar.scss";
import { IoMenu } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';


const Navbar = () => {
    const [selectedLang,setSelectedLang]=useState(1);
    const langs=['Ar','Eng'];  
  return (
    <header className="navbar wrapper">
        <nav className="navbar_container ">
        <a href="#" className="navbar_logo"><img src={Logo} alt="Logo"/></a>
            
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
                <a href="#" className="btn">Get Started</a>
            </div>

        
        </nav>
    </header>
  )
}

export default Navbar