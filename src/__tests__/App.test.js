import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import App from '../App';
import '@testing-library/jest-dom';

// test theme button exists and is clickable
describe('Theme test', () => {
  it('api text', () => {
    render(<App />);
    const toggle = screen.getByText('Lights');

    fireEvent.click(toggle);
  });
});
// check that input for search is rendered
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

