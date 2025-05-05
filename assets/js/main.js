const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(url).then(function(response){
console.log(response);
}).catch(function(){
console.error(error)
}).finally(function(){
console.log('Requisição finalizada')
})

const x=20;
console.log(x);