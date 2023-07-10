import React from 'react'

const Contact = () => {
  return (
   
      <div className="mt-20 p-20 flex justify-around bg-cyan-100">
        <div className="">
          <p className="text-2xl font-bold">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with us</p>
        </div>

          <form className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none hover:scale-110 duration-100"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none hover:scale-110 duration-100"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none hover:scale-110 duration-100"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Connect
            </button>
          </form>
    
      </div>
   
  );
};

export default Contact;