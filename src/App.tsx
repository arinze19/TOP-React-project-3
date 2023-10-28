import { useState, useEffect } from 'react';
import Card from '@components/Card';
import Header from '@components/Header';
import Loader from '@components/Loader';
import Modal from '@components/Modal';
import { randomizer, getPokemons } from './utils';
import { Pokemon } from './types';

function App() {
  const [state, setState] = useState({ score: 0, level: 1 });
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(''); // TODO: make a hook?

  const handleClick = (id: number) => {
    // find index of clicked pokemon
    const idx = pokemons.findIndex((pokemon: Pokemon) => pokemon.id === id);

    // end game if selected pokemon has been clicked
    if (pokemons[idx].isClicked) {
      setModal('game_over');
      return;
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
        console.log(err); // TODO: replace with react-toast
      } finally {
        setIsLoading(false);
      }
    })();
  }, [state.level]);

  // show game play modal for 1.2 seconds
  useEffect(() => {
    setTimeout(() => {
      setModal('game_play');
    }, 1200);
  }, []);

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

      <Modal
        header='Game Over'
        open={modal === 'game_over'}
        onClose={() => {
          setModal('');
          setState({ score: 0, level: 1 });
        }}
      >
        This game is over. Your score is {state.score}. Good game!
      </Modal>

      <Modal
        header='Game Play'
        open={modal === 'game_play'}
        onClose={() => setModal('')}
      >
        This game tests your memory. Click on a pokemon to earn points. If you
        click on the same pokemon twice, the game is over. If you click on all
        pokemons exactly once, you level up. Good luck!
      </Modal>
    </>
  );
}

export default App;
