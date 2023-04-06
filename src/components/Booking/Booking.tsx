import {useFormik} from 'formik';

import * as Yup from 'yup';

import './styles.css';

function Booking() {
  const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      numberOfGuests: '',
      occasion: '',
    },
    validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section id="booking">
      <div className="booking-form-section">
        <form onSubmit={formik.handleSubmit}>
          <h1>Booking</h1>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" />
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time ">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            defaultValue={1}
            max="10"
            id="guests"
          />
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <input type="submit" id="submit-btn" value="Make Your reservation" />
        </form>
      </div>
    </section>
  );
}

export default Booking;

const validationSchema = Yup.object({
  date: Yup.string().required('Date is Required'),
  time: Yup.string().required('Time is Required'),
  numberOfGuests: Yup.string().required('Number of Guests is Required'),
  occasion: Yup.string().required('Occasion is Required'),
});
