import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDna,
  faSackDollar,
  faUserDoctor,
  faUserGear,
  faWheelchair,
} from '@fortawesome/free-solid-svg-icons';
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
          <img src={logo} alt="logo" style={{ marginTop: '2rem' }} />
          <h1 style={{ marginLeft: '3rem', marginTop: '2rem' }}> SHC</h1>
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
          <a
            style={{ fontSize: '16px', marginLeft: '0' }}
            onClick={(e) => handleClick('')}
          >
            Dashboard
          </a>
        </div>
        <h2>Details</h2>
        <div className="sidebar__link">
          <FontAwesomeIcon icon={faWheelchair} size="2x" />
          <a onClick={(e) => handleClick('patient')}>Patient</a>
        </div>
        <div className="sidebar__link">
          <FontAwesomeIcon icon={faUserDoctor} size="2x" />
          <a onClick={(e) => handleClick('doctor')}>Doctor</a>
        </div>
        <div className="sidebar__link">
          <FontAwesomeIcon icon={faDna} size="2x" />
          <a onClick={(e) => handleClick('appointment')}>Appointments</a>
        </div>
        <div className="sidebar__link">
          <FontAwesomeIcon icon={faSackDollar} size="2x" />
          <a onClick={(e) => handleClick('bill')}>Bills</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
