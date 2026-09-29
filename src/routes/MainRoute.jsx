import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Contact from '../components/ContactUs'

const MainRoute = () => {
  return (
    <div>
        <Hero/>
        <Services/>
        <Testimonials/>
        <Contact/>
    </div>
  )
}

export default MainRoute