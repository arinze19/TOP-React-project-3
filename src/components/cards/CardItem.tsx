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
      <div className='card-item-container__info' data-testid='card-item-name'>
        {pokemon.name}
      </div>
    </div>
  );
}

export default cardItem;
