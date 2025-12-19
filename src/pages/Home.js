import React, { useEffect } from "react";
import Spinner from "../components/Spinner";
//import Topbar from '../components/Topbar';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const Home = () => {
  useEffect(() => {
    // Initialize owl carousel if jQuery is available
    if (window.jQuery && window.jQuery.fn.owlCarousel) {
      window.jQuery(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
      });

      window.jQuery(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
      });
    }

    // Counter up
    if (window.jQuery && window.jQuery.fn.counterUp) {
      window.jQuery('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000,
      });
    }
  }, []);

  return (
    <>
      <Spinner />
      {/* <Topbar /> */}
      <Navbar />

      {/* Carousel Start */}
      <div
        className="container-fluid p-0 pb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="owl-carousel header-carousel position-relative">
          <div
            className="owl-carousel-item position-relative"
            data-dot="<img src='/img/wall 1.png'>"
          >
            <img className="img-fluid" src="/img/wall 1.png" alt="" />
            <div className="owl-carousel-inner">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    <h1 className="display-1 text-white animated slideInDown">
                      Transforming Spaces Into Timeless Designs
                    </h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-3">
                      From concept to creation, we craft stunning architectural
                      and interior masterpieces that reflect elegance, comfort,
                      and innovation.
                    </p>
                    <a
                      href=""
                      className="btn btn-primary py-3 px-5 animated slideInLeft"
                    >
                      Explore Our Work
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="owl-carousel-item position-relative"
            data-dot="<img src='/img/1212.png'>"
          >
            <img className="img-fluid" src="/img/1212.png" alt="" />
            <div className="owl-carousel-inner">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    <h1 className="display-1 text-white animated slideInDown">
                      Building Dreams With Design & Precision
                    </h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-3">
                      We blend creativity and craftsmanship to deliver
                      exceptional architectural, interior, and construction
                      solutions that redefine modern living.
                    </p>
                    <a
                      href=""
                      className="btn btn-primary py-3 px-5 animated slideInLeft"
                    >
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="owl-carousel-item position-relative"
            data-dot="<img src='/img/1111.png'>"
          >
            <img className="img-fluid" src="/img/1111.png" alt="" />
            <div className="owl-carousel-inner">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    <h1 className="display-1 text-white animated slideInDown">
                      Innovative Architecture. Inspiring Interiors.
                    </h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-3">
                      Our expert team designs and builds spaces that merge style
                      with functionality—turning every idea into a lasting
                      impression.
                    </p>
                    <a
                      href=""
                      className="btn btn-primary py-3 px-5 animated slideInLeft"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel End */}

      {/* Facts Start */}
      <div className="container-xxl py-5">
        <div className="container pt-5">
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                <div className="fact-icon">
                  <img src="/img/icons/icon-2.png" alt="Icon" />
                </div>
                <h3 className="mb-3">Design Approach</h3>
                <p className="mb-0">
                  We approach every project with a deep understanding of space,
                  light, and material. Our designs merge aesthetics with
                  functionality, ensuring every detail enhances both form and
                  purpose.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                <div className="fact-icon">
                  <img src="/img/icons/icon-3.png" alt="Icon" />
                </div>
                <h3 className="mb-3">Innovative Solutions</h3>
                <p className="mb-0">
                  We embrace creativity and technology to craft unique spaces
                  that redefine modern living. From sustainable materials to
                  smart layouts, our innovations bring ideas to life with
                  precision and flair.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                <div className="fact-icon">
                  <img src="/img/icons/icon-4.png" alt="Icon" />
                </div>
                <h3 className="mb-3">Project Management</h3>
                <p className="mb-0">
                  Our dedicated team manages every phase — from concept to
                  completion — with professionalism and transparency. We ensure
                  timely delivery, cost efficiency, and impeccable quality in
                  every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img">
                <img className="img-fluid" src="/img/download.jpg" alt="" />
                <img className="img-fluid" src="/img/down.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="section-title">About Us</h4>
              <h1 className="display-5 mb-4">
                Designing Spaces. Building Dreams. Creating Legacies.
              </h1>
              <p>
                At Our Company, we specialize in turning vision into reality
                through innovative architecture, interior design, and
                construction excellence. Every project we undertake blends
                creativity, technology, and craftsmanship to deliver timeless
                spaces that inspire
              </p>
              {/* <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p> */}
              <div className="d-flex align-items-center mb-5">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center border border-5 border-primary"
                  style={{ width: "120px", height: "120px" }}
                >
                  <h1 className="display-1 mb-n2" data-toggle="counter-up">
                    7
                  </h1>
                </div>
                <div className="ps-4">
                  <h3>Years</h3>
                  <h3>Working</h3>
                  <h3 className="mb-0">Experience</h3>
                </div>
              </div>
              <a className="btn btn-primary py-3 px-5" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h4 className="section-title">Our Services</h4>
            <h1 className="display-5 mb-4">
              We Focused On Modern Architecture And Interior Design
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item d-flex position-relative text-center h-100">
                <img className="bg-img" src="/img/service-1.jpg" alt="" />
                <div className="service-text p-5">
                  <img
                    className="mb-4"
                    src="/img/icons/icon-5.png"
                    alt="Icon"
                  />
                  <h3 className="mb-3">Architecture</h3>
                  <p className="mb-4">
                    We craft innovative and functional architectural designs
                    that balance aesthetics with purpose. Every project is
                    tailored to meet the unique lifestyle, budget, and vision of
                    our clients.
                  </p>
                  <a className="btn" href="">
                    <i className="fa fa-plus text-primary me-3"></i>Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item d-flex position-relative text-center h-100">
                <img className="bg-img" src="/img/service-2.jpg" alt="" />
                <div className="service-text p-5">
                  <img
                    className="mb-4"
                    src="/img/icons/icon-6.png"
                    alt="Icon"
                  />
                  <h3 className="mb-3">3D Animation</h3>
                  <p className="mb-4">
                    Bring your ideas to life with our high-quality 3D
                    visualization and walkthroughs. We turn blueprints into
                    realistic models, helping clients visualize their dream
                    projects before construction begins.
                  </p>
                  <a className="btn" href="">
                    <i className="fa fa-plus text-primary me-3"></i>Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item d-flex position-relative text-center h-100">
                <img className="bg-img" src="/img/service-3.jpg" alt="" />
                <div className="service-text p-5">
                  <img
                    className="mb-4"
                    src="/img/icons/icon-7.png"
                    alt="Icon"
                  />
                  <h3 className="mb-3">House Planning</h3>
                  <p className="mb-4">
                    Our expert planners design efficient, stylish, and
                    comfortable living spaces. From layout optimization to
                    spatial flow, we ensure every home is perfectly planned for
                    modern living.
                  </p>
                  <a className="btn" href="">
                    <i className="fa fa-plus text-primary me-3"></i>Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item d-flex position-relative text-center h-100">
                <img className="bg-img" src="/img/service-4.jpg" alt="" />
                <div className="service-text p-5">
                  <img
                    className="mb-4"
                    src="/img/icons/icon-8.png"
                    alt="Icon"
                  />
                  <h3 className="mb-3">Interior Design</h3>
                  <p className="mb-4">
                    We design interiors that reflect your personality and style.
                    From concept to completion, our team creates spaces that
                    blend functionality, comfort, and elegance.
                  </p>
                  <a className="btn" href="">
                    <i className="fa fa-plus text-primary me-3"></i>Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item d-flex position-relative text-center h-100">
                <img className="bg-img" src="/img/service-5.jpg" alt="" />
                <div className="service-text p-5">
                  <img
                    className="mb-4"
                    src="/img/icons/icon-9.png"
                    alt="Icon"
                  />
                  <h3 className="mb-3">Renovation</h3>
                  <p className="mb-4">
                    Upgrade your existing space with modern design and smart
                    functionality. We handle structural modifications,
                    redesigns, and finishing to give your property a fresh,
                    contemporary appeal.
                  </p>
                  <a className="btn" href="">
                    <i className="fa fa-plus text-primary me-3"></i>Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item d-flex position-relative text-center h-100">
                <img className="bg-img" src="/img/service-6.jpg" alt="" />
                <div className="service-text p-5">
                  <img
                    className="mb-4"
                    src="/img/icons/icon-10.png"
                    alt="Icon"
                  />
                  <h3 className="mb-3">Construction</h3>
                  <p className="mb-4">
                    From foundation to finishing, we deliver top-quality
                    construction with attention to detail and adherence to
                    timelines. Our experienced team ensures durability, safety,
                    and excellence in every build.
                  </p>
                  <a className="btn" href="">
                    <i className="fa fa-plus text-primary me-3"></i>Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Feature Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h4 className="section-title">Why Choose Us!</h4>
              <h1 className="display-5 mb-4">
                Why You Should Trust Us? Learn More About Us!
              </h1>
              <p className="mb-4">
                At Our Company, we combine creativity, strategy, and precision
                to deliver results that matter. Our team is committed to
                excellence in every project — from concept to completion —
                ensuring you get innovative solutions tailored to your goals.
              </p>
              <div className="row g-4">
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <img
                      className="flex-shrink-0"
                      src="/img/icons/icon-2.png"
                      alt="Icon"
                    />
                    <div className="ms-4">
                      <h3>Design Approach</h3>
                      <p className="mb-0">
                        We believe great design goes beyond aesthetics. Our
                        approach blends functionality, innovation, and
                        user-centered thinking to create experiences that not
                        only look amazing but perform flawlessly across all
                        platforms.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <img
                      className="flex-shrink-0"
                      src="/img/icons/icon-3.png"
                      alt="Icon"
                    />
                    <div className="ms-4">
                      <h3>Innovative Solutions</h3>
                      <p className="mb-0">
                        Innovation is at the heart of everything we do. We
                        leverage the latest technologies and trends to develop
                        forward-thinking solutions that give your business a
                        competitive edge in an ever-evolving marketplace.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <img
                      className="flex-shrink-0"
                      src="/img/icons/icon-4.png"
                      alt="Icon"
                    />
                    <div className="ms-4">
                      <h3>Project Management</h3>
                      <p className="mb-0">
                        From planning to delivery, our project management
                        process ensures efficiency, transparency, and timely
                        execution. We prioritize communication and
                        accountability, keeping every project on track and
                        exceeding expectations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="feature-img">
                <img className="img-fluid" src="/img/qw.jpg" alt="" />
                <img className="img-fluid" src="/img/home.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}

      {/* Project Start */}
      <div className="container-xxl project py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h4 className="section-title">Our Projects</h4>
            <h1 className="display-5 mb-4">
              Visit Our Latest Projects And Our Innovative Works
            </h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4">
              <div className="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-1"
                  type="button"
                >
                  <h3 className="m-0">01. Residental Projects</h3>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-2"
                  type="button"
                >
                  <h3 className="m-0">02. Commercial Projects</h3>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-3"
                  type="button"
                >
                  <h3 className="m-0">03. Industrial Projects</h3>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-0"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-4"
                  type="button"
                >
                  <h3 className="m-0">04. Bunglow Projects</h3>
                </button>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content w-100">
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="/img/reseidental.jpg"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h1 className="mb-3">
                        5 Years Of Experience In Commercial Project
                      </h1>
                      <p className="mb-4">
                        We specialize in creating modern, comfortable, and
                        functional living spaces tailored to your lifestyle. Our
                        team focuses on aesthetic design, space optimization,
                        and long-lasting quality.
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>
                        Personalized home layouts
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>Modern
                        and sustainable architecture
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>
                        Efficient space planning
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>Premium
                        materials and finishes
                      </p>

                      {/* <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a> */}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-2">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="/img/commercial.jpg"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h1 className="mb-3">
                        5 Years Of Experience In Commercial Industry
                      </h1>
                      <p className="mb-4">
                        We deliver commercial spaces that enhance productivity,
                        customer engagement, and brand identity. Our goal is to
                        blend functionality with an appealing visual presence
                        that supports business growth.
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>Office
                        buildings
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>Retail
                        stores & showrooms
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>
                        Corporate interiors
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>
                        High-efficiency planning
                      </p>

                      {/* <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a> */}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-3">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="/img/industrial.jpg"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h1 className="mb-3">
                        5 Years Of Experience In Industrial Industry
                      </h1>
                      <p className="mb-4">
                        With years of experience in industrial architecture, we
                        design facilities that prioritize safety, efficiency,
                        and scalability. From manufacturing plants to
                        warehouses, our solutions support smooth operations and
                        future expansion.
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>
                        Optimized industrial layouts
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>
                        Innovative structural solutions
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>
                        High-standard safety planning
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>Project
                        management excellence
                      </p>

                      {/* <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a> */}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-4">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="/img/bunglow.jpg"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h1 className="mb-3">
                        5 Years Of Experience In Bunglow Industry
                      </h1>
                      <p className="mb-4">
                        We design elegant and spacious bungalows that combine
                        luxury with comfort. Our concepts emphasize open spaces,
                        natural lighting, and contemporary architectural
                        aesthetics.
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>Luxury
                        bungalow designs
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>Custom
                        interiors & landscape integration
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>
                        Ventilation and natural light planning
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>Premium
                        architectural detailing
                      </p>

                      {/* <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project End */}

      {/* Team Start */}
      {/* <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h4 className="section-title">Team Members</h4>
            <h1 className="display-5 mb-4">We Are Creative Architecture Team For Your Dream Home</h1>
          </div> */}
      {/* <div className="row g-0 team-items">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item position-relative">
                <div className="position-relative">
                  <img className="img-fluid" src="/img/team-1.jpg" alt="" /> */}
      {/* <div className="team-social text-center">
                    <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                  </div> */}
      {/* </div>
                <div className="bg-light text-center p-4">
                  <h3 className="mt-2">Architect Name</h3>
                  <span className="text-primary">Designation</span>
                </div>
              </div>
            </div> */}
      {/* <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item position-relative">
                <div className="position-relative">
                  <img className="img-fluid" src="/img/team-2.jpg" alt="" /> */}
      {/* <div className="team-social text-center">
                    <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                  </div> */}
      {/* </div>
                <div className="bg-light text-center p-4">
                  <h3 className="mt-2">Architect Name</h3>
                  <span className="text-primary">Designation</span>
                </div>
              </div>
            </div> */}
      {/* <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item position-relative">
                <div className="position-relative">
                  <img className="img-fluid" src="/img/team-3.jpg" alt="" /> */}
      {/* <div className="team-social text-center">
                    <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                  </div> */}
      {/* </div>
                <div className="bg-light text-center p-4">
                  <h3 className="mt-2">Architect Name</h3>
                  <span className="text-primary">Designation</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="team-item position-relative">
                <div className="position-relative">
                  <img className="img-fluid" src="/img/team-4.jpg" alt="" /> */}
      {/* <div className="team-social text-center">
                    <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                  </div> */}
      {/* </div>
                <div className="bg-light text-center p-4">
                  <h3 className="mt-2">Architect Name</h3>
                  <span className="text-primary">Designation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Team End */}

      {/* Appointment Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h4 className="section-title">Appointment</h4>
              <h1 className="display-5 mb-4">
                Make An Appointment To Start Your Dream Project
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="row g-4">
                <div className="col-12">
                  <div className="d-flex">
                    <div
                      className="d-flex flex-shrink-0 align-items-center justify-content-center bg-light"
                      style={{ width: "65px", height: "65px" }}
                    >
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
                    <div
                      className="d-flex flex-shrink-0 align-items-center justify-content-center bg-light"
                      style={{ width: "65px", height: "65px" }}
                    >
                      <i className="fa fa-2x fa-envelope-open text-primary"></i>
                    </div>
                    <div className="ms-4">
                      <p className="mb-2">Mail Us Now</p>
                      <h3 className="mb-0">hariconstructions324@gmail.com</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    style={{ height: "55px" }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    style={{ height: "55px" }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Mobile"
                    style={{ height: "55px" }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <select className="form-select" style={{ height: "55px" }}>
                    <option selected>Choose Service</option>
                    <option value="1">Service 1</option>
                    <option value="2">Service 2</option>
                    <option value="3">Service 3</option>
                  </select>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="date" id="date" data-target-input="nearest">
                    <input
                      type="text"
                      className="form-control datetimepicker-input"
                      placeholder="Choose Date"
                      data-target="#date"
                      data-toggle="datetimepicker"
                      style={{ height: "55px" }}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="time" id="time" data-target-input="nearest">
                    <input
                      type="text"
                      className="form-control datetimepicker-input"
                      placeholder="Choose Date"
                      data-target="#time"
                      data-toggle="datetimepicker"
                      style={{ height: "55px" }}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Appointment End */}

      {/* Testimonial Start */}
      {/* <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h4 className="section-title">Testimonial</h4>
            <h1 className="display-5 mb-4">
              Thousands Of Customers Who Trust Us And Our Services
            </h1>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div
              className="testimonial-item text-center"
              data-dot="<img class='img-fluid' src='/img/p1.jpg' alt=''>"
            >
              <p className="fs-5">
                “The team delivered exactly what I was looking for. The design
                quality, professionalism, and on-time delivery truly exceeded my
                expectations.”
              </p>
              <h3>Arun Mehta</h3>
              <span className="text-primary">Software Engineer</span>
            </div>
            <div
              className="testimonial-item text-center"
              data-dot="<img class='img-fluid' src='/img/p2.jpg' alt=''>"
            >
              <p className="fs-5">
                “Amazing service! The attention to detail and the way they
                understood my requirements made the whole experience smooth and
                stress-free.”
              </p>
              <h3>Rajesh Kumar</h3>
              <span className="text-primary">Business Owner</span>
            </div>
            <div
              className="testimonial-item text-center"
              data-dot="<img class='img-fluid' src='/img/p3.jpg' alt=''>"
            >
              <p className="fs-5">
                “Very reliable and creative team. Their work added great value
                to my project. Highly recommended for anyone looking for quality
                work.”
              </p>
              <h3>Mohit Verma</h3>
              <span className="text-primary">Marketing Manager</span>
            </div>
            <div
              className="testimonial-item text-center"
              data-dot="<img class='img-fluid' src='/img/p4.jpg' alt=''>"
            >
              <p className="fs-5">
                “Their professionalism and design sense are fantastic. I’m
                extremely happy with the final output and the overall
                experience.”
              </p>
              <h3>Sneha Patel</h3>
              <span className="text-primary">Interior Consultant</span>
            </div>
          </div>
        </div>
      </div> */}
      {/* Testimonial End */}

      <Footer />
      <BackToTop />
    </>
  );
};

export default Home;
