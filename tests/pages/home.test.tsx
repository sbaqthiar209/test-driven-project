
// @ts-nocheck
import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom'
import StringCalculator from '../../src/pages/home';
import userEvent from '@testing-library/user-event';

describe('String Calculator Component Test', () => {

  it('Check if String Calculator UI is rendered', () => {
    render(
      <StringCalculator />
    );
    const inputElement = screen.getByTestId("input-element");
    expect(inputElement).toBeInTheDocument();
  });
});