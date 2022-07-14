import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders button with text', () => {
  render(<App></App>);

  const buttonEl = screen.getByText(/Hello World/i);

  expect(buttonEl).toBeInTheDocument();
});