import axios from 'axios';
import { Pokemon, PokemonAPIResponse } from '../types';

export function randomPicker(
  level: number,
  pokemonCatalog: Pokemon[]
): Pokemon[] {
  let counter = 0;
  const boundary = level * 2;
  const newArray: Pokemon[] = [];
  const idCache: number[] = [];

  do {
    const randomInt = Math.floor(Math.random() * pokemonCatalog.length);

    if (idCache.indexOf(randomInt) === -1) {
      const randomItem = pokemonCatalog[randomInt];
      idCache.push(randomInt);
      newArray.push(randomItem);
      counter++;
    }
  } while (counter < boundary);

  return newArray;
}

export function randomArranger(pokemons: Pokemon[]): Pokemon[] {
  const newArray = [];
  const shuffledPokemons: Pokemon[] = [];
  const boundary = pokemons.length;

  while (newArray.length < boundary) {
    const r = Math.floor(Math.random() * boundary);
    if (newArray.indexOf(r) === -1) newArray.push(r);
  }
  newArray.forEach((val) => shuffledPokemons.push(pokemons[val]));
  return shuffledPokemons;
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

export const getPokemons = async (
  level: number
): Promise<[Pokemon[], unknown]> => {
  try {
    const offset = Math.floor(Math.random() * 80); // pokeapi has 1154 pokemons, so enabling pagination offset of up to 1000?
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${level + 10}&offset=${
        offset * 10
      }`
    );

    const pokemons: Pokemon[] = data.results.map(
      (item: Pokemon, idx: number) => {
        const idxPad = item.url.slice(34, -1).toString().padStart(3, '0'); // this is to account for the lack accurate index of each pokemon when fetching as a list. hence some manipulation to get the appropiate image
        item.id = idx;
        item.url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idxPad}.png`;
        item.isClicked = false;

        return item;
      }
    );

    return [randomPicker(level, pokemons), null];
  } catch (error) {
    return [[], String(error)];
  }
};
