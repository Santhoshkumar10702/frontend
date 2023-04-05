import { greekSalad } from '../../../icons_assets'
import './styles.css'
import { FaMotorcycle } from 'react-icons/fa';
function Specials() {
  return (
    <section id='specials'>
      <div className='specials-top-section'>
        <h1>
          This weeks specials!
        </h1>
        <button className='main-button'>
          Online Menu
        </button>
      </div>
      <div className='specials-section'>
        <div className='special'>
          <img src={greekSalad} />
          <div>
            <div className='title-section'>
              <h4>Greek salad</h4>
              <p >$12.99</p>
            </div>
            <p className='special-desc'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            <button>Order a delivery&nbsp;<FaMotorcycle size={20} /></button>
          </div>
        </div>
        <div className='special'>
          <img src={greekSalad} />
          <div>
            <div className='title-section'>
              <h4>Greek salad</h4>
              <p >$12.99</p>
            </div>
            <p className='special-desc'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            <button>Order a delivery&nbsp;<FaMotorcycle size={20} /></button>
          </div>
        </div>
        <div className='special'>
          <img src={greekSalad} />
          <div>
            <div className='title-section'>
              <h4>Greek salad</h4>
              <p >$12.99</p>
            </div>
            <p className='special-desc'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            <button>Order a delivery&nbsp;<FaMotorcycle size={20} /></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Specials