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
          <input
            type="date"
            id="res-date"
            name="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
          />
          {formik.touched.date && formik.errors.date ? (
            <span>{formik.errors.date}</span>
          ) : null}

          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time "
            name="time"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.time}>
            <option value={'17:00'}>17:00</option>
            <option value={'18:00'}>18:00</option>
            <option value={'19:00'}>19:00</option>
            <option value={'20:00'}>20:00</option>
            <option value={'21:00'}>21:00</option>
            <option value={'22:00'}>22:00</option>
          </select>
          {formik.touched.time && formik.errors.time ? (
            <span>{formik.errors.time}</span>
          ) : null}
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
          />
          {formik.touched.numberOfGuests && formik.errors.numberOfGuests ? (
            <span>{formik.errors.numberOfGuests}</span>
          ) : null}
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.occasion}>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          {formik.touched.occasion && formik.errors.occasion ? (
            <span>{formik.errors.occasion}</span>
          ) : null}
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
