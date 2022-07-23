import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import Doctor from './pages/Doctor/Doctor';
import Patient from './pages/Patient/Patient';
import Login from './pages/Login/Login';

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/patient" element={<Patient />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

// <Router>
//   <div className="pages">
//     <Routes>
//       <Route exact path="/" element={<Home />} />
//       <Route exact path="/login" element={<Login />} />
//       <Route exact path="/admin" element={<Admin />} />
//       <Route exact path="/doctor" element={<Doctor />} />
//       <Route exact path="/patient" element={<Patient />} />
//     </Routes>
//   </div>
// </Router>;
