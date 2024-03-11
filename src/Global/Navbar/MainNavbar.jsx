import React, { useEffect, useRef } from 'react'
import { navlists } from '../Data/navlinks'
import { FaGlobe } from "react-icons/fa";


const MainNavbar = () => {
   const ref = useRef()
   useEffect(() => {
      const handleScroll = () => {
        if (ref.current) { 
          if (window.scrollY > 200) {
            ref.current.classList.add('sticky-navbar');
          } else {
            ref.current.classList.remove('sticky-navbar');
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); 
  

  
   
  return (
   <div ref={ref}  className='main-nav '>
    <div className=' container mx-auto grid grid-cols-3'>
     <div className='col-span-1'>
        <h3>HOPE VALLEY</h3>
     </div>
     <div className='col-span-2'>
        <ul>
         {navlists.map((navitems,index)=>
         (
            <li>
                {navitems.icon && (<span><FaGlobe/></span>)}
                {navitems.name}
            </li>
         ))}
         <button>Join Us Team</button>
        </ul>
     </div>
    </div>
   </div>
  )
}

export default MainNavbar