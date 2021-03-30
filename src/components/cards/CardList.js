import CardItem from "./CardItem";
import "../../styles/cards/card-list.css"

function cardList({ pokemons }) {
  const pokemonsList = pokemons.map((pokemon, idx) => (
    <CardItem pokemon={pokemon} key={idx} />
  ));

  return <div className="card-list-container">{pokemonsList}</div>;
}

export default cardList;
