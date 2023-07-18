import React, { useState } from 'react';
import image from '../../images/study.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import videoFile from './hero-img.mp4'




const Hero = () => {


  const [isLoading, setIsLoading] = useState(true);

  const handleLoadedData = () => {
    setIsLoading(false);
  };
  return (

    <div className='flex justify-around items-center my-24 hero-container'>

      <div className='fade-in-from-left bg-' >
        <h1 className="text-5xl text-bold">WE BUILD<br /><span className='pt-8'>WE PUBLISH</span></h1>
        <p className="py-5 text-1xl font-bold">We are a Community of Tech Learners. <br />Come on, Let's Learn Together. Join Us.</p>
        <Link to='/about'>
          <motion.button className='hero-btn my-5 py-3 px-8 text-lg border-2 border-main-3 rounded-full mr-5'
            whileHover={{ scale: 1.1 }}
            transition={{
              type: 'spring', stiffness: 300
            }}>
            JOIN COMMUNITY
          </motion.button>
        </Link>
      </div>

      <div>
        <video className='image-top' controls={false} autoPlay muted
          onLoadedData={handleLoadedData}
          style={{ display: isLoading ? 'none' : 'block' }}
        >
          <source src={videoFile} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
      </div>

    </div>

  )
}

export default Hero