import { useState, useMemo } from 'react';

import { useQuery, useQueryClient } from 'react-query';

import { getPokemons } from './utils';

import Card from '@components/Card';
import Header from '@components/Header';
import Loader from '@components/Loader';
import Modal from '@components/Modal';
import Instructions from '@components/Instructions';
import Timer from '@components/Timer';

import { DEFAULT_VALUE } from './constants';

// Types
import { type StoreState, type Pokemon } from './types';

function App() {
  const queryClient = useQueryClient();

  const [state, setState] = useState<StoreState>(DEFAULT_VALUE);

  // Actions
  const Actions = useMemo(() => {
    return {
      onChange: (data: Partial<StoreState>) => {
        setState((prev) => Object.assign({}, prev, data));
      },
      resetGame: () => {
        setState(DEFAULT_VALUE);

        queryClient.invalidateQueries();
      },
    };
  }, [setState]);

  // Query
  // fetch pokemons from API
  const { isLoading, isFetching } = useQuery<Pokemon[]>(
    `https://pokeapi.co/api/v2/pokemon?limit=${state.level + 10}`,
    () => getPokemons(state.level),
    {
      staleTime: Infinity,
      onSuccess: (data) => {
        // set pokemons in state
        Actions.onChange({ pokemons: data });
      },
    }
  );

  return (
    <>
      <Header score={state.score} />

      {isLoading || isFetching ? (
        <Loader />
      ) : (
        <Card
          level={state.level}
          score={state.score}
          pokemons={state.pokemons}
          onChange={Actions.onChange}
        />
      )}

      <Instructions onChange={Actions.onChange} />

      <Timer
        level={state.level}
        modal={state.modal}
        loading={isLoading || isFetching}
        onChange={Actions.onChange}
      />

      <Modal
        header='Game Over'
        open={state.modal === 'game_over'}
        onClose={() => Actions.resetGame()}
      >
        This game is over. Your score is {state.score}. Good game!
      </Modal>

      <Modal
        header='Game Play'
        open={state.modal === 'game_play'}
        onClose={() => Actions.onChange({ modal: '' })}
      >
        This game tests your memory. Click on a pokemon to earn points. If you
        click on the same pokemon twice, the game is over. If you click on all
        pokemons exactly once, you level up. Good luck!
      </Modal>
    </>
  );
}

export default App;
