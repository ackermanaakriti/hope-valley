import React ,{useRef}from 'react'
import Herosection from '../Sections/Herosection'
import Heropageslider from '../Components/HeropageSlider'
import PopularServices from '../Sections/PopularServices'
import ProjectBased from '../Sections/ProjectBased'
import OurExpertise from '../Sections/OurExpertise'
import CreativeProjects from '../Sections/CreativeProjects'
import ExpertAdvice from '../Sections/ExpertAdvise'
import Withman from '../Sections/Withman'

const Homepage = () => {
  const secondbarref = useRef()
  if(secondbarref.current)
  {
    const secNavoffSet = secondbarref.current.offsetTop;
    if(window.scrollY >secNavoffSet)
    {
      console.log(secNavoffSet)
    }
    else 
    {
      console.log('hello')
    }
  }
  
  

  return (
    <>
  <Heropageslider/>
  <PopularServices/>
  <div id='secondNavbar'  ref={secondbarref}>
  <ProjectBased/>
  <OurExpertise/>
  <CreativeProjects/>
  <ExpertAdvice/>
  <Withman/>
  </div>
    </>
  )
}

export default Homepage