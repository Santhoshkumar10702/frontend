import {restaurant, restaurantFood} from '../../../icons_assets';

import './styles.css';

function Chicago() {
  return (
    <section id="chicago">
      <div id="chicago-info">
        <div id="chicago-left-section">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div id="chicago-img-section">
          <img src={restaurant} id="restaurant" />
          <img src={restaurantFood} id="restaurant-food" />
        </div>
      </div>
    </section>
  );
}

export default Chicago;
