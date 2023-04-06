import {useConfirmationReducer} from '../../store';
import './styles.css';

function BookingConfirmation() {
  const {state} = useConfirmationReducer();
  return (
    <section id="booking-confirmation">
      <div className="booking-confirmation-section">
        {state.confirmation ? (
          <div>
            <h1>Booking Confirmed</h1>
            <div>
              <h3>Date</h3>
              <span>{state.confirmation.date}</span>
            </div>
            <div>
              <h3>Time</h3>
              <span>{state.confirmation.time}</span>
            </div>
            <div>
              <h3>Number of Guests</h3>
              <span>{state.confirmation.numberOfGuests}</span>
            </div>
            <div>
              <h3>Occasion</h3>
              <span>{state.confirmation.occasion}</span>
            </div>
          </div>
        ) : (
          <h1>No Booking Confirmed at the Moment</h1>
        )}
      </div>
    </section>
  );
}

export default BookingConfirmation;
