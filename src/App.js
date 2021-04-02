import { useState, useEffect }        from "react";
import {randomPicker, randomArranger} from "./helper-functions/app/index";
import TheHeader      from "./components/layout/TheHeader";
import CardList       from "./components/cards/CardList";
import TheMenu        from "./components/layout/TheMenu";

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
    const newPokemons       = [...pokemons]
    const clickedPokemonIdx = pokemons.findIndex(pok => pok.id === id)

    // end game if selected pokemon has been clicked
    if(newPokemons[clickedPokemonIdx].isClicked) alert('You have lost')

    setScore(prevScore => {
      return {
        currentScore: prevScore.currentScore + 1,
        highScore: prevScore.highScore + 1
      }
    })
    newPokemons[clickedPokemonIdx].isClicked = true

    // shuffle pokemons and set pokemon state
    setPokemons(randomArranger(newPokemons))
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=500")  
      .then((result) => result.json())
      .then((data) => data.results)
      .then((results) => {
        results.forEach((item, idx) => {
          const idxPad     = (idx + 1).toString().padStart(3, "0");
          const newPokemon = {
            name: item.name,
            id: item.id,
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
      <TheHeader score={score} />
      <CardList pokemons={pokemons} handleClick={handleClick} level={level} />
      <TheMenu />
    </div>
  );
}

export default App;
