import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const elm = useRef();
  const scrollHandler = (e) => {
    const scrollValue = window.scrollY;
    console.log(scrollValue);
    if (scrollValue >= 200) {
      elm.current.classList.add('nav-scroll');
      document.querySelector('.scrollBottomIcon').classList.add('visible');
    } else {
      document.querySelector('.scrollBottomIcon').classList.remove('visible');
      elm.current.classList.remove('nav-scroll');
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  return (
    //   Navbar In Header
    <header className="main_nav" ref={elm}>
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
                  offset={-20}
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
                  offset={-20}
                  duration={500}
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
                  offset={-20}
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
                  offset={-20}
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
                  offset={-20}
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
                  offset={-20}
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
                  offset={-20}
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
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={1000}
                  className="nav-link"
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
