import './App.css';
import Main from './components/main'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import AboutUs from './pages/AboutUs';
import WhatWeDo from './pages/WhatWeDo';
import OurProducts from './pages/OurProducts';
import CrumbRubber from './pages/CrumbRubber'
import RubberMulch from './pages/RubberMulch';
import Applications from './pages/Applications';
import News from './pages/News';
import ContactUs from './pages/ContactUs';
import NoPage from './pages/NoPage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='about-us' element={<AboutUs />} />
        <Route path='what-we-do' element={<WhatWeDo />} />
        <Route path='our-products' element={<OurProducts />} />
        <Route path='crumb-rubber' element={<CrumbRubber />} />
        <Route path='rubber-mulch' element={<RubberMulch />} />
        <Route path='applications' element={<Applications />} />
        <Route path='news' element={<News />} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
