
// @ts-nocheck
import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom'
import StringCalculator from '../../src/pages/home';
import userEvent from '@testing-library/user-event';

describe('String Calculator Component Test', () => {
  const testInputString = "1,2,3"

  it('Check if String Calculator UI is rendered', () => {
    render(
      <StringCalculator />
    );
    const inputElement = screen.getByTestId("input-element");
    expect(inputElement).toBeInTheDocument();
  });

  it('User will type text in the input and test if controlled component is working fine using React state', async () => {
    render(
      <StringCalculator />
    );
    const inputElement = screen.getByTestId("input-element");
    await userEvent.type(inputElement,testInputString)
    expect(inputElement).toHaveValue(testInputString);
  });
});