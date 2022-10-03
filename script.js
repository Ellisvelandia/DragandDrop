const CARDS = 3;

for (let i = 0; i < CARDS; i++) {
  let id = getRandom(150);
  searchPokemonById(id);
}

function getRandom(max) {
  return Math.floor(Math.random() * max) + 1;
}

let draggableElements = document.querySelector(".draggable-elements");

let pokemonSearched = [];
async function searchPokemonById(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await res.json();
  pokemonSearched.push(data);

  draggableElements.innerHTML = "";
  pokemonSearched.forEach((pokemon) => {
    console.log(pokemon);
    draggableElements.innerHTML += `
    <div class="pokemon">
       <img class="image" src="${pokemon.sprites.other["dream_world"].front_default}"  alt="pokemon"/>
    </div>`;
  });
}
