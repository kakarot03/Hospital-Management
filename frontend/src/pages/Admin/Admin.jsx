import { useState } from 'react';
import Main from '../../components/adminDashboard/main/Main';
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
      <Main />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default Admin;
