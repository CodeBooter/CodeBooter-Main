import React from 'react'
import image from '../../images/feature_3.png'

const Hero = () => {
  return (
    <div className='font-sans font-sora flex bg-violet-100 rounded-lg p-20 '>
      <div className=''>

        {/* <h1 className="font-bold text-5xl">CodeBooter</h1> */}
        <h1 className="mt-5 text-4xl text-bold">Hello Booters</h1>

        <p className="mt-4 text-1xl font-bold">
          We are a Community of Tech Learners. Come on, Let's Learn Together. Join Us.
        </p>
        <p className="pr-5 my-10 font-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum
          dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
          adipiscing elit
        </p>
      </div>
      <div>
        <img src={image}></img>
      </div>

    </div>
      )
}

export default Hero