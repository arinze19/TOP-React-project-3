import "../../styles/cards/card-item.css";

function cardItem({ pokemon, handleClick, id }) {
  return (
    <div className="card" onClick={() => handleClick(pokemon.id)}>
      <img src={pokemon.imgUrl} alt={pokemon.name} />
      <hr />
      <div className="card-item-container__info">{pokemon.name}</div>
    </div>
  );
}

export default cardItem;
