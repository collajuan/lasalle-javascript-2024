
url = 'https://pruebasalle-a1814-default-rtdb.europe-west1.firebasedatabase.app/'
project = 'Juan-Collazo/'
database = 'prueba.json'
id = 'prueba/-O7o5aZEsz5vbeNFxUF-.json'


fetch(url + project + id)
.then(
    (response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error("Request failed!");
    })
.then(res => console.log(res))


function postAlumno() {
    fetch(url + project + id,
        {
            method: 'PATCH',
            body: JSON.stringify({deporte: 'tenis'})
        }
    )
    .then(res => res.json())
    .then(res => console.log(res))    
}

// fetch(url, {
//     method: "POST",
//     body: data,
//     headers: {
//         "Content-type": "application/json",
//         apikey: apiKey,
//     }
// })
// .then(
//     (response) => {
//         if (response.ok) {
//             return response.json();
//         }
//         throw new Error("Request failed!");
//     },
//     (networkError) => console.log(networkError.message)
// )
// .then(res => console.log(res))





// sol.addEventListener("click", () => {
//     numero = Math.floor(Math.random()*150)
//     linkAudio = 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/' + numero + '.ogg'
//     console.log('entra sol');

//     adudio = new Audio(linkAudio)
//     adudio.play()
// });

