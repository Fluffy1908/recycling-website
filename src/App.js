import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import ScrollToTop from './components/ScrollToTop';
import AboutUs from './pages/AboutUs';
import WhatWeDo from './pages/WhatWeDo';
import OurProducts from './pages/OurProducts';
import CrumbRubber from './pages/CrumbRubber'
import RubberMulch from './pages/RubberMulch';
import MetalCord from './pages/MetalCord';
import BeadRing from './pages/BeadRing';
import TextileCord from './pages/TextileCord';
import Applications from './pages/Applications';
import DisposeTires from './pages/Dispose Tires';
import ContactUs from './pages/ContactUs';
import NoPage from './pages/NoPage';

function App() {
  
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/en" element={<Main />} />
        <Route path="/ua" element={<Main />} />
        <Route path="/ru" element={<Main />} />


        <Route path='/en/about-us' element={<AboutUs />} />
        <Route path='/ua/about-us' element={<AboutUs />} />
        <Route path='/ru/about-us' element={<AboutUs />} />


        <Route path='/en/what-we-do' element={<WhatWeDo />} />
        <Route path='/ua/what-we-do' element={<WhatWeDo />} />
        <Route path='/ru/what-we-do' element={<WhatWeDo />} />


        <Route path='/en/our-products' element={<OurProducts />} />
        <Route path='/ua/our-products' element={<OurProducts />} />
        <Route path='/ru/our-products' element={<OurProducts />} />


        <Route path='/en/crumb-rubber' element={<CrumbRubber />} />
        <Route path='/ua/crumb-rubber' element={<CrumbRubber />} />
        <Route path='/ru/crumb-rubber' element={<CrumbRubber />} />


        <Route path='/en/rubber-mulch' element={<RubberMulch />} />
        <Route path='/ua/rubber-mulch' element={<RubberMulch />} />
        <Route path='/ru/rubber-mulch' element={<RubberMulch />} />


        <Route path='/en/metal-cord' element={<MetalCord />} />
        <Route path='/ua/metal-cord' element={<MetalCord />} />
        <Route path='/ru/metal-cord' element={<MetalCord />} />


        <Route path='/en/bead-ring' element={<BeadRing />} />
        <Route path='/ua/bead-ring' element={<BeadRing />} />
        <Route path='/ru/bead-ring' element={<BeadRing />} />


        <Route path='/en/textile-cord' element={<TextileCord />} />
        <Route path='/ua/textile-cord' element={<TextileCord />} />
        <Route path='/ru/textile-cord' element={<TextileCord />} />


        <Route path='/en/applications' element={<Applications />} />
        <Route path='/ua/applications' element={<Applications />} />
        <Route path='/ru/applications' element={<Applications />} />


        <Route path='/en/dispose-tires' element={<DisposeTires />} />
        <Route path='/ua/dispose-tires' element={<DisposeTires />} />
        <Route path='/ru/dispose-tires' element={<DisposeTires />} />
        


        <Route path='/en/contact-us' element={<ContactUs />} />
        <Route path='/ua/contact-us' element={<ContactUs />} />
        <Route path='/ru/contact-us' element={<ContactUs />} />


        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
