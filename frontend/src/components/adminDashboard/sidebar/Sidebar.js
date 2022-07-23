/* eslint-disable jsx-a11y/anchor-is-valid */
import './Sidebar.css';
import logo from '../assets/logo.png';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const handleClick = (dest) => {
    window.location.href = window.location.origin + '/admin/' + dest;
  };

  return (
    <div className={sidebarOpen ? 'sidebar_responsive' : ''} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1 style={{ marginLeft: '7rem' }}> SHC</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        />
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home" />
          <a style={{ fontSize: '16px' }} onClick={(e) => handleClick('')}>
            Dashboard
          </a>
        </div>
        <h2>Details</h2>
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true" />
          <a onClick={(e) => handleClick('patient')}>Patient</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o" />
          <a onClick={(e) => handleClick('doctor')}>Doctor</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench" />
          <a onClick={(e) => handleClick('appointment')}>Appointments</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive" />
          <a onClick={(e) => handleClick('bill')}>Bills</a>
        </div>
        {/* <h2>LEAVE</h2>
        <div className="sidebar__link">
          <i className="fa fa-question" />
          <a href="#">Requests</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-sign-out" />
          <a href="#">Leave Policy</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-calendar-check-o" />
          <a href="#">Special Days</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-files-o" />
          <a href="#">Apply for leave</a>
        </div> */}
        <h2>PAYROLL</h2>
        <div className="sidebar__link">
          <i className="fa fa-money" />
          <a href="#">Payroll</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-briefcase" />
          <a href="#">Paygrade</a>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off" />
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
