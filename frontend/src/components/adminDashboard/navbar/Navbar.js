/* eslint-disable jsx-a11y/anchor-is-valid */
import './Navbar.css';
import avatar from '../assets/avatar.svg';

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true" />
      </div>
      <div className="navbar__left">
        <a className="active_link" href="#">
          Admin Panel
        </a>
      </div>
      <div className="navbar__right" />
    </nav>
  );
};

export default Navbar;
