import { useSelector, useDispatch } from '.';

import {
  setLevel,
  setModal,
  setPokemons,
  setScore,
} from '../store/slices/pokemon-slice';
import { randomizer } from '../utils';

const usePokemons = () => {
  const dispatch = useDispatch();

  let score = useSelector((state) => state.app.score);
  const pokemons = useSelector((state) => state.app.pokemons);
  const level = useSelector((state) => state.app.level);

  const handlePokemonClick = (id: number) => {
    const state = {
      pokemons: [...pokemons],
      score: score,
    };

    // find index of clicked pokemon
    const idx = pokemons.findIndex((pokemon) => pokemon.id === id);

    if (state.pokemons[idx].isClicked) {
      // dispatch game over modal
      return dispatch(setModal('game_over'));
    }

    state.pokemons[idx] = { ...pokemons[idx], isClicked: true };

    // get high score from local storage
    const high_score = localStorage.getItem('high_score')
      ? JSON.parse(localStorage.getItem('high_score')!)
      : 0;

    state.score += 1;

    // if current score is higher than high score, increment high score
    if (state.score > high_score) {
      localStorage.setItem('high_score', JSON.stringify(state.score));
    }

    dispatch(setScore(state.score));

    // check if all pokemons have been clicked
    if (state.pokemons.every((pokemon) => pokemon.isClicked === true)) {
      // upgrade level if all pokemons have been clicked
      // dispatch level up actions
      dispatch(setLevel(level + 1));
    } else {
      // shuffle pokemons and set pokemon state
      const random = randomizer(state.pokemons);

      // dispatch setPokemons actions
      dispatch(setPokemons(random));

      // dispatch score update
    }
  };

  return {
    handlePokemonClick,
  };
};

export default usePokemons;
