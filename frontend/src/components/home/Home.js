import React from 'react'
import Hero from './Hero'
import Services from './Services'
import Internship from '../internships/Internship'
import Contact from './Contact'

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Services />
      <Internship />
      <Contact />

    </div>
  )
}

export default Home