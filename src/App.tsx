import React from 'react';
import { TheHeader, TheLoader, TheMenu } from '@components/layout';
import { CardList } from '@components/cards';
import { randomArranger, getPokemons } from '@helpers/app';
import { pokemon, score } from './types';

//  ============ initial state values
const initialScore: score = {
  currentScore: 0,
  highScore: +JSON.parse(localStorage.getItem('highScore')!) || 0,
};

function App() {
  const [score, setScore] = React.useState<score>(initialScore);
  const [level, setLevel] = React.useState({ current: 1 });
  const [pokemons, setPokemons] = React.useState<pokemon[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const handleClick = (id: number) => {
    const clickedPokemonIdx = pokemons.findIndex(
      (pokemon: pokemon) => pokemon.id === id
    );
    // end game if selected pokemon has been clicked
    if (pokemons[clickedPokemonIdx].isClicked) {
      alert('Game Over Champ. Good game');
      setScore((prevScore) => {
        return {
          ...prevScore,
          currentScore: 0,
        };
      });
      return setLevel({ ...level, current: 1 });
    }
    setScore((prevScore) => {
      if (prevScore.currentScore >= prevScore.highScore) {
        // set new high score in local storage
        const highScore = prevScore.currentScore + 1;
        JSON.stringify(localStorage.setItem('highScore', highScore.toString()));
        return {
          currentScore: prevScore.currentScore + 1,
          highScore: prevScore.currentScore + 1,
        };
      } else {
        return {
          ...prevScore,
          currentScore: prevScore.currentScore + 1,
        };
      }
    });
    pokemons[clickedPokemonIdx].isClicked = true;
    const allPokesClicked = pokemons.every(
      (pokemon) => pokemon.isClicked === true
    );
    if (allPokesClicked) {
      // upgrade level if all pokemons have been clicked
      setLevel((prevLevel) => ({
        ...prevLevel,
        current: prevLevel.current + 1,
      }));
    } else {
      // shuffle pokemons and set pokemon state
      setPokemons(randomArranger(pokemons));
    }
  };

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      setIsError(false);
      const [pokemons, error] = await getPokemons(level.current);

      if (error) {
        setIsError(true);
      } else {
        setPokemons(pokemons);
      }

      setIsLoading(false);
    })();
  }, [level]);

  return (
    <React.Fragment>
      <TheHeader score={score} />
      <h2 style={{ textAlign: 'center' }}>Level {level.current}</h2>
      {isLoading ? (
        <TheLoader />
      ) : isError ? (
        <h1>Oops, something went wrong</h1>
      ) : (
        <CardList pokemons={pokemons} handleClick={handleClick} />
      )}
      <TheMenu />
    </React.Fragment>
  );
}

export default App;
