"use client";
import React from 'react'
import Servicehero from '../../components/Services/Servicehero'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Compare from '../../components/Services/Compare';
import ServiceItems from '../../components/Services/ServicesItems';

const ServicePage = () => {
  return (
    <div>
   <Navbar/>
      {/* <Servicehero/> */}
      <ServiceItems/>
      <Compare/>
      <Footer/>
    </div>
  )
}

export default ServicePage
