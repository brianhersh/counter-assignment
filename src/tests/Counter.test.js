// import necessary react testing library helpers here
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// import the Counter component here
import Counter from '../components/Counter';


beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})


test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});


test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCounterVal = screen.getByTestId(/count/);
  expect(initialCounterVal).toHaveTextContent('0');
});


test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCounterVal = screen.getByTestId('count');

  //use the events to trigger the button press on the "+"
  userEvent.click(screen.getByText('+'));

  //get the new value post-click
  const newCounterVal = screen.getByTestId(/count/);

  //compare the new and old value (should be newCounterVal = initialCounterVal+1, which in this case upon start-up should be 1)
  expect(newCounterVal).toHaveTextContent('1');
});


test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCounterVal = screen.getByTestId(/count/);

  //use the events to trigger the button press on the "-"
  userEvent.click(screen.getByText('-'));

  //get the new value post-click
  const newCounterVal = screen.getByTestId(/count/);

  //compare the new and old value (should be newCounterVal = initialCounterVal-1, which in this case upon start-up should be -1)
  expect(newCounterVal).toHaveTextContent('-1');
});
