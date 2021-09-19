import { pokemon } from '../../types';

export function randomPicker(level: number, pokemonCatalog: pokemon[]): pokemon[] {
  let counter: number    = 0;
  const boundary: number = level * 2;
  const newArray: pokemon[] = [];

  for (counter; counter < boundary; counter++) {
    const randomInt  = Math.floor(Math.random() * pokemonCatalog.length);
    const randomItem = pokemonCatalog[randomInt];

    newArray.push(randomItem);
  }

  return newArray;
}


export function randomArranger(pokemons: pokemon[]): pokemon[] {
  const newArray       = [];
  const shuffledPokemons: pokemon[] = []
  const boundary: number         = pokemons.length;

  while (newArray.length < boundary) {
    const r = Math.floor(Math.random() * boundary);
    if (newArray.indexOf(r) === -1) newArray.push(r);
  }
  newArray.forEach(val => shuffledPokemons.push(pokemons[val]))
  return shuffledPokemons
}