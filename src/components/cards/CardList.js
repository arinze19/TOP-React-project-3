import CardItem from "./CardItem";
import "../../styles/cards/card-list.css";

function cardList({ pokemons, level, handleClick }) {
  const pokemonsList = pokemons.map((pokemon, idx) => (
    <CardItem pokemon={pokemon} key={idx} handleClick={handleClick} />
  ));

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Level {level}</h2>
      <div className="card-list-container">{pokemonsList}</div>
    </>
  );
}

export default cardList;
