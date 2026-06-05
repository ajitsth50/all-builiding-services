import React from 'react'
import Servicehero from '../../components/Services/Servicehero'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Compare from '../../components/Services/Compare';
import ServiceItems from '../../components/Services/ServicesItems';
import Seo from '../../components/Seo/Seo';

const ServicePage = () => {
  return (
    <div>
   <Seo
        title="Remedial Construction & Property Maintenance Services"
        description="Explore Sydney remedial construction, waterproofing, fire order compliance, concrete repair, painting, plumbing, electrical and general property maintenance services."
        path="/services"
      />
   <Navbar/>
      {/* <Servicehero/> */}
      <ServiceItems/>
      <Compare/>
      <Footer/>
    </div>
  )
}

export default ServicePage
