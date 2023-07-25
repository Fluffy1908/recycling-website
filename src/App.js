import './App.css';
import Main from './components/main'
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom' 


function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
