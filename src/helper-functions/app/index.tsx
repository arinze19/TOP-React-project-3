import axios from 'axios';
import { pokemon } from '../../types';

export function randomPicker(
  level: number,
  pokemonCatalog: pokemon[]
): pokemon[] {
  let counter: number = 0;
  const boundary: number = level * 2;
  const newArray: pokemon[] = [];
  const idCache: number[] = [];

  do {
    const randomInt = Math.floor(Math.random() * pokemonCatalog.length + 1);

    if (idCache.indexOf(randomInt) === -1) {
      const randomItem = pokemonCatalog[randomInt];
      newArray.push(randomItem);
      counter++;
    }
  } while (counter < boundary);

  return newArray;
}

export function randomArranger(pokemons: pokemon[]): pokemon[] {
  const newArray = [];
  const shuffledPokemons: pokemon[] = [];
  const boundary: number = pokemons.length;

  while (newArray.length < boundary) {
    const r = Math.floor(Math.random() * boundary);
    if (newArray.indexOf(r) === -1) newArray.push(r);
  }
  newArray.forEach((val) => shuffledPokemons.push(pokemons[val]));
  return shuffledPokemons;
}

export const getPokemons = async (
  level: number
): Promise<[pokemon[], unknown]> => {
  try {
    const offset = Math.floor(Math.random() * 100); // pokeapi has 1154 pokemons, so enabling pagination offset of up to 1000?
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${level + 10}&offset=${
        offset * 10
      }`
    );

    const pokemons: pokemon[] = data.results.map(
      (item: pokemon, idx: number) => {
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
