import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './Admin.css';
import Main from '../../components/adminDashboard/main/Main';
import PatientDetails from './Patient/PatientDetails';
import Navbar from '../../components/adminDashboard/navbar/Navbar';
import Sidebar from '../../components/adminDashboard/sidebar/Sidebar';
import DoctorDetails from './Doctor/DoctorDetails';
import Appointment from './Appointments/Appointment';

const Admin = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/patient" element={<PatientDetails />} />
        <Route path="/doctor" element={<DoctorDetails />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default Admin;
