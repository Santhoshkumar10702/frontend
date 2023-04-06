import {FaMotorcycle} from 'react-icons/fa';

import {greekSalad, lemonDessert} from '../../../icons_assets';
import bruchetta from '../../../icons_assets/bruchetta.svg';

import './styles.css';

function Specials() {
  return (
    <section id="specials">
      <div className="specials-top-section">
        <h1>This weeks specials!</h1>
        <button className="main-button">Online Menu</button>
      </div>
      <div className="specials-section">
        <div className="special">
          <img alt="" src={greekSalad} />
          <div className="special-info">
            <div className="title-section">
              <h4>Greek salad</h4>
              <p>$12.99</p>
            </div>
            <p className="special-desc">
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <button>
              Order a delivery&nbsp;
              <FaMotorcycle size={20} />
            </button>
          </div>
        </div>
        <div className="special">
          <img alt="" src={bruchetta} />
          <div className="special-info">
            <div className="title-section">
              <h4>Bruchetta</h4>
              <p>$5.99</p>
            </div>
            <p className="special-desc">
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <button>
              Order a delivery&nbsp;
              <FaMotorcycle size={20} />
            </button>
          </div>
        </div>
        <div className="special">
          <img alt="" src={lemonDessert} />
          <div className="special-info">
            <div className="title-section">
              <h4>Lemon Dessert</h4>
              <p>$5.00</p>
            </div>
            <p className="special-desc">
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <button>
              Order a delivery&nbsp;
              <FaMotorcycle size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specials;
