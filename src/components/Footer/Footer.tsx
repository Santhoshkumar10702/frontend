import {retaurantChef} from '../../icons_assets';

import './styles.css';

function Footer() {
  return (
    <footer id="footer">
      <div id="footer-info">
        <img alt="" src={retaurantChef} />
        <div className="footer-links-section">
          <div>
            <h4>Quick links</h4>
            <h5>Home</h5>
            <h5>About</h5>
            <h5>Menu</h5>
            <h5>Reservations</h5>
            <h5>Order Online</h5>
            <h5>Login</h5>
          </div>
        </div>
        <div className="footer-links-section">
          <div>
            <h4>Contact</h4>
            <h5>Zone 3, Poblacion, El Salvador City</h5>
            <h5>09051691533</h5>
            <h5>gpbaculio@gmail.com</h5>
          </div>
        </div>
        <div className="footer-links-section">
          <div>
            <h4>Social</h4>
            <h5>Facebook</h5>
            <h5>Twitter</h5>
            <h5>Linked</h5>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
