import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
const ScrollBottom = () => {
  console.log(window.scrollY);
  return (
    <a
      href="#"
      id="scroll"
      className="scrollBottomIcon "
      onClick={() => scroll.scrollToTop()}
    >
      <span></span>
    </a>
  );
};

export default ScrollBottom;
