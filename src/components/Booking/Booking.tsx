import {useNavigate} from 'react-router-dom';

import BookingForm, {FormDataType} from './BookingForm';

import {useConfirmationReducer} from '../../store';
import {submitAPI} from '../../utils';

import './styles.css';

function Booking() {
  const navigate = useNavigate();
  const confirmation = useConfirmationReducer();

  const onSubmit = (values: FormDataType) => {
    const result = submitAPI(values);

    if (result) {
      confirmation.actions.setConfirmation(values);
      navigate('/booking-confirmation');
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
