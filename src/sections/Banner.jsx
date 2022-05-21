import React from 'react';
import Typed from 'react-typed';

const Banner = () => {
  return (
    <section
      id="main_banner"
      name="top"
      className="banner_water_effect background3 overlay_one"
    >
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-md-12 col-lg-12 home-content text-left">
            <div className="mainbanner_content">
              <span className="pb_5 banner_title color_white">
                I Am Austin Jackson!
              </span>
              <h1 className="cd-headline clip is-full-width text-uppercase">
                <span className="color_white mr-3">I am a</span>
                {/* <span className="cd-words-wrapper color_default"> */}
                <Typed
                  style={{ color: '#ffb32f' }}
                  strings={['UI/UX Designer.', 'Developer.', 'Freelancer.']}
                  typeSpeed={40}
                  backSpeed={40}
                />
                {/* </span> */}
              </h1>
              <p className="color_white mb_30">
                Libero habitasse sollicitudin aliquet venenatis iaculis placerat
                amet ligula, eleifend nonummy enim in volutpat diam.
              </p>
              <a className="btn btn-default" href="#">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
