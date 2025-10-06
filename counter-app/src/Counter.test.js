import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('renders with default initial value', () => {
    const { getByText } = render(<Counter />);
    expect(getByText('Count: 0')).toBeInTheDocument();
  });

  test('renders with provided initial value', () => {
    const { getByText } = render(<Counter initialValue={5} />);
    expect(getByText('Count: 5')).toBeInTheDocument();
  });

  test('increments count when + button is clicked', () => {
    const { getByText } = render(<Counter initialValue={1} />);
    const incrementButton = getByText('+');

    fireEvent.click(incrementButton);

    expect(getByText('Count: 2')).toBeInTheDocument();
  });

  test('decrements count when - button is clicked', () => {
    const { getByText } = render(<Counter initialValue={2} />);
    const decrementButton = getByText('-');

    fireEvent.click(decrementButton);

    expect(getByText('Count: 1')).toBeInTheDocument();
  });

  test('handles multiple increments and decrements', () => {
    const { getByText } = render(<Counter initialValue={0} />);
    const incrementButton = getByText('+');
    const decrementButton = getByText('-');

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);

    expect(getByText('Count: 1')).toBeInTheDocument(); // 0 + 2 - 1 = 1
  });
});
