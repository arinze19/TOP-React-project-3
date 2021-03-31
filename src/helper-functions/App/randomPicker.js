/**
 * generate random values in new array from a passed in array
 * @param {Number} level the number of elements in new array * 2
 * @param {Array} pokemonCatalog array to be processed
 */

function randomPicker(level, pokemonCatalog) {
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
export default randomPicker;