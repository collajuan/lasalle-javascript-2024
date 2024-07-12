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



animals = ["🐶", "🐱", "🐭", "🐍", "🐘"]
colors = ["🔴", "🟠", "🟡", "🟢", "🔵", "🟣"]

console.log(animals, colors);

console.log(animals.concat("🐮", {nombre: "vaca"}));
console.log(animals.concat(colors)); // une los dos arrays
console.log([animals, colors]);      // crea un array de arrays

console.log(animals.join());
console.log(animals.join(" / "));

// pop() elimina el ultimo elemento y lo devuelve
elefant = animals.pop();

console.log(animals);
console.log(elefant);

console.log(animals.pop());
console.log(animals);

// push() añade un elemento y devuelve la nueva length del array
console.log(animals);
console.log(animals.push("🐍"));
console.log(animals);

// shift() y unshift() hacen lo mismo que pop() y push() pero en el principio del array
console.log("Shift de colors", colors.shift());
console.log(`${colors.length} Unshift de colors ${colors.unshift("🔴")}`)

// flat() une en un único array el array y sus subarrays
array = [1, 2, [3, 4, 5], [[6, 7], 8]]
console.log(array.flat())           // "aplana" un nivel
console.log(array.flat().flat());   // "aplana" dos niveles

console.log(array.flat(2));  // "aplana" hasta la profundidad que le digamos (puede ser Infinity)