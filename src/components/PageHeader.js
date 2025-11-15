import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title }) => {
  return (
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <h1 className="display-1 text-white animated slideInDown">{title}</h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb text-uppercase mb-0">
            <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
            <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
            <li className="breadcrumb-item text-primary active" aria-current="page">{title}</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
