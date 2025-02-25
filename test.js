// function fetchPokemon(pokemon) {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err));
// }
//FORMA MAIS USUAL:
async function fetchPokemon(pokemon){
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

// Chamando a função
fetchPokemon("pikachu");
fetchPokemon("charizard");
fetchPokemon("squirtle");
fetchPokemon("bulbasaur");