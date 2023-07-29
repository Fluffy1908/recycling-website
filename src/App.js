import './App.css';
import Main from './components/main'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom' 
import Footer from './components/Footer'


function App() {
  return (
    <Router>
      <Navbar />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
