
url = 'https://pokeapi.co/api/v2/pokemon/'


fetch(url + 160)
    .then(res => res.json())
    .then(res => console.log(res))

sol = document.querySelector('#sol')


sol.addEventListener("click", () => {
    console.log('entra sol');
        
    adudio = new Audio('https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/132.ogg')
    adudio.play()
});
