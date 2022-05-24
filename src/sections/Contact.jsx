import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py_80 full_row bg_white" name="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className="section_title_1 text-center mx-auto pb_60 wow animated slideInUp">
              <h2 className="title text-uppercase">
                <span className="line_double mx-auto color_default">
                  contact
                </span>
                Get In Touch
              </h2>
              <span className="sub_title">
                Interdum a etiam sagittis vehicula porta. Massa felis eros quam
                blandit nulla dolor habitant. Ullamcorper quis ornare et proin
                pellentesque.
              </span>
            </div>
          </div>
          <div className="col-md-12 col-lg-12">
            <div className="row">
              <div className="col-md-4 col-lg-4">
                <div className="contact_info wow animated fadeInLeft">
                  <ul>
                    <li>
                      <div className="contact_text">
                        <h6 className="font-weight-bold color_primary">
                          Email
                        </h6>
                        <span className="color_secondery">
                          yourdomainname@gmail.com
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="contact_text">
                        <h6 className="font-weight-bold color_primary">
                          Phone
                        </h6>
                        <span className="color_secondery">+00 61 700 800</span>
                      </div>
                    </li>
                    <li>
                      <div className="contact_text">
                        <h6 className="font-weight-bold color_primary">
                          Address
                        </h6>
                        <span className="color_secondery">
                          Mouroubra WA 6472, Australia.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="contact_text">
                        <h6 className="font-weight-bold color_primary">
                          Website
                        </h6>
                        <span className="color_secondery">
                          www.yourdomain.com
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="socal_media_2 mt_15 d-inline-block">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8 col-lg-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
