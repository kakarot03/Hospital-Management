import './Navbar.css';
import HamburgerMenu from '../HamburgerMenu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Admin from '../../pages/Admin/Admin';
import Doctor from '../../pages/Doctor/Doctor';
import Patient from '../../pages/Patient/Patient';
import Login from '../../pages/Login/Login';

function App() {
  return (
    <>
      <Router>
        <HamburgerMenu />
      </Router>
    </>
  );
}

export default App;
