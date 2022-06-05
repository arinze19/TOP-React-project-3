import { useState, useEffect }        from "react";
import {randomPicker, randomArranger} from "./helper-functions/app/index";
import TheHeader      from "./components/layout/TheHeader";
import CardList       from "./components/cards/CardList";
import TheMenu        from "./components/layout/TheMenu";

import { pokemon, score } from './types';

//  ============ initial state values
const initialScore: score = {
  currentScore: 0,
  highScore: +JSON.parse(localStorage.getItem("highScore")!) || 0,
};
const initialLevel: number = 1;
let pokemonCatalog: pokemon[] = [];

function App() {
  const [score, setScore]       = useState<score>(initialScore);
  const [level, setLevel]       = useState<number>(initialLevel);
  const [pokemons, setPokemons] = useState<pokemon[]>([]);

  // ======================== handler functions
  const handleClick = (id: number) => {
    const newPokemons: pokemon[]       = [...pokemons]
    const clickedPokemonIdx = pokemons.findIndex((pokemon: pokemon) => pokemon.id === id)

    // end game if selected pokemon has been clicked
    if(newPokemons[clickedPokemonIdx].isClicked) {
      alert('Game Over Champ. Good game')
      setScore(prevScore => {
        return {
         ...prevScore,
         currentScore: 0
        }
      })
      return setLevel(1)
    }

    setScore(prevScore => {
      if(prevScore.currentScore >= prevScore.highScore) {
        // set new high score in local storage
        const highScore = prevScore.currentScore + 1;
        JSON.stringify(localStorage.setItem("highScore", highScore.toString()))
        return {
          currentScore: prevScore.currentScore + 1,
          highScore: prevScore.currentScore + 1          
        }
      } 
      
      else {
        return {
          ...prevScore,
          currentScore: prevScore.currentScore + 1,
        }
      }
    })
    newPokemons[clickedPokemonIdx].isClicked = true

    const allPokesClicked = newPokemons.every(pokemon => pokemon.isClicked === true)
    if(allPokesClicked) {
      // upgrade level if all pokemons have been clicked
      setLevel(prevLevel => prevLevel + 1)
    } else {
      // shuffle pokemons and set pokemon state
      setPokemons(randomArranger(newPokemons))
    }
  };

  useEffect(() => {
      (async () => {
        await fetch("https://pokeapi.co/api/v2/pokemon?limit=500")  
        .then((result) => result.json())
        .then((data) => data.results)
        .then((results) => {
          results.forEach((item: pokemon, idx: number) => {
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
        .catch((err) => alert(err));
      })()
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
