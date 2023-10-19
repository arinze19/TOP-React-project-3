import '@styles/cards/card-item.css';
import { CardItemProps } from '../../types';

function cardItem({ pokemon, handleClick }: CardItemProps) {
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
}

export default cardItem;
