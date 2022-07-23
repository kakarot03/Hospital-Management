import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Admin.css';
import Main from '../../components/adminDashboard/main/Main';
import PatientDetails from './Patient/PatientDetails';
import Navbar from '../../components/adminDashboard/navbar/Navbar';
import Sidebar from '../../components/adminDashboard/sidebar/Sidebar';

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
        {/* <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<Patient />} /> */}
      </Routes>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default Admin;
