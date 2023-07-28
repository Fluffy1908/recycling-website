import './App.css';
import Main from './components/main'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom' 


function App() {
  return (
    <Router>
      <Navbar />
      <Main />
    </Router>
  );
}

export default App;
