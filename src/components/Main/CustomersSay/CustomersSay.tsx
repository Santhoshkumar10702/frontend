import {useId} from 'react';

import {user1, user2, user3} from '../../../icons_assets';

import './styles.css';

function CustomersSay() {
  const id = useId();

  return (
    <section id="testimonials">
      <h1>Testimonials</h1>
      <div className="ratings">
        {reviews.map((r, i) => (
          <div key={`${id}-${i}`} className="rating">
            <div className="user-section">
              <img src={r.image} />
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
    image: user1,
  },
  {
    name: 'Phil Jackson',
    review: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor',
    image: user2,
  },
  {
    name: 'Kobe Bryant',
    review: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor',
    image: user3,
  },
];
