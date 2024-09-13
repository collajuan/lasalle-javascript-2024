console.log("Aquest és el JS de funciones");


function saludar() {
    console.log("Hola, clase!");
}

saludar()

function prueba(params) {
    return `esto es el ${params}!`
}
// funcion q recibe un DNI y lo devuelve ofuscado
function dniOfuscado(dni) {
    dni = dni.slice(4)
    dni = dni.padStart(9, "X")
    dni = dni.slice(0, -2)
    dni = dni.padEnd(9, "X")
    return  dni
}
console.log("DNI sobreescrito: ", dniOfuscado("31039678M"));

// funcion que ofusca el dni guardado en una variable
dni = "31039678M"
function ofuscarDni() {
    dni = dniOfuscado(dni)
}
ofuscarDni()
console.log(dni);

// array de dos elemento devuelve el array invertido
function arrayInvertido(array) {
    return array.toReversed()
}

console.log(arrayInvertido([1,2])); 