import React, { useEffect } from 'react';
import Spinner from '../components/Spinner';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const Testimonial = () => {
  useEffect(() => {
    if (window.jQuery && window.jQuery.fn.owlCarousel) {
      window.jQuery('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
      });
    }
  }, []);

  return (
    <>
      <Spinner />
      <Topbar />
      <Navbar />
      <PageHeader title="Testimonial" />
      
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h4 className="section-title">Testimonial</h4>
            <h1 className="display-5 mb-4">Thousands Of Customers Who Trust Us And Our Services</h1>
          </div>
          <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
            {[1, 2, 3].map((num) => (
              <div key={num} className="testimonial-item text-center" data-dot={`<img class='img-fluid' src='/img/testimonial-${num}.jpg' alt=''>`}>
                <p className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                <h3>Client Name</h3>
                <span className="text-primary">Profession</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </>
  );
};

export default Testimonial;
