import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    // Sticky navbar functionality
    const handleScroll = () => {
      const navbar = document.querySelector('.sticky-top');
      if (navbar) {
        if (window.scrollY > 300) {
          navbar.classList.add('shadow-sm');
          navbar.style.top = '0px';
        } else {
          navbar.classList.remove('shadow-sm');
          navbar.style.top = '-100px';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
      <Link to="/" className="navbar-brand ms-4 ms-lg-0">
        <h1 className="text-primary m-0">
          <img className="me-3" src="/img/icons/final.png" alt="Icon" />
        </h1>
      </Link>
      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link to="/" className={`nav-item nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/about" className={`nav-item nav-link ${isActive('/about')}`}>About</Link>
          <Link to="/services" className={`nav-item nav-link ${isActive('/services')}`}>Services</Link>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Explore</a>
            <div className="dropdown-menu border-0 m-0">
              <Link to="/features" className="dropdown-item">Our Features</Link>
              <Link to="/projects" className="dropdown-item">Our Projects</Link>
              <Link to="/team" className="dropdown-item">Team Members</Link>
              <Link to="/appointment" className="dropdown-item">Appointment</Link>
              <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
            </div>
          </div>
          <Link to="/contact" className={`nav-item nav-link ${isActive('/contact')}`}>Contact</Link>
        </div>
        <Link to="/appointment" className="btn btn-primary py-2 px-4 d-none d-lg-block">Appointment</Link>
      </div>
    </nav>
  );
};

export default Navbar;
