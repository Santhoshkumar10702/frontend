import {useState} from 'react';

import classNames from 'classnames';

import './styles.css';

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
      <ul className={classNames({show: toggleMenu, hide: !toggleMenu})}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Reservations</a>
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
