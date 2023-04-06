import {useState} from 'react';

import classNames from 'classnames';

import './styles.css';
import {Link, NavLink} from 'react-router-dom';

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
      <ul className={classNames({show: toggleMenu, hide: !toggleMenu})}>
        <li>
          <NavLink
            to="/"
            className={state =>
              state.isActive ? 'active-nav' : 'inactive-nav'
            }>
            Home
          </NavLink>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <NavLink
            to="/booking-confirmation"
            className={state =>
              state.isActive ? 'active-nav' : 'inactive-nav'
            }>
            Reservations
          </NavLink>
        </li>
        <li>
          <a href="#">Order Online</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
      <a
        id="menu-burger"
        onClick={() => {
          setToggleMenu(m => !m);
        }}>
        &#9776;
      </a>
    </nav>
  );
}
//   <a>&#9776;</a>
export default Nav;
