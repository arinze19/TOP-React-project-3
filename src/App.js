// import { useState, useEffect } from "react";
import Header       from "./components/layout/Header";
// import CardList     from "./components/cards/CardList";
// import randomPicker from "./helper-functions/app/randompicker"

//  ============ initial state values
// const genRandomPokemonList = (level) => {
//   const randomInt = Math.random() * level
// }
// const initialScore = {
//   currentScore: 0,
//   highScore: 0,
// };
// const initialLevel = 1;
// let pokemonCatalog = [];

function App() {
  const score = 0;
  // const [score, setScore]       = useState(initialScore);
  // const [level, setLevel]       = useState(initialLevel);
  // const [pokemons, setPokemons] = useState([]);

  // useEffect(() => {
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
  //     .then((result) => result.json())
  //     .then((data)   => data.results)
  //     .then(results  => {
  //       results.forEach((item, idx) => {
  //         const idxPad     = (idx + 1).toString().padStart(3, "0")
  //         const newPokemon = {
  //           name: item.name,
  //           imgUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idxPad}.png`
  //         }
  //         pokemonCatalog.push(newPokemon)
  //       })
  //       return pokemonCatalog
  //     })
  //     // .then(catalog => randomPicker(level, catalog))
  //     // .then(randomPokemons => setPokemons(randomPokemons))
  //     .catch(err => console.log(err))
  // }, []);

  

  return (
    <div className="App">
      <Header score={score} />
      {/* <CardList pokemons={pokemons} /> */}
    </div>
  );
}

export default App;
