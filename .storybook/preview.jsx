import React from 'react';
import { ThemeProvider } from '../src/providers/ThemeProvider'
export const decorators = [
  (Story) => (
    <>
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    </>
  ),
];