import React,{useRef} from 'react'
import { FaChevronRight } from "react-icons/fa6";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft } from "react-icons/fa";
import { projects, services } from '../Global/Data/services';

const ExpertAdvice = () => {
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
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // speed: 4000,
        // autoplaySpeed: 1000,
      };
  return (
   <>
   <div className='container mx-auto py-[90px] expertadvice'>

<div>
<div className='py-[30px]  '>
        <h3 className='text-[38px] font-semibold text-black font-karla'>Expert advice for your business's expansion 
      </h3>
        </div>
        <div className=' pt-[20px] expertadvice-slider'>
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
                {projects.map((project,index)=>
                (
                    <div className='cret-cards  '>
                    <figure className='h-[350px]'>
                        <img className='h-[100%] object-cover w-[100%] ' src={project.image} alt='' />
                    </figure>
                    <p className='text-[20px] text-black font-karla font-semibold text-center py-[20px]'>{project.title}</p>
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
   </>
  )
}

export default ExpertAdvice