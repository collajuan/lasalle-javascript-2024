console.log("Aquest és el JS d'arrays i objectes");



// ----------------------------------------------------------------

alumne = {
    nom: "Gonzalo",
    cognom: "Pino",
    edat: 41,
    hobbie: "🎮",
}

console.log(alumne);

alumne.edat = 46;   // escriptura d'una propietat d'un objecte
edatGonzalo = alumne.edat;  // lectura d'una propietat d'un objecte

console.log(`El ${alumne.nom} ${alumne.cognom} té ${alumne.edat} anys i li agrada ${alumne.hobbie}`);

profe = {};

console.log(profe);

profe.nom = "Omar"
profe.edat = 33

console.log(profe);

alumnes = [
    alumne,
    alumne2 = {
        nom: "Pablo",
        cognom: "Perez",
        edat: 19,
        hobbie: "🧶"
    },
    {
        nom: "Maria",
        cognom: "Martínez",
        edat: 49,
        hobbie: "🚲"
    }
]

console.log(alumnes);
console.log(alumne2);
console.log(alumnes[2]);

// ----------------------------------------------------------------

// TODO: cread un array con 5 objetos dentro que tengan las mismas 4 propiedades
animales = [
    {
        nombre: 'pepe',
        especie: 'perro',
        edad: 10,
        color: 'blanco'
    },
    {
        nombre: 'gati',
        especie: 'gato',
        edad: 8,
        color: 'negro'
    },
    {
        nombre: 'horse',
        especie: 'caballo',
        edad: 7,
        color: 'marron'
    },
    {
        nombre: 'pupi',
        especie: 'conejo',
        edad: 5,
        color: 'blanco'
    },
    {
        nombre: 'toro',
        especie: 'toro',
        edad: 3,
        color: 'marron'
    }
]
// TODO: cread un array que contenga una lista de una de las propiedades de los objetos
console.log('cread un array que contenga una lista de una de las propiedades de los objetos');
listaPropiedad = animales.map(animal => {
    // console.log(animal)
    return animal.especie    
});
// TODO: cread una variable que contenga la suma de una propiedad (que sea numérica)
sumaProp = animales.reduce((accumulator, currentValue) => {
    // console.log(accumulator)
    // console.log(currentValue.edad);
    return accumulator + currentValue.edad
  });
// TODO: mostrar por consola todo lo anterior
// console.log(listaPropiedad);
console.log(sumaProp);
// TODO: mostrar por consola una frase que resuma las propiedades de cada objeto
// TODO: buscad una manera de mostrar por consola todos los objetos en forma de tabla
console.table(animales)