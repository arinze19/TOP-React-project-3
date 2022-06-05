import { render, screen } from '@testing-library/react';
import TheHeader from 'components/layout/TheHeader';
import { score } from 'types';

test('The Header renders the correct scoreline', async () => {
  const score: score = {
    currentScore: 12,
    highScore: 15,
  };

  render(<TheHeader score={score} />);

  const highScoreElement = await screen.findByTestId('high-score');
  const currentScoreElement = await screen.findByTestId('current-score');

  expect(highScoreElement.textContent).toMatch(/15/i);
  expect(currentScoreElement.textContent).toMatch(/12/i);
});
