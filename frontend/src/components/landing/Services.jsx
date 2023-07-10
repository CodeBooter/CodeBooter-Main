import React from 'react'
import { motion } from "framer-motion";
import { BiCheck } from 'react-icons/bi'



const Services = () => {
  return (
    <motion.div className='my-10 bg-yellow-100'
    initial={{x:'100vw'}}
    animate={{x:0}}
    >
      <div className='flex justify-around'>

        <div>Services</div>
        <div>Services</div>
        <div>Services</div>


      </div>
      </motion.div>


      )
}

      export default Services