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
const initialLevel = 1;

function App() {
  const [score, setScore] = React.useState<score>(initialScore);
  const [level, setLevel] = React.useState(initialLevel);
  const [pokemons, setPokemons] = React.useState<pokemon[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState('');

  const handleClick = (id: number) => {
    const newPokemons: pokemon[] = [...pokemons];
    const clickedPokemonIdx = pokemons.findIndex(
      (pokemon: pokemon) => pokemon.id === id
    );
    // end game if selected pokemon has been clicked
    if (newPokemons[clickedPokemonIdx].isClicked) {
      alert('Game Over Champ. Good game');
      setScore((prevScore) => {
        return {
          ...prevScore,
          currentScore: 0,
        };
      });
      return setLevel(1);
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
    newPokemons[clickedPokemonIdx].isClicked = true;
    const allPokesClicked = newPokemons.every(
      (pokemon) => pokemon.isClicked === true
    );
    if (allPokesClicked) {
      // upgrade level if all pokemons have been clicked
      setLevel((prevLevel) => prevLevel + 1);
    } else {
      // shuffle pokemons and set pokemon state
      setPokemons(randomArranger(newPokemons));
    }
  };

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      const [pokemons, error] = await getPokemons(level);

      if (error) {
        setIsError('Oops, something went wrong');
      } else {
        setPokemons(pokemons);
      }

      setIsLoading(false);
    })();
  }, [level]);

  return (
    <div>
      <TheHeader score={score} />
      {isLoading ? (
        <TheLoader />
      ) : isError ? (
        <h1>Oops, something went wrong</h1>
      ) : (
        <CardList pokemons={pokemons} handleClick={handleClick} level={level} />
      )}
      <TheMenu />
    </div>
  );
}

export default App;
