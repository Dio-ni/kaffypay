import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Type from "./Type";

import {paymentEvolutions, responsive} from "../../Data";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slide-btn next-btn"
        onClick={onClick}
      >
         &#10095;
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slide-btn prev-btn"
        onClick={onClick}
      >
        &#10094;
      </div>
    );
  }

function MultipleItems(props) {
  const settings = {
    className:"slick-carousel-custom",
    dots:false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    rtl: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    
  };

  

  return (
    <div className="slider-container">
      <Slider {...settings}>
      {props.types}
    
        
      </Slider>
    </div>
  );
}

export default MultipleItems;
