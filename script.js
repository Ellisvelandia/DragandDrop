const CARDS = 3;

for (let i = 0; i < CARDS; i++) {
  let id = getRandom(150);
  searchPokemonById(150);
}

function getRandom(max) {
  return Math.floor(Math.random() * max) + 1;
}

let draggableElements = document.querySelector(".draggable-elements");
console.log(draggableElements);

let pokemonSearched = [];
async function searchPokemonById(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/ability/${id}`);
  const data = await res.json();
  pokemonSearched.push(data);

  pokemonSearched.forEach((pokemon) => {
    console.log(pokemon);
  });
}
