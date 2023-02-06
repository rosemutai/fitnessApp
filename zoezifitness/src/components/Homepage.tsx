import React from 'react'
import Advert from './Advert'
import Footer from './Footer'
import Navbar from './Navbar'
import Pricing from './Pricing'
import Services from './Services'
import Subscribe from './Subscribe'
import Testimonies from './Testimonies'

const Homepage = () => {
  return (
    <div className='home-page'>
      <Navbar />
      <Services />  
      <Testimonies />
      <Advert />
      <Pricing />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Homepage