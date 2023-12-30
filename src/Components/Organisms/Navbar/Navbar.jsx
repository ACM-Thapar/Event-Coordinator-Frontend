import {Fragment} from 'react';
import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <nav>
        <div className={styles.navLinks}>
          <img src="" alt="logo" />
          <NavLink to="/">Home</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/calendar">Calendar</NavLink>
        </div>
        <button>Login</button>
      </nav>
    </Fragment>
  );
};
export default Navbar;
