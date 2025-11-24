import React from 'react';
import Spinner from '../components/Spinner';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const Contact = () => {


  const handlesubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    // આ URLs અને entry IDs તમારું Google Form inspect કરી મેળવો
    const formURL = "https://script.google.com/macros/s/AKfycbxZbcqlLwFXQdILvvbCk5iAwJXQEnHHhEQr1mQpZg12LUmT44U5sPYw8tZRhojNHYpCnA/exec";

    const formData = new FormData();
    formData.append("entry.1111111111", name);
    formData.append("entry.2222222222", email);
    formData.append("entry.3333333333", subject);
    formData.append("entry.4444444444", message);

    try {
      await fetch(formURL, {
        method: "POST",
        mode: "no-cors", // Google Forms cross-origin support નથી આપતું
        body: formData
      });
      alert("✅ Your message has been submitted!");
    } catch (error) {
      console.error("Error submitting form", error);
      alert("❌ Something went wrong!");
    }
  };




  return (
    <>
      <Spinner />
      <Topbar />
      <Navbar />
      <PageHeader title="Contact Us" />

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h4 className="section-title">Contact Us</h4>
            <h1 className="display-5 mb-4">If You Have Any Query, Please Feel Free Contact Us</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="d-flex flex-column justify-content-between h-100">
                <div className="bg-light d-flex align-items-center w-100 p-4 mb-4">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" style={{ width: '55px', height: '55px' }}>
                    <i className="fa fa-map-marker-alt text-primary"></i>
                  </div>
                  <div className="ms-4">
                    <p className="mb-2">Address 1</p>
                    <h3 className="mb-0">303,Third FLoor,Dreamland complex, Sarthana, Jakatnaka, Surat</h3>
                  </div>
                </div>

                 <div className="bg-light d-flex align-items-center w-100 p-4 mb-4">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" style={{ width: '55px', height: '55px' }}>
                    <i className="fa fa-map-marker-alt text-primary"></i>
                  </div>
                  <div className="ms-4">
                    <p className="mb-2">Address 2</p>
                    <h3 className="mb-0">202, Kopper Arcade, Opp Vishveshwar Mahadev Temple, Mavdi main road,Rajkot
                    </h3>
                  </div>
                </div>

                 <div className="bg-light d-flex align-items-center w-100 p-4 mb-4">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" style={{ width: '55px', height: '55px' }}>
                    <i className="fa fa-map-marker-alt text-primary"></i>
                  </div>
                  <div className="ms-4">
                    <p className="mb-2">Address 3</p>
                    <h3 className="mb-0">Babra, Amreli, Gujarat</h3>
                  </div>
                </div>
                <div className="bg-light d-flex align-items-center w-100 p-4 mb-4">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" style={{ width: '55px', height: '55px' }}>
                    <i className="fa fa-phone-alt text-primary"></i>
                  </div>
                  <div className="ms-4">
                    <p className="mb-2">Call Us Now</p>
                    <h3 className="mb-0">+91 70968 82030 / +91 70968 25434</h3>
                  </div>
                </div>
                <div className="bg-light d-flex align-items-center w-100 p-4">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" style={{ width: '55px', height: '55px' }}>
                    <i className="fa fa-envelope-open text-primary"></i>
                  </div>
                  <div className="ms-4">
                    <p className="mb-2">Mail Us Now</p>
                    <h3 className="mb-0">hariconstructions324@gmail.com</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <form onSubmit={handlesubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '100px' }}></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container-xxl pt-5 px-0 wow fadeIn" data-wow-delay="0.1s">
        <iframe className="w-100 mb-n2" style={{ height: '450px' }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
          frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
      </div> */}

      <Footer />
      <BackToTop />
    </>
  );
};

export default Contact;
