import { useQueryClient } from 'react-query';

import { useSelector, useDispatch } from './hooks';

import Card from '@components/Card';
import Header from '@components/Header';
import Modal from '@components/Modal';
import Instructions from '@components/Instructions';

import { setModal, resetStore } from './store/slices/pokemon-slice';

function App() {
  const modal = useSelector((state) => state.app.modal);

  const score = useSelector((state) => state.app.score);

  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  return (
    <>
      <Header />

      <Card />

      <Instructions />

      <Modal
        header='Game Over'
        open={modal === 'game_over'}
        onClose={() => {
          dispatch(resetStore());
          queryClient.invalidateQueries();
        }}
      >
        This game is over. Your score is {score}. Good game!
      </Modal>

      <Modal
        header='Game Play'
        open={modal === 'game_play'}
        onClose={() => dispatch(setModal(''))}
      >
        This game tests your memory. Click on a pokemon to earn points. If you
        click on the same pokemon twice, the game is over. If you click on all
        pokemons exactly once, you level up. Good luck!
      </Modal>
    </>
  );
}

export default App;
