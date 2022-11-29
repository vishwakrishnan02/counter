// import necessary react testing library helpers here
import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

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

  const initialCount = screen.getByText(/0/i);
  expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above

  expect(screen.getByText(/0/i)).toBeInTheDocument();
  userEvent.click(screen.getByRole('button', {name: '+'}));
  expect(screen.getByText(/1/i)).toBeInTheDocument();
  userEvent.click(screen.getByRole('button', {name: '+'}));
  expect(screen.getByText(/2/i)).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above

  expect(screen.getByText(/0/i)).toBeInTheDocument();
  userEvent.click(screen.getByRole('button', {name: '-'}));
  expect(screen.getByText(/-1/i)).toBeInTheDocument();
  userEvent.click(screen.getByRole('button', {name: '-'}));
  expect(screen.getByText(/-2/i)).toBeInTheDocument();
});
