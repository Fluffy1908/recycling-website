import './App.css';
import Main from './components/main'
import Navbar from './components/Navbar'
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom' 
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
