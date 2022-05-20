import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    //   Navbar In Header
    <header className="main_nav">
      <div className="container">
        <nav
          id="navbar-example2"
          className="navbar navbar-expand-lg navbar-light w-100"
        >
          <a className="navbar-brand" href="#top">
            <img className="nav-logo" src="images/logo/1.png" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1000}
                  className="nav-link"
                  to="top"
                  data-scroll="top"
                >
                  Home<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1000}
                  className="nav-link"
                  to="about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1000}
                  className="nav-link"
                  to="skill"
                >
                  Skill
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1000}
                  className="nav-link"
                  to="services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1000}
                  className="nav-link"
                  to="portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1000}
                  className="nav-link"
                  to="testimonial"
                >
                  Testimonial
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1000}
                  className="nav-link"
                  to="blog"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1000}
                  className="nav-link"
                  to="contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
