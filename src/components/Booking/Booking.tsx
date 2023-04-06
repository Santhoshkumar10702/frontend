import BookingForm, {FormDataType} from './BookingForm';

import {submitAPI} from '../../utils';

import './styles.css';

function Booking() {
  const onSubmit = (values: FormDataType) => {
    submitAPI(values);
  };

  return (
    <section id="booking">
      <div className="booking-form-section">
        <BookingForm onSubmit={onSubmit} />
      </div>
    </section>
  );
}

export default Booking;
