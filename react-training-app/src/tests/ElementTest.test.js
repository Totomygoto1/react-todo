import { render, screen } from '@testing-library/react';
import Card from './QA.js';

test('Elements renders successfully', () => {
  render(<Card />);
  const element = screen.getByText(/summer/i);
  expect(element).toBeInTheDocument();
});

// npm test
