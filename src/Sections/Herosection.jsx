import React from 'react'
import { IoMdSearch } from "react-icons/io";


const Herosection = ({image,description}) => {
  return (
    <>
    <div className=' bg-PrimaryColor heropage'>
        <div className='grid grid-cols-2  container m-auto '>
            <div className='py-[12em]'>
              <h1  className='text-white !font-[500] font-karla text-[50px] leading-[1.2em]  '>{description}</h1>
              <div className= ' relative w-[75%] flex items-center pt-[25px]'>
                <input className='bg-white  w-[100%] py-[10px] px-[8px] relative' placeholder='search for any service'/>
                <span className='bg-[#c3c3c7] absolute rounded-[20px] right-0 py-[7px] px-[14px]'><IoMdSearch className='bg-transparent text-white text-[30px]'/></span>
              </div>
              <div className='btnlist'>
                <p className='pr-[10px]' >Popular</p>
                <button>Website Design</button>
                <button>Graphic Design</button>
                <button>Digital Marketing</button>
              </div>
            </div>
            <div className='relative'>
              <figure className='h-[720px] relative'>
                <img className='h-[100%]' src={image}/>
              </figure>
             
            </div>
        </div>
    </div>
    </>
   
  )
}

export default Herosection