function fetchPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
}

// Chamando a função
fetchPokemon("pikachu");
fetchPokemon("charizard");
fetchPokemon("squirtle");
fetchPokemon("bulbasaur");