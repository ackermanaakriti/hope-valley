import React, { useEffect, useRef } from 'react'
import { navlists } from '../Data/navlinks'
import { FaGlobe } from "react-icons/fa";


const MainNavbar = () => {
   const navref = useRef()
   useEffect(() => {
      const handleScroll = () => {
        if (navref.current) { 
          if (window.scrollY > 200) {
            navref.current.classList.add('sticky-navbar');
          } else {
            navref.current.classList.remove('sticky-navbar');
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); 
  

  
   
  return (
    <>
     <div ref={navref}  className='main-nav '>
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
         <button>Join Our Team</button>
        </ul>
     </div>
    </div>
   </div>
   <div></div>
   </>
  
  )
}

export default MainNavbar