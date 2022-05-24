import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
const ScrollBottom = () => {
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
