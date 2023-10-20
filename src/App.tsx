import { useState, useEffect } from 'react';
import Card from '@components/Card';
import Header from '@components/Header';
import Loader from '@components/Loader';
import { randomizer, getPokemons } from './utils';
import { Pokemon } from './types';

function App() {
  const [state, setState] = useState({ score: 0, level: 1 });
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (id: number) => {
    // find index of clicked pokemon
    const idx = pokemons.findIndex((pokemon: Pokemon) => pokemon.id === id);

    // end game if selected pokemon has been clicked
    if (pokemons[idx].isClicked) {
      alert('Game Over Champ. Good game');
      return setState({ score: 0, level: 1 });
    }

    pokemons[idx].isClicked = true;
    state.score = state.score + 1;

    // get high score from local storage
    const highScore = localStorage.getItem('high_score')
      ? JSON.parse(localStorage.getItem('high_score')!)
      : 0;

    // if current score is higher than high score, increment high score
    if (state.score >= highScore) {
      localStorage.setItem('high_score', JSON.stringify(state.score));
    } else {
      // else increment current score
      setState({
        ...state,
        score: state.score + 1,
      });
    }

    // check if all pokemons have been clicked
    if (pokemons.every((pokemon) => pokemon.isClicked === true)) {
      // upgrade level if all pokemons have been clicked
      setState({
        ...state,
        level: state.level + 1,
      });
    } else {
      // shuffle pokemons and set pokemon state
      setPokemons(randomizer(pokemons));
    }
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const pokemons = await getPokemons(state.level);
        setPokemons(pokemons);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [state.level]);

  return (
    <>
      <Header score={state.score} />
      {isLoading ? (
        <Loader />
      ) : (
        <Card
          pokemons={pokemons}
          level={state.level}
          handleClick={handleClick}
        />
      )}
    </>
  );
}

export default App;
