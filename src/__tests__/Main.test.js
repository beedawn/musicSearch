import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Main from '../views/Main';
import '@testing-library/jest-dom';

describe('App tests', () => {
  it('should contains the search', () => {
    render(<Main />);
    const heading = screen.getByAltText('userInputTextBox');
    const button = screen.getByText('Submit');
    fireEvent.change(heading,{target:"pizza"});
    fireEvent.click(button);
    expect(heading).toBeInTheDocument();
  });
  it('should contain submit button', () => {
    render(<Main />);
    const button = screen.getByText('Submit');
    expect(button).toBeInTheDocument();
  });
});
