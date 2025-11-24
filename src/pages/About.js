import React, { useEffect } from 'react';
import Spinner from '../components/Spinner';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const About = () => {
  useEffect(() => {
    if (window.jQuery && window.jQuery.fn.counterUp) {
      window.jQuery('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
      });
    }
  }, []);

  return (
    <>
      <Spinner />
      <Topbar />
      <Navbar />
      <PageHeader title="About Us" />

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img">
                <img className="img-fluid" src="/img/about-1.jpg" alt="" />
                <img className="img-fluid" src="/img/about-2.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="section-title">About Us</h4>
              <h1 className="display-5 mb-4">A Creative Architecture Agency For Your Dream Home</h1>
              <p>We are a multidisciplinary architecture, construction, and interior design company dedicated to crafting beautiful, functional, and future-ready spaces. Our approach blends creativity with technical precision, ensuring every project reflects our clients’ lifestyle, vision, and needs. From residential homes to commercial developments, we bring ideas to life with thoughtful planning, innovative solutions, and exceptional craftsmanship.</p>
              <p className="mb-4">Our team ensures quality at every step—right from concept design to project execution—delivering spaces that are not only visually stunning but also built to last. We believe in creating environments that inspire, elevate everyday living, and add long-term value to your property.</p>
              <div className="d-flex align-items-center mb-5">
                <div className="d-flex flex-shrink-0 align-items-center justify-content-center border border-5 border-primary" style={{ width: '120px', height: '120px' }}>
                  <h1 className="display-1 mb-n2" data-toggle="counter-up">25</h1>
                </div>
                <div className="ps-4">
                  <h3>Years</h3>
                  <h3>Working</h3>
                  <h3 className="mb-0">Experience</h3>
                </div>
              </div>
              {/* <a className="btn btn-primary py-3 px-5" href="">Read More</a> */}
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Feature Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h4 className="section-title">Why Choose Us!</h4>
              <h1 className="display-5 mb-4">Why You Should Trust Us? Learn More About Us!</h1>
              <p className="mb-4">Choosing the right team for your home or commercial project is the key to achieving a space that is beautifully designed, structurally strong, and perfectly aligned with your lifestyle. With years of experience in architecture, construction, and interior design, we deliver end-to-end solutions that blend creativity, engineering excellence, and premium craftsmanship. Our commitment to transparency, quality, and timely delivery makes us a trusted partner for clients who want nothing but the best.</p>
              <div className="row g-4">
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <img className="flex-shrink-0" src="/img/icons/icon-2.png" alt="Icon" />
                    <div className="ms-4">
                      <h3>Design Approach</h3>
                      <p className="mb-0">We follow a client-focused design process that transforms ideas into functional and aesthetic spaces. Every concept is thoughtfully planned to suit your needs, budget, and vision.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <img className="flex-shrink-0" src="/img/icons/icon-3.png" alt="Icon" />
                    <div className="ms-4">
                      <h3>Innovative Solutions</h3>
                      <p className="mb-0">We combine modern design trends with advanced construction techniques to deliver smart, efficient, and future-ready solutions that add long-term value to your property.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <img className="flex-shrink-0" src="/img/icons/icon-4.png" alt="Icon" />
                    <div className="ms-4">
                      <h3>Project Management</h3>
                      <p className="mb-0">From planning to handover, we manage the entire project with precision—ensuring smooth coordination, timely delivery, and quality execution at every stage.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="feature-img">
                <img className="img-fluid" src="/img/about-2.jpg" alt="" />
                <img className="img-fluid" src="/img/about-1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}

      {/* Team Start */}
      {/* <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h4 className="section-title">Team Members</h4>
            <h1 className="display-5 mb-4">We Are Creative Architecture Team For Your Dream Home</h1>
          </div>
          <div className="row g-0 team-items">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${(num - 1) * 0.2 + 0.1}s`}>
                <div className="team-item position-relative">
                  <div className="position-relative">
                    <img className="img-fluid" src={`/img/team-${num}.jpg`} alt="" />
                    <div className="team-social text-center">
                      <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                      <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                  <div className="bg-light text-center p-4">
                    <h3 className="mt-2">Architect Name</h3>
                    <span className="text-primary">Designation</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      {/* Team End */}

      <Footer />
      <BackToTop />
    </>
  );
};

export default About;
