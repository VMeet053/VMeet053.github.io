import React from 'react';
import Spinner from '../components/Spinner';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <>
      <Spinner />
      <Topbar />
      <Navbar />
      <PageHeader title="Our Features" />
      
 <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h4 className="section-title">Why Choose Us!</h4>
              <h1 className="display-5 mb-4">Why You Should Trust Us? Learn More About Us!</h1>
              <p className="mb-4">At Our Company, we combine creativity, strategy, and precision to deliver results that matter. Our team is committed to excellence in every project — from concept to completion — ensuring you get innovative solutions tailored to your goals.</p>
              <div className="row g-4">
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <img className="flex-shrink-0" src="/img/icons/icon-2.png" alt="Icon" />
                    <div className="ms-4">
                      <h3>Design Approach</h3>
                      <p className="mb-0">We believe great design goes beyond aesthetics. Our approach blends functionality, innovation, and user-centered thinking to create experiences that not only look amazing but perform flawlessly across all platforms.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <img className="flex-shrink-0" src="/img/icons/icon-3.png" alt="Icon" />
                    <div className="ms-4">
                      <h3>Innovative Solutions</h3>
                      <p className="mb-0">Innovation is at the heart of everything we do. We leverage the latest technologies and trends to develop forward-thinking solutions that give your business a competitive edge in an ever-evolving marketplace.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <img className="flex-shrink-0" src="/img/icons/icon-4.png" alt="Icon" />
                    <div className="ms-4">
                      <h3>Project Management</h3>
                      <p className="mb-0">From planning to delivery, our project management process ensures efficiency, transparency, and timely execution. We prioritize communication and accountability, keeping every project on track and exceeding expectations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="feature-img">
                <img className="img-fluid" src="/img/qw.jpg" alt="" />
                <img className="img-fluid" src="/img/about-1.jpg" alt="" />
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

export default Features;
