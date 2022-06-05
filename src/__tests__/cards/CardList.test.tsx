import { render, screen } from '@testing-library/react';
import CardList from 'components/cards/CardList';
import { getMockPokemons } from 'helper-functions/test-helpers';

test('Card List renders correct number of pokemons', async () => {
  const handleClick = () => jest.fn();

  render(
    <CardList
      pokemons={getMockPokemons}
      level={Math.floor(getMockPokemons.length / 2)}
      handleClick={handleClick}
    />
  );

  const pokemonsArray = await screen.findAllByTestId('card-item');
  expect(pokemonsArray).toHaveLength(Math.floor((getMockPokemons.length / 2) * 2));
});
