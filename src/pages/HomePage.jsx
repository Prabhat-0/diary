import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import ContactPage from './ContactPage'

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <Services/>
        <Testimonials/>
        <ContactPage/>
    </div>
  )
}

export default HomePage