import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import Doctor from './pages/Doctor/Doctor';
import Patient from './pages/Patient/Patient';
import Login from './pages/Login/Login';
import PatientHome from './pages/Patient/PatientHome';
import AdminAuth from './pages/AdminAuth/AdminAuth';

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminAuth" element={<AdminAuth />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/patientHome/:id" element={<PatientHome />} />
          <Route path="/doctor" element={<Doctor />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
