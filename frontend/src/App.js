import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import Doctor from './pages/Doctor/Doctor';
import DoctorHome from './pages/Doctor/DotorHome';
import Patient from './pages/Patient/Patient';
import PatientHome from './pages/Patient/PatientHome';
import AdminAuth from './pages/AdminAuth/AdminAuth';
import BookAppointment from './pages/Appointment/BookAppointment/BookAppointment';
import FindDoctor from './pages/Appointment/FindDoctor/FindDoctor';

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminAuth" element={<AdminAuth />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/patientHome/:id" element={<PatientHome />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/doctorHome/:id" element={<DoctorHome />} />
          <Route path="/bookAppointment/:id" element={<BookAppointment />} />
          <Route path="/findDoctor/:id" element={<FindDoctor />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
