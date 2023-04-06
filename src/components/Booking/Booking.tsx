import {useFormik} from 'formik';

import * as Yup from 'yup';

import './styles.css';
import classNames from 'classnames';

function Booking() {
  const formik = useFormik({
    initialValues: {
      date: '',
      time: '17:00',
      numberOfGuests: 1,
      occasion: 'Birthday',
    },
    validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const dateError = formik.touched.date && formik.errors.date;
  const timeError = formik.touched.time && formik.errors.time;
  const numberOfGuestsError =
    formik.touched.numberOfGuests && formik.errors.numberOfGuests;
  const occasionError = formik.touched.occasion && formik.errors.occasion;

  return (
    <section id="booking">
      <div className="booking-form-section">
        <form onSubmit={formik.handleSubmit}>
          <h1>Booking</h1>
          <div className="book-item">
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              name="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
              className={classNames({inputError: dateError})}
            />
            {dateError ? (
              <span className="errorMsg">{formik.errors.date}</span>
            ) : null}
          </div>
          <div className="book-item">
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time "
              name="time"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.time}
              className={classNames({inputError: timeError})}>
              <option value={'17:00'}>17:00</option>
              <option value={'18:00'}>18:00</option>
              <option value={'19:00'}>19:00</option>
              <option value={'20:00'}>20:00</option>
              <option value={'21:00'}>21:00</option>
              <option value={'22:00'}>22:00</option>
            </select>
            {timeError ? (
              <span className="errorMsg">{formik.errors.time}</span>
            ) : null}
          </div>
          <div className="book-item">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              defaultValue={1}
              max="10"
              id="guests"
              name="numberOfGuests"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.numberOfGuests}
              className={classNames({inputError: numberOfGuestsError})}
            />
            {numberOfGuestsError ? (
              <span className="errorMsg">{formik.errors.numberOfGuests}</span>
            ) : null}
          </div>
          <div className="book-item">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.occasion}
              className={classNames({inputError: occasionError})}>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
            {occasionError ? (
              <span className="errorMsg">{formik.errors.occasion}</span>
            ) : null}
          </div>
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
