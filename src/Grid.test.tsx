import React from 'react';
import { render } from '@testing-library/react';
import Grid from './Grid';

test("Make sure it loads and doesn't fail", () => {
  render(<Grid />);
});
