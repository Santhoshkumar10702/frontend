import {Link} from 'react-router-dom';
import {restaurantFood} from '../../../icons_assets';

import './styles.css';
import {useConfirmationReducer} from '../../../store';

function Hero() {
  const confirmation = useConfirmationReducer();

  return (
    <section id="main-top-section">
      <div id="main-container">
        <div id="main-left-section">
          <h1 className="main-title">Little Lemon</h1>
          <h3 className="main-subtitle">Chicago</h3>
          <p className="main-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link
            to={
              confirmation.state.confirmation
                ? '/booking-confirmation'
                : '/booking'
            }
            className="main-button">
            Reserve a table
          </Link>
        </div>
        <div id="main-img">
          <img src={restaurantFood} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
