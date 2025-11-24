import React, { useEffect } from 'react';
import Spinner from '../components/Spinner';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const Services = () => {
  const services = [
    { icon: 'icon-5.png', img: 'service-1.jpg', title: 'Architecture', delay: '0.1s' },
    { icon: 'icon-6.png', img: 'service-2.jpg', title: '3D Animation', delay: '0.3s' },
    { icon: 'icon-7.png', img: 'service-3.jpg', title: 'House Planning', delay: '0.5s' },
    { icon: 'icon-8.png', img: 'service-4.jpg', title: 'Interior Design', delay: '0.1s' },
    { icon: 'icon-9.png', img: 'service-5.jpg', title: 'Renovation', delay: '0.3s' },
    { icon: 'icon-10.png', img: 'service-6.jpg', title: 'Construction', delay: '0.5s' }
  ];

  const facts = [
    { icon: 'icon-2.png', title: 'Design Approach', delay: '0.1s' },
    { icon: 'icon-3.png', title1: 'Innovative Solutions', delay: '0.3s' },
    { icon: 'icon-4.png', title2: 'Project Management', delay: '0.5s' }
  ];

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
      <PageHeader title="Services" />

      {/* Facts Start */}
           <div className="container-xxl py-5">
        <div className="container pt-5">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                <div className="fact-icon">
                  <img src="/img/icons/icon-2.png" alt="Icon" />
                </div>
                <h3 className="mb-3">Design Approach</h3>
                <p className="mb-0">We approach every project with a deep understanding of space, light, and material. Our designs merge aesthetics with functionality, ensuring every detail enhances both form and purpose.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                <div className="fact-icon">
                  <img src="/img/icons/icon-3.png" alt="Icon" />
                </div>
                <h3 className="mb-3">Innovative Solutions</h3>
                <p className="mb-0">We embrace creativity and technology to craft unique spaces that redefine modern living. From sustainable materials to smart layouts, our innovations bring ideas to life with precision and flair.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                <div className="fact-icon">
                  <img src="/img/icons/icon-4.png" alt="Icon" />
                </div>
                <h3 className="mb-3">Project Management</h3>
                <p className="mb-0">Our dedicated team manages every phase — from concept to completion — with professionalism and transparency. We ensure timely delivery, cost efficiency, and impeccable quality in every project.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}

      {/* Service Start */}
 <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h4 className="section-title">Our Services</h4>
            <h1 className="display-5 mb-4">We Focused On Modern Architecture And Interior Design</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item d-flex position-relative text-center h-100">
                <img className="bg-img" src="/img/service-1.jpg" alt="" />
                <div className="service-text p-5">
                  <img className="mb-4" src="/img/icons/icon-5.png" alt="Icon" />
                  <h3 className="mb-3">Architecture</h3>
                  <p className="mb-4">We craft innovative and functional architectural designs that balance aesthetics with purpose. Every project is tailored to meet the unique lifestyle, budget, and vision of our clients.</p>
                  <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item d-flex position-relative text-center h-100">
                <img className="bg-img" src="/img/service-2.jpg" alt="" />
                <div className="service-text p-5">
                  <img className="mb-4" src="/img/icons/icon-6.png" alt="Icon" />
                  <h3 className="mb-3">3D Animation</h3>
                  <p className="mb-4">Bring your ideas to life with our high-quality 3D visualization and walkthroughs. We turn blueprints into realistic models, helping clients visualize their dream projects before construction begins.</p>
                  <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item d-flex position-relative text-center h-100">
                <img className="bg-img" src="/img/service-3.jpg" alt="" />
                <div className="service-text p-5">
                  <img className="mb-4" src="/img/icons/icon-7.png" alt="Icon" />
                  <h3 className="mb-3">House Planning</h3>
                  <p className="mb-4">Our expert planners design efficient, stylish, and comfortable living spaces. From layout optimization to spatial flow, we ensure every home is perfectly planned for modern living.</p>
                  <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item d-flex position-relative text-center h-100">
                <img className="bg-img" src="/img/service-4.jpg" alt="" />
                <div className="service-text p-5">
                  <img className="mb-4" src="/img/icons/icon-8.png" alt="Icon" />
                  <h3 className="mb-3">Interior Design</h3>
                  <p className="mb-4">We design interiors that reflect your personality and style. From concept to completion, our team creates spaces that blend functionality, comfort, and elegance.</p>
                  <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item d-flex position-relative text-center h-100">
                <img className="bg-img" src="/img/service-5.jpg" alt="" />
                <div className="service-text p-5">
                  <img className="mb-4" src="/img/icons/icon-9.png" alt="Icon" />
                  <h3 className="mb-3">Renovation</h3>
                  <p className="mb-4">Upgrade your existing space with modern design and smart functionality. We handle structural modifications, redesigns, and finishing to give your property a fresh, contemporary appeal.</p>
                  <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item d-flex position-relative text-center h-100">
                <img className="bg-img" src="/img/service-6.jpg" alt="" />
                <div className="service-text p-5">
                  <img className="mb-4" src="/img/icons/icon-10.png" alt="Icon" />
                  <h3 className="mb-3">Construction</h3>
                  <p className="mb-4">From foundation to finishing, we deliver top-quality construction with attention to detail and adherence to timelines. Our experienced team ensures durability, safety, and excellence in every build.</p>
                  <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Testimonial Start */}
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
      {/* Testimonial End */}

      <Footer />
      <BackToTop />
    </>
  );
};

export default Services;
