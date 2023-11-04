import axios from 'axios';
import { Pokemon, PokemonAPIResponse } from '../types';

export function selector(catalog: Pokemon[], level: number) {
  // create a set to keep track of selected indexes
  const cache = new Set();

  // create return pokemon array
  const arr = [];

  for (let i = 0; i < level * 2; i++) {
    // generate a random integer
    let id = Math.floor(Math.random() * catalog.length);

    // if the random integer is already in the set, generate another random integer
    while (cache.has(id)) {
      id = Math.floor(Math.random() * catalog.length);
    }

    // add the pokemon to the return array and the set
    arr.push(catalog[id]);
    cache.add(id);
  }

  return arr;
}

export function randomizer(pokemons: Pokemon[]): Pokemon[] {
  const clone = [...pokemons];

  for (let i = clone.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }

  return clone;
}

export async function fetchPokemonsFromAPI(url: string) {
  try {
    const { data } = await axios.get<PokemonAPIResponse>(url);

    return formatPokemons(data.results);
  } catch (err) {
    throw new Error('Something went wrong');
  }
}

export function formatPokemons(pokemons?: Pokemon[]) {
  if (!pokemons) return [];

  const clone = [...pokemons];

  return clone.map((pokemon, id) => {
    const idx = pokemon.url.slice(34, -1).toString().padStart(3, '0');

    pokemon.id = id;
    pokemon.url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idx}.png`;
    pokemon.isClicked = false;
    return pokemon;
  });
}

export const getPokemons = async (level: number) => {
  const offset = Math.floor(Math.random() * 80); // pokeapi has 1154 pokemons, so enabling pagination offset of up to 1000?
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${level + 10}&offset=${
      offset * 10
    }`
  );

  const pokemons: Pokemon[] = data.results.map((item: Pokemon, idx: number) => {
    const idxPad = item.url.slice(34, -1).toString().padStart(3, '0'); // this is to account for the lack accurate index of each pokemon when fetching as a list. hence some manipulation to get the appropiate image
    item.id = idx;
    item.url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idxPad}.png`;
    item.isClicked = false;

    return item;
  });

  return selector(pokemons, level);
};
