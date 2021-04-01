import { useState, useEffect } from "react";
import Header         from "./components/layout/Header";
import CardList       from "./components/cards/CardList";
import {randomPicker} from "./helper-functions/app/index";

//  ============ initial state values
const initialScore = {
  currentScore: 0,
  highScore: 0,
};
// const initialLevel = 1;
let pokemonCatalog = [];

function App() {
  const [score, setScore]       = useState(initialScore);
  // const [level, setLevel]       = useState(initialLevel);
  const level                   = 1
  const [pokemons, setPokemons] = useState([]);

  // ======================== handler functions
  const handleClick = (id) => {
    let selectedPokemon       = pokemons.find((pokemon) => pokemon.id === id);
    if(selectedPokemon.isClicked) {
      return alert('you have lost')
    } 
    
    setScore(prevScore => prevScore + 1)
    selectedPokemon.isClicked = true

    const newPokemons         = pokemons.filter((pokemon) => pokemon.id !== id);
    newPokemons.push(selectedPokemon);

    setPokemons(newPokemons);
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
      .then((result) => result.json())
      .then((data) => data.results)
      .then((results) => {
        results.forEach((item, idx) => {
          const idxPad     = (idx + 1).toString().padStart(3, "0");
          const newPokemon = {
            name: item.name,
            id: idx,
            imgUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idxPad}.png`,
            isClicked: false,
          };
          pokemonCatalog.push(newPokemon);
        });
        return pokemonCatalog;
      })
      .then((catalog) => randomPicker(level, catalog))
      .then((randomPokemons) => setPokemons(randomPokemons))
      .catch((err) => console.log(err));
  }, [level]);

  return (
    <div className="App">
      <Header score={score} />
      <CardList pokemons={pokemons} handleClick={handleClick} level={level} />
    </div>
  );
}

export default App;
