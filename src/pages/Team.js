import React from 'react';
import Spinner from '../components/Spinner';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const Team = () => {
  const teamMembers = [
    { img: 'team-1.jpg', delay: '0.1s' },
    { img: 'team-2.jpg', delay: '0.3s' },
    { img: 'team-3.jpg', delay: '0.5s' },
    { img: 'team-4.jpg', delay: '0.7s' },
    { img: 'team-2.jpg', delay: '0.1s' },
    { img: 'team-3.jpg', delay: '0.3s' },
    { img: 'team-4.jpg', delay: '0.5s' },
    { img: 'team-1.jpg', delay: '0.7s' }
  ];

  return (
    <>
      <Spinner />
      <Topbar />
      <Navbar />
      <PageHeader title="Team Members" />
      
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h4 className="section-title">Team Members</h4>
            <h1 className="display-5 mb-4">We Are Creative Architecture Team For Your Dream Home</h1>
          </div>
          <div className="row g-0 team-items">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={member.delay}>
                <div className="team-item position-relative">
                  <div className="position-relative">
                    <img className="img-fluid" src={`/img/${member.img}`} alt="" />
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
      </div>

      <Footer />
      <BackToTop />
    </>
  );
};

export default Team;
