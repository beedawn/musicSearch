import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Main from '../views/Main';
import '@testing-library/jest-dom';

describe('API test', () => {
  it('api text', async () => {
    render(<Main />);
    const input = screen.getByAltText('userInputTextBox');

    const button = screen.getByText('Submit');
    fireEvent.change(input, { target: { value: 'Good Day' } });
    expect(input.value).toBe('Good Day');
    fireEvent.click(button);
  });
});

describe('Form Submit Test', () => {
  it('form submit', async () => {
    render(<Main />);
    const input = screen.getByAltText('userInputTextBox');

    const button = screen.getByText('Submit');

    fireEvent.change(input, { target: { value: 'Good Day' } });
    expect(input.value).toBe('Good Day');
    fireEvent.submit(button);
  });
});
