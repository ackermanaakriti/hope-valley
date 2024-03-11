import React from 'react'
import Herosection from '../Sections/Herosection'
import Heropageslider from '../Components/HeropageSlider'
import PopularServices from '../Sections/PopularServices'
import ProjectBased from '../Sections/ProjectBased'

const Homepage = () => {
  return (
    <>
  <Heropageslider/>
  <PopularServices/>
  <ProjectBased/>
    </>
  )
}

export default Homepage