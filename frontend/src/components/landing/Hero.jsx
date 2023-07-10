import React from 'react'
import image from '../../images/feature_3.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'



const Hero = () => {
  return (
    <div className="flex justify-between items-center">

      <div className='flex bg-main rounded-xl m-16 p-20 '>
        <div className=''>

          {/* <h1 className="font-bold text-5xl">CodeBooter</h1> */}
          <h1 className="mt-5 text-5xl text-bold">WE BUILD<br />
            <span className='pt-8'>WE PUBLISH</span></h1>

          <p className="my-5 text-1xl font-bold">
            We are a Community of Tech Learners. Come on, Let's Learn Together. Join Us.
          </p>
          <Link to='/about'>
            <motion.button className='my-5 py-3 px-8 text-lg border-2 border-black rounded-full mr-5'
             whileHover={{scale: 1.1 }}
             transition={{type: 'spring', stiffness: 300
             }}>
             JOIN COMMUNITY
            </motion.button>
          </Link>
          
        </div>
        <div>
          <motion.img
            // initial={{ opacity: 0, scale: 0.5 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{
            //   duration: 0.8,
            //   delay: 0.5,
            //   ease: [0, 0.71, 0.2, 1.01]
            // }}

            // initial={{ opacity: 0, scale: 0.5 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{
            //   duration: 0.3,
            //   ease: [0, 0.71, 0.2, 1.01],
            //   scale: {
            //     type: "spring",
            //     damping: 5,
            //     stiffness: 100,
            //     restDelta: 0.001
            //   }
            // }}

            // whileHover={{ scale: 1.1 }}
            // transition={{ type: "spring", stiffness: 400, damping: 10 }}

            src={image} />
        </div>

      </div>
    </div>
  )
}

export default Hero