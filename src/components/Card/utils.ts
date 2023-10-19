import { Pokemon } from '../../types';

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
