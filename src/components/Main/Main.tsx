import { restaurantFood } from '../../icons_assets'
import Specials from './Specials'
import './styles.css'

function Main() {
  return (
    <main>
      <div id='main-top-section'>
        <div id='main-container'>
          <div id='main-left-section'>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button>Reserve a table</button>
          </div>
          <div id='main-img'>
            <img src={restaurantFood} />
          </div>
        </div>
      </div>
      <Specials />
    </main>
  )
}

export default Main