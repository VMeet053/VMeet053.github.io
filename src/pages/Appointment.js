import React from 'react';
import Spinner from '../components/Spinner';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const Appointment = () => {
  return (
    <>
      <Spinner />
      <Topbar />
      <Navbar />
      <PageHeader title="Appointment" />
      
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h4 className="section-title">Appointment</h4>
              <h1 className="display-5 mb-4">Make an Appointment to Bring Your Vision to Life</h1>
              <p className="mb-4">Turn your ideas into reality with our expert team. Schedule a consultation today to discuss your goals, explore creative possibilities, and design a strategy tailored to your dream project.
We’ll help you every step of the way—from concept to completion—with precision, passion, and professionalism.</p>
              <div className="row g-4">
                <div className="col-12">
                  <div className="d-flex">
                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-light" style={{ width: '65px', height: '65px' }}>
                      <i className="fa fa-2x fa-phone-alt text-primary"></i>
                    </div>
                    <div className="ms-4">
                      <p className="mb-2">Call Us Now</p>
                      <h3 className="mb-0">+91 70968 82030</h3>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex">
                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-light" style={{ width: '65px', height: '65px' }}>
                      <i className="fa fa-2x fa-envelope-open text-primary"></i>
                    </div>
                    <div className="ms-4">
                      <p className="mb-2">Mail Us Now</p>
                      <h3 className="mb-0">info@example.com</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <input type="text" className="form-control" placeholder="Your Name" style={{ height: '55px' }} />
                </div>
                <div className="col-12 col-sm-6">
                  <input type="email" className="form-control" placeholder="Your Email" style={{ height: '55px' }} />
                </div>
                <div className="col-12 col-sm-6">
                  <input type="text" className="form-control" placeholder="Your Mobile" style={{ height: '55px' }} />
                </div>
                <div className="col-12 col-sm-6">
                  <select className="form-select" style={{ height: '55px' }}>
                    <option>Choose Service</option>
                    <option value="1">Architecture</option>
                    <option value="2">3D Animation</option>
                    <option value="3">Interior Design</option>
                  </select>
                </div>
                <div className="col-12 col-sm-6">
                  <input type="date" className="form-control" placeholder="Choose Date" style={{ height: '55px' }} />
                </div>
                <div className="col-12 col-sm-6">
                  <input type="time" className="form-control" placeholder="Choose Time" style={{ height: '55px' }} />
                </div>
                <div className="col-12">
                  <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">Book Appointment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </>
  );
};

export default Appointment;
