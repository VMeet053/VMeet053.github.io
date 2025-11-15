import React, { useEffect, useState } from 'react';

const Spinner = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="spinner"
      className={`${show ? 'show' : ''} bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center`}
      style={{ display: show ? 'flex' : 'none' }}
    >
      <div className="spinner-border position-relative text-primary" style={{ width: '6rem', height: '6rem' }} role="status"></div>
      <img className="position-absolute top-50 start-50 translate-middle" src="/img/icons/logo.png" alt="Icon" />
    </div>
  );
};

export default Spinner;
