import CardItem from './CardItem';
import '@styles/cards/card-list.css';
import { CardListProps } from '../../types';

function cardList({ pokemons, handleClick }: CardListProps) {
  const pokemonsList = pokemons.map((pokemon, idx) => (
    <CardItem pokemon={pokemon} key={idx} handleClick={handleClick} />
  ));

  return <div className='card-list-container'>{pokemonsList}</div>;
}

export default cardList;
