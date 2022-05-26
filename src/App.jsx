import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';
import Blogs from './pages/Blogs';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/blogs" index element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
