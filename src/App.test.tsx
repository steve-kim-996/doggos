import { render, screen } from '@testing-library/react';
import { DoggoHome } from './DoggoHome';

test('renders doggo images', () => {
  render(<DoggoHome />);
  const imgElements = screen.getAllByRole('img');
  expect(imgElements.length).toBeGreaterThan(0);
});
