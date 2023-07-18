import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegHeart, FaRegLightbulb, FaRegChartBar } from 'react-icons/fa';


const Internship = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">Internships</h2>
      <div className="service-list">
        <div className="service-item">
          <div className="service-icon"><FaRegHeart /></div>
          <h3 className="service-title">Internship 1</h3>
          <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="service-item">
          <div className="service-icon"><FaRegLightbulb /></div>
          <h3 className="service-title">Internship 2</h3>
          <p className="service-description">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="service-item">
          <div className="service-icon"><FaRegChartBar /></div>
          <h3 className="service-title">Internship 3</h3>
          <p className="service-description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        </div>
        <div className="service-item">
          <div className="service-icon"><FaRegChartBar /></div>
          <h3 className="service-title">Internship 3</h3>
          <p className="service-description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        </div>
      </div>
    </section>
  )
}

export default Internship