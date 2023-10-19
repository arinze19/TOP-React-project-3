// Styles
import './styles.css';

// Types
import { pokemon } from 'src/types';

export interface CardProps {
  pokemons: pokemon[];
  handleClick: (id: number) => void;
}

export interface CardItemProps {
  pokemon: pokemon;
  handleClick: (id: number) => void;
}

const Card = ({ pokemons, handleClick }: CardProps) => {
  return (
    <div className='card-list-container'>
      {pokemons.map((pokemon, idx) => (
        <CardItem pokemon={pokemon} key={idx} handleClick={handleClick} />
      ))}
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
