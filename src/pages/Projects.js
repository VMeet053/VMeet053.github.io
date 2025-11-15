import React from 'react';
import Spinner from '../components/Spinner';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const Projects = () => {
  return (
    <>
      <Spinner />
      <Topbar />
      <Navbar />
      <PageHeader title="Projects" />
      
      <div className="container-xxl project py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h4 className="section-title">Our Projects</h4>
            <h1 className="display-5 mb-4">Visit Our Latest Projects And Our Innovative Works</h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4">
              <div className="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active" data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                  <h3 className="m-0">01. Modern Complex</h3>
                </button>
                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                  <h3 className="m-0">02. Royal Hotel</h3>
                </button>
                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                  <h3 className="m-0">03. Mexwel Buiding</h3>
                </button>
                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-0" data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                  <h3 className="m-0">04. Shopping Complex</h3>
                </button>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content w-100">
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: '350px' }}>
                      <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="/img/project-1.jpg" style={{ objectFit: 'cover' }} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h1 className="mb-3">25 Years Of Experience In Architecture Industry</h1>
                      <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                      <p><i className="fa fa-check text-primary me-3"></i>Design Approach</p>
                      <p><i className="fa fa-check text-primary me-3"></i>Innovative Solutions</p>
                      <p><i className="fa fa-check text-primary me-3"></i>Project Management</p>
                      <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-2">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: '350px' }}>
                      <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="/img/project-2.jpg" style={{ objectFit: 'cover' }} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h1 className="mb-3">25 Years Of Experience In Architecture Industry</h1>
                      <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                      <p><i className="fa fa-check text-primary me-3"></i>Design Approach</p>
                      <p><i className="fa fa-check text-primary me-3"></i>Innovative Solutions</p>
                      <p><i className="fa fa-check text-primary me-3"></i>Project Management</p>
                      <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-3">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: '350px' }}>
                      <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="/img/project-3.jpg" style={{ objectFit: 'cover' }} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h1 className="mb-3">25 Years Of Experience In Architecture Industry</h1>
                      <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                      <p><i className="fa fa-check text-primary me-3"></i>Design Approach</p>
                      <p><i className="fa fa-check text-primary me-3"></i>Innovative Solutions</p>
                      <p><i className="fa fa-check text-primary me-3"></i>Project Management</p>
                      <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-4">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: '350px' }}>
                      <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="/img/project-4.jpg" style={{ objectFit: 'cover' }} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h1 className="mb-3">25 Years Of Experience In Architecture Industry</h1>
                      <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                      <p><i className="fa fa-check text-primary me-3"></i>Design Approach</p>
                      <p><i className="fa fa-check text-primary me-3"></i>Innovative Solutions</p>
                      <p><i className="fa fa-check text-primary me-3"></i>Project Management</p>
                      <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                    </div>
                  </div>
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

export default Projects;
