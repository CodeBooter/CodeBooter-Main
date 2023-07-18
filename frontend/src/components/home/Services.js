import React from 'react';
import { FaRegHeart, FaRegLightbulb, FaRegChartBar } from 'react-icons/fa';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';



const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="service-list">
        <div className="service-item">
          <img src={img1} className='img-icon' />
          <h3 className="service-title">Android and IOs</h3>
        </div>
        <div className="service-item">
          <img src={img2} className='img-icon' />
          <h3 className="service-title">Web Solution</h3>
        </div>
        <div className="service-item">
          <img src={img3} className='img-icon' />
          <h3 className="service-title">Hosting and cloud</h3>
        </div>
        <div className="service-item">
          <img src={img4} className='img-icon' />
          <h3 className="service-title">Training</h3>
        </div>
      </div>
    </section>
  );
};

export default Services;
