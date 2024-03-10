import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { services } from '../Global/Data/services';


const PopularServices = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        // autoplay: true,
        // speed: 4000,
        // autoplaySpeed: 1000,
      };
  return (
  <>
  <div className='popularservices'>
   
    <div className='container mx-auto'>
        <div className='py-[30px]'>
        <h3 className='text-[38px] font-semibold text-PrimaryColor font-karla'>Our Popular Services</h3>
        </div>
        <div>
            <Slider {...settings}>
                {services.map((servicess,index)=>
                (
                    <div>
                    <p>{servicess.title}</p>
                    <figure className='h-[300px] mr-[25px]'>
                        <img className='h-[100%]' src={servicess.images} alt=''/>
                    </figure>
                   </div>
                ))}
               
            </Slider>
        </div>
    </div>
  </div>
  </>
  )
}

export default PopularServices