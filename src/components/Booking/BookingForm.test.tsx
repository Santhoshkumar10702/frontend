import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {act} from 'react-dom/test-utils';

import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
  const handleSubmit = jest.fn();
  render(<BookingForm onSubmit={handleSubmit} />);
  const headingElement = screen.getByText('Book Now');
  expect(headingElement).toBeInTheDocument();
});

test('should correctly set default values', () => {
  const handleSubmit = jest.fn();
  render(<BookingForm onSubmit={handleSubmit} />);

  expect(
    (screen.getByRole('option', {name: '17:00'}) as HTMLOptionElement).selected,
  ).toBe(true);
  expect(screen.getByDisplayValue(1)).toHaveAttribute('id', 'guests');
  expect(
    (screen.getByRole('option', {name: 'Birthday'}) as HTMLOptionElement)
      .selected,
  ).toBe(true);
});

test('change values on occasion options', async () => {
  const handleSubmit = jest.fn();
  render(<BookingForm onSubmit={handleSubmit} />);

  await act(async () => {
    userEvent.selectOptions(
      // Find the select element, like a real user would.
      await screen.findByTestId('occasion'),
      // Find and select the Ireland option, like a real user would.
      screen.getByRole('option', {name: 'Anniversary'}),
    );
  });
  expect(
    (screen.getByRole('option', {name: 'Anniversary'}) as HTMLOptionElement)
      .selected,
  ).toBe(true);
});

test('change values on time options', async () => {
  const handleSubmit = jest.fn();
  render(<BookingForm onSubmit={handleSubmit} />);
  await act(async () => {
    userEvent.selectOptions(
      // Find the select element, like a real user would.
      await screen.findByTestId('time'),
      // Find and select the Ireland option, like a real user would.
      screen.getByRole('option', {name: '20:00'}),
    );
  });
  expect(
    (screen.getByRole('option', {name: '20:00'}) as HTMLOptionElement).selected,
  ).toBe(true);
});

test('user can submit valid values', async () => {
  const handleSubmit = jest.fn();
  render(<BookingForm onSubmit={handleSubmit} />);
  await act(async () => {
    userEvent.type(screen.getByTestId('date'), '2023-06-23');
    userEvent.selectOptions(
      await screen.findByTestId('time'),
      screen.getByRole('option', {name: '20:00'}),
    );
    userEvent.selectOptions(
      await screen.findByTestId('occasion'),
      screen.getByRole('option', {name: 'Anniversary'}),
    );
    userEvent.type(screen.getByTestId('guests'), '2');
    userEvent.click(screen.getByTestId('submit-btn'));
  });
  expect(handleSubmit).toHaveBeenCalledWith({
    date: '2023-06-23',
    time: '20:00',
    numberOfGuests: 12,
    occasion: 'Anniversary',
  });
});
