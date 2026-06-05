import React from 'react'
import PortfolioH from '../../components/Hero/PortfolioH'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Seo from '../../components/Seo/Seo';

const PortfolioPage = () => {
  return (
    <div>
      <Seo
        title="Project Gallery"
        description="View completed All Building & Property Services projects including fencing, waterproofing, concrete works, carpentry, remedial repairs and property maintenance across Sydney."
        path="/projects"
      />
      <Navbar/>
      <PortfolioH/>
      <Footer/>
    </div>
  )
}

export default PortfolioPage
