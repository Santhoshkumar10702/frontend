import {useConfirmationReducer} from '../../store';
import './styles.css';

function BookingConfirmation() {
  const confirmation = useConfirmationReducer();
  return (
    <section id="booking-confirmation">
      <div className="booking-confirmation-section">
        {confirmation.state.confirmation ? (
          <h1>Booking Confirmed</h1>
        ) : (
          <h1>No Booking Confirmed at the Moment</h1>
        )}
      </div>
    </section>
  );
}

export default BookingConfirmation;
