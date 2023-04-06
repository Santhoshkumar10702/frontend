import {render, screen} from '@testing-library/react';
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText('Book Now');
  expect(headingElement).toBeInTheDocument();
});

test('should correctly set default values', () => {
  render(<BookingForm />);

  expect(
    (screen.getByRole('option', {name: '17:00'}) as HTMLOptionElement).selected,
  ).toBe(true);
  expect(screen.getByDisplayValue(1)).toHaveAttribute('id', 'guests');
  expect(
    (screen.getByRole('option', {name: 'Birthday'}) as HTMLOptionElement)
      .selected,
  ).toBe(true);
});
