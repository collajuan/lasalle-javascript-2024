


for (const alumno of ['juan', 'pepep', 'jose']) {
    console.log(`Hola ${alumno}`);
}


profesor = {
    nom: 'juan',
    apellido: 'ma',
    edad: '30',
    localidad: 'bcna'
}
//Iterar las propiedades de un Objeto
for (const prop in profesor) {
    if (profesor.hasOwnProperty.call(profesor, prop)) {
        const element = profesor[prop];

    }
}


//*************************** EJERCIOCIOS ****************************/
//***************************  ****************************/

// TODO: escribe un bucle que muestre 10 veces un mensaje por la consola con el text en color rojo y azul alternativamente
for (let i = 0; i < 10; i++) {
    if (i % 2) {
        console.log('%cMensaje Rojo', 'color: red;');
    } else {
        console.log('%cMensaje Azul', 'color: blue;');
    }
}

// TODO: escribe un bucle que muestre los números del 0 al 20 y muestre a su lado "hola" si es multiple de 2, 
//"adeu" si es multiple de 3 i "què tal?" si es múltiple de 5

for (let i = 0; i <= 20; i++) {
    let mensaje = `${i}`
    if (i % 2) {
        mensaje += " hola"
    }
    if (i % 3) {
        mensaje += " adeu"
    }
    if (i % 5) {
        mensaje += " qué tal?"
    }
    console.log(mensaje);
}

// TODO: haz un contador que muestre en la consola los números del 1 al número que introduzcas como parámetro (fins a 1000 com a màxim)
// let increment = prompt("ingrese numero")
// for(increment ; increment < 1000; increment++){
//     console.log(increment);
// }

// TODO: haz un contador que sólo muestre los números que tengan un dígito contenido en la string definida por el usuario (con prompt) hasta 100
// let numero = prompt("Ingrese un numero:")
// let numero = "2589"
// contador = []
// for (let char of numero) { //por cada caracter del string del usuario...
//     for (let j = 0; j < 100; j++) { //por cada numero del 1 al 100...
//         for (let num of j.toString()) { //por cada digito del numero del 1 al 100...
//             if (num == char && !contador.includes(j)) { // Verifico si char está en el numero y lo agrego a contador si no esta ya incluido por otro caracter
//                 contador.push(j)
//             }
//         }
//     }
// }
// console.log(contador);




// TODO: lista de la compra. Haz que un prompt se repita hasta que el usuario introduzca una palabra clave; 
//hasta entonces, cada palabra introducida será un item de la lista de la compra, que se escribirá después de 
//que el usuario lo detenga con el formato:

//                       Llista de la compra:
//                       - Pa
//                       - Mantega
//                       - Aigua

//inicio variables
function listaCompra() {
    let listaCompra = {}
    let item = 0;
    let articulo = ''
    while (articulo != "Exit") {
        articulo = prompt("Indique Item. Exit para terminar")
        if (articulo == 'Exit') {
            break;
        }
        listaCompra[`${item}`] = articulo //agrego otro item al objeto
        item++;
    }
    console.log(listaCompra);
    console.log('Lista de Compra:');
    for (const key in listaCompra) {
        console.log("- " + listaCompra[key]);
    }

}

function randomNum (a,b) {
    console.log(Math.floor(Math.random() * (b+1 - a) + a));
 }

// randomNum(4,10)
// randomNum(4,10)
// randomNum(4,10)
// randomNum(4,10)
// randomNum(4,10)
// randomNum(4,10)
// randomNum(4,10)
// randomNum(4,10)
// randomNum(4,10)
// randomNum(4,10)

//******************** Fechas ********************




















