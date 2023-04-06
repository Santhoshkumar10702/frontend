import {useState} from 'react';

import classNames from 'classnames';

import './styles.css';
import {Link} from 'react-router-dom';

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
      <ul className={classNames({show: toggleMenu, hide: !toggleMenu})}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <Link to="/booking-confirmation">Reservations</Link>
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
