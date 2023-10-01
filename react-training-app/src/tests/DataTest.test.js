import { render, screen } from '@testing-library/react';
import Question from './Test.js';
import { dataList } from './datalist.js';

test('dataList renders successfully', () => {
  render(<Question data={dataList} />);
  expect(screen.getByText(/green/i)).toBeInTheDocument();
});

// npm test
