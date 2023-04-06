import BookingForm, {FormDataType} from './BookingForm';
import './styles.css';

function Booking() {
  const onSubmit = (values: FormDataType) => {};

  return (
    <section id="booking">
      <div className="booking-form-section">
        <BookingForm onSubmit={onSubmit} />
      </div>
    </section>
  );
}

export default Booking;
