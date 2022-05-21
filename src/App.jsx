import './App.css';

import Layout from './components/layout/Layout';
import About from './sections/About';
import Banner from './sections/Banner';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Portfolio from './sections/Portfolio';
import Service from './sections/Service';
import Skills from './sections/Skills';
import Testimonials from './sections/Testimonials';
import ScrollBottom from './components/ScrollBottom';

import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <Layout>
      <Banner />
      <About />
      <Skills />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
      <ScrollBottom />
    </Layout>
  );
}

export default App;
