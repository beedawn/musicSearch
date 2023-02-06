import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import '@testing-library/jest-dom';

describe('App tests', () => {
  it('should contains the search', () => {
    render(<App />);
    const heading = screen.getByAltText('userInputTextBox');
    expect(heading).toBeInTheDocument();
  });
  it('should contain submit button', () => {
    render(<App />);
    const button = screen.getByText('Submit');
    expect(button).toBeInTheDocument();
  });
});
