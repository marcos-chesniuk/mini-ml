import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MiniML redirect link', () => {
  render(<App />);
  const linkElement = screen.getByAltText('logo mercado libre')
  expect(linkElement).toBeInTheDocument();
});
