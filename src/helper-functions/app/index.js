/**
 * generate random values in new array from a passed in array
 * @param {Number} level the number of elements in new array * 2
 * @param {Array} pokemonCatalog array to be processed
 * @returns {Array} newAray array filled with randomly selected items
 */

export function randomPicker(level, pokemonCatalog) {
  let counter    = 0;
  const boundary = level * 2;
  const newArray = [];

  for (counter; counter < boundary; counter++) {
    const randomInt  = Math.floor(Math.random() * pokemonCatalog.length);
    const randomItem = pokemonCatalog[randomInt];

    newArray.push(randomItem);
  }

  return newArray;
}

/**
 * randomly arrange items in an array
 * @param {Array} pokemons array to be processed
 * @returns {Array} newArray same array with its items randomly arranged
 */

export function randomArranger(pokemons) {
  const newArray         = [];
  const shuffledPokemons = []
  const boundary         = pokemons.length;

  while (newArray.length < boundary) {
    const r = Math.floor(Math.random() * boundary);
    if (newArray.indexOf(r) === -1) newArray.push(r);
  }
  newArray.forEach(val => shuffledPokemons.push(pokemons[val]))
  return shuffledPokemons
}

/**
 * 
 * 
 */

// export function countdownTimer(initialCounter) {
//   const countdown  = new Date().getTime()
//   const difference = Math.round((countdown - initialCounter) / 1000)

//   console.log(15 - difference)
// }

