import {useId} from 'react';

import './styles.css';

function CustomersSay() {
  const id = useId();

  return (
    <section id="testimonials">
      <div className="ratings">
        {reviews.map((r, i) => (
          <div key={`${id}-${i}`} className="rating">
            <div className="user-section">
              <img />
              <h4>{r.name}</h4>
            </div>
            <p>{r.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;

const reviews = [
  {
    name: 'Jasmine Smith',
    review: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor',
  },
  {
    name: 'Phil Jackson',
    review: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor',
  },
  {
    name: 'Kobe Bryant',
    review: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor',
  },
];
