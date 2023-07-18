import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import img from '../images/codebooter.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='footer mb-0'>

        <div>
          <img src={img} className='footer-img' />
        </div>
        <div className='footer-deco'>
          <Link to='/login'>Community</Link> <br />
          <a href=''>About WEP</a><br />
          <a href=''>Partners </a><br />
        </div>

        <div className='footer-deco'>
          <a href=''>Newsletter</a> <br />
          <a href=''>Events</a> <br />
          <a href=''>Disclaimer</a> <br />
        </div>

        <div className='footer-deco'>
          <a href=''>FAQ's</a> <br />
          <a href=''>Feedback</a> <br />
        </div>

        <div className='footer-deco socials'>
          <a href=''><BsTwitter /></a> <br />
          <a href='/'><FaFacebook /></a><br />
          <a href='' ><BsLinkedin /></a><br />
          <a href='' ><BsYoutube /></a><br />
        </div>
      </div>

      <div className='flex justify-center items-center bg-main-3 pb-6 text-xs copyright'>
        © 2023 CodeBooter Website. All rights reserved.
      </div>
    </>

  )
}

export default Footer