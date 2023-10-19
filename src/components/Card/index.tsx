// Styles
import './styles.css';

// Types
import { Pokemon } from '../../types';

export interface CardProps {
  pokemons: Pokemon[];
  handleClick: (id: number) => void;
}

export interface CardItemProps {
  pokemon: Pokemon;
  handleClick: (id: number) => void;
}

const Card = ({ pokemons, handleClick }: CardProps) => {
  return (
    <div className='card-list__container'>
      <div className='card-list__main'>
        {pokemons.map((pokemon, idx) => (
          <CardItem pokemon={pokemon} key={idx} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

const CardItem = ({ pokemon, handleClick }: CardItemProps) => {
  return (
    <div
      className='card'
      onClick={() => handleClick(pokemon.id)}
      data-testid='card-item'
    >
      <img src={pokemon.url} alt={pokemon.name} />
      <hr />
      <span className='card-item__name' data-testid='card-item-name'>
        {pokemon.name}
      </span>
    </div>
  );
};

export default Card;
