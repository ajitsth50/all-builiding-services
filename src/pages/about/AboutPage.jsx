import React from 'react'
import AboutHero from '../../components/Hero/AboutHero'

import Footer from '../../components/Footer/Footer'

import Acc from '../../components/Services/Acc'
import Banner from "../../components/Banner/Banner"
import Subscribe from "../../components/Subscribe/Subscribe"
import Seo from "../../components/Seo/Seo"



const AboutPage = () => {
  return (
    <div>
      <Seo
        title="About All Building & Property Services"
        description="Learn about All Building & Property Services, a Sydney building maintenance and remedial construction team supporting residential, commercial and strata clients."
        path="/about"
      />
      <AboutHero/>
     
      <Acc/>
      <Subscribe/>
   
    
   
      <Footer/>
    </div>
  )
}

export default AboutPage
