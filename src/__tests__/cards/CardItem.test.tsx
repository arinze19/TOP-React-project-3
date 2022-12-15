import { render, screen } from '@testing-library/react';
import CardItem from '@components/cards/CardItem';
import { pokemon } from '../../types';

test('Card Item renders pokemon name properly', async () => {
  const testPokemon: pokemon = {
    id: 1,
    name: 'butterfree',
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
    isClicked: false,
  };
  const handleClick = jest.fn();

  render(<CardItem pokemon={testPokemon} handleClick={handleClick} />);

  const nameElement = await screen.findByTestId('card-item-name');

  expect(nameElement).toBeInTheDocument();
});
