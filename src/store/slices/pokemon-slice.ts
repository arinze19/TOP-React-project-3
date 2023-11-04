import { createSlice } from '@reduxjs/toolkit';

// types
import { Pokemon } from '../../types';

const initialState = {
  score: 0,
  level: 1,
  modal: '',
  pokemons: [] as Pokemon[],
};

const pokemonSlice = createSlice({
  name: 'pokemon-memo',
  initialState,
  reducers: {
    setScore(state, action) {
      state.score = action.payload;
    },
    setLevel(state, action) {
      state.level = action.payload;
    },
    setModal(state, action) {
      state.modal = action.payload;
    },
    setPokemons(state, action) {
      state.pokemons = action.payload;
    },
    resetStore(state) {
      state.level = 1;
      state.modal = '';
      state.pokemons = [];
      state.score = 0;
    },
  },
});

export const { setScore, setLevel, setModal, setPokemons, resetStore } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;
