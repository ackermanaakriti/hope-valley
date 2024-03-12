import React from "react";
import Slider from "react-slick";
import { sliderdata } from "../Global/Data/heropageSlider";
import Herosection from "../Sections/Herosection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Heropageslider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    arrows:false
  };
  return (
    <div className="sliderhomesection">
    <Slider {
      
      ...settings}>
     {sliderdata.map((data,index)=>
     (
       <Herosection key={index} image={data.image} description={data.description}/>
     ))}
    </Slider>
    <div className="absolute top-[75%] right-[14%]">
    <div className='chatwithus'>
                <button className='flex items-center '>
                  <img src='./images/girlA.png'/>
                  <p className='uppercase'>Chat With us</p>
                </button>
              </div>
    </div>
   
    </div>
  );
}