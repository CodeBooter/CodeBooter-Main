import React from 'react'
import Hero from './Hero'
import Services from './Services'
import Navbar from '../Navbar'
import Internship from '../Internships/Internship'
import Contact from '../Contact'

const Home = () => {
  return (
    <div className='pt-16'>
      <Navbar />
      <Hero />
      <Services />
      <Internship />
      <Contact />

    </div>
  )
}

export default Home