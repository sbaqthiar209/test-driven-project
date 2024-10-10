
// @ts-nocheck
import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom'
import Home from '../../src/pages/home';
import userEvent from '@testing-library/user-event';

describe('Home Component Test', () => {

  it('Renders correctly initial document', async () => {
    render(
      <Home />
    );
    const loginLabel = screen.getByTestId("home-banner");
    expect(loginLabel).toBeInTheDocument();
  });
});