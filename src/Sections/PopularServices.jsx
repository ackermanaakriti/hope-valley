import React,{useRef} from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { services } from '../Global/Data/services';
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";



const PopularServices = () => {
    let sliderRef = useRef();
    const next = () => {
        sliderRef.slickNext();
      };
      const previous = () => {
        sliderRef.slickPrev();
      };
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrow:false
        // autoplay: true,
        // speed: 4000,
        // autoplaySpeed: 1000,
      };
  return (
  <>
  <div className='popularservices'>
   
    <div className='container mx-auto'>
        <div className='py-[30px] '>
        <h3 className='text-[38px] font-semibold text-PrimaryColor font-karla'>Our Popular Services</h3>
        </div>
        <div>
           
        <div className='popularservice-slider'>
        <div className="buttonprev">
        <button  onClick={previous}>
          <span className="text-[15px]"><FaChevronLeft/></span>
        </button>
        </div>
        <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
                {services.map((servicess,index)=>
                (
                    <div>
                    <p>{servicess.title}</p>
                    <figure className='h-[250px] '>
                        <img className='h-[100%]' src={servicess.images} alt=''/>
                    </figure>
                   </div>
                ))}
               
            </Slider>
            <div className="buttonnext">
            <button  onClick={next}>
         <span className="text-[14px]"><FaChevronRight/></span>
        </button>
            </div>
            </div>
         
            
        </div>
    </div>
  </div>
  </>
  )
}

export default PopularServices