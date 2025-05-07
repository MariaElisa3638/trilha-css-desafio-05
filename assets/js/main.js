let offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
const loadMoreButton = document.getElementById('loadMoreButton');
const maxRecords = 11;
const pokemonList = document.getElementById('pokemons');

function loadPokemonsItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `  <li class="pokemon ${pokemon.type}">
        <span class="number">${pokemon.number}1</span>
        <span class="name">${pokemon.name}</span>
        <div class="details">
            <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
               <img src="${pokemon.photo}"
                alt="${pokemon.name}">
              
        </div>
    </li>`).join('')
        pokemonList.innerHTML += newHtml
    });
}loadPokemonsItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecordNextPage = offset + limit;
    if(qtdRecordNextPage >= maxRecords){
        const newLimit= qtdRecordNextPage - maxRecords;
        loadPokemonsItens(offset, newLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    }
    else{
        loadPokemonsItens(offset, limit);

    }


})


