import { render, screen, fireEvent } from '@testing-library/react';
import TheMenu from 'components/layout/TheMenu';

test('The Menu toggles visibility on click', async () => {
  render(<TheMenu />);

  const buttonElement = await screen.findByTestId('the-menu-button');
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(buttonElement).not.toBeVisible();
});
