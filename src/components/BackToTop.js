import React, { useEffect, useState } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a
      href="#"
      className="btn btn-lg btn-primary btn-lg-square back-to-top"
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
      style={{ display: visible ? 'flex' : 'none' }}
    >
      <i className="bi bi-arrow-up"></i>
    </a>
  );
};

export default BackToTop;
