const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


function convertPokemonToLi(pokemon) {
    return `  <li class="pokemon">
                <span class="number">${pokemon.number}1</span>
                <span class="name">${pokemon.name}</span>
                <div class="details">
                    <ol class="types">
                 ${pokemon.types.map((type)=>'<li class="type">${type}</li>').join('')}
                    </ol>
                       <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                      
                </div>
            </li>`
}

const pokemonList = document.getElementById('pokemons');
pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');
})

