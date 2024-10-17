import React from 'react';
import alaqanFullSrc from '../../assets/images/home/alaqan-full-white.svg';
import igSrc from '../../assets/images/icons/ig.svg';
import ytSrc from '../../assets/images/icons/yt.svg';
import inSrc from '../../assets/images/icons/in.svg';
import fbSrc from '../../assets/images/icons/fb.svg';
import "./footer.scss";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container wrapper">
        <div className="footer_left">
          <a href="#"><img src={alaqanFullSrc} alt="" /></a>
            
            <p>Наша команда полностью отдается
              построению лучшей биометрии для
              ежедневного использования.</p>
            <div className="socials">
              <a href="#">
                <img src={igSrc} alt="" />
              </a>
              <a href="#">
                <img src={ytSrc} alt="" />
              </a>
              <a href="#">
                <img src={fbSrc} alt="" />
              </a>
              <a href="#">
                <img src={inSrc} alt="" />
              </a>
            </div>
        </div>
        <div className="footer_right ">
          <div className="companies">
              <h4>Компания</h4>
              <ul>
                <li>О нас</li>
                <li>Блог Alaqan</li>
                <li>СМИ о нас</li>
              </ul>
          </div>
          <div className="products">
          <h4>Продукты</h4>
              <ul>
                <li>Business</li>
                <li>Mektep</li>
                <li>Pay</li>
              </ul>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer