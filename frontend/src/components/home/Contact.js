import React from 'react'
import { motion } from "framer-motion"

const Contact = () => {
  return (
   
      <div className="mt-20 flex justify-around">
        <div className="">
          <motion.p className="text-2xl font-bold"
           whileHover={{scale: 1.1, originX: 0 }}
           transition={{type: 'spring', stiffness: 300
           }}>
            Contact
          </motion.p>
          <p className="py-6">Submit the form to get in touch with us</p>
        </div>

          <form className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Connect
            </button>
          </form>
    
      </div>
   
  );
};

export default Contact;