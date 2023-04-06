import {useNavigate} from 'react-router-dom';

import BookingForm, {FormDataType} from './BookingForm';

import {submitAPI} from '../../utils';

import './styles.css';

function Booking() {
  const navigate = useNavigate();

  const onSubmit = (values: FormDataType) => {
    const result = submitAPI(values);

    if (result) {
      navigate('/booking-confirmation', {state: values});
    }
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
