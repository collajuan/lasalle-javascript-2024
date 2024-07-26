// muestra las tablas de multiplicar del 1 al 9 por la consola

function tablaMultiplicar() {
    let tabla = []
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            tabla.push((i) * (j))
        }
    }
    console.log(tabla);
}
//tablaMultiplicar()


// recrea la función parseFloat() de forma que coja los números aunque haya letras antes y acepte como separador decimal los símbolos ",", "." y "'". Pe.

function newParseFloat(string) {
    let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ñ', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let parse = ''
    for (i = 0; i < string.length; i++) {
        if (!abc.includes(string[i])) {
            parse += string[i]
        }
        //agregar que solo agrega numeros hasta la primera letra
    }
    console.log(parse);
}

//newParseFloat('7dsfsdfsdf4.2ldsf')

// crea una función que coja un string y que devuelva una letra aleatoria (sin contar espacios y signos de puntuación)

function letraAleatoria(string) {
    let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ñ', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let parse = ''
    for (i = 0; i < string.length; i++) {
        if (abc.includes(string[i].toLowerCase())) {
            parse += string[i]
        }
    }
    return parse[Math.floor(Math.random() * parse.length)].toLowerCase()
}

//console.log(letraAleatoria('TTTTTTTjuan  sdlksdfsdf'));

// TODO: crea una función que coja un texto y le separe sus palabras (sin signos de puntuación) y las devuelva en un nuevo string separadas por espacios (sin usar arrays)



// TODO: crea una función que coja un string y que devuelva una palabra aleatoria contenida en ella (sin usar arrays)

function randomWord(string) {
    //string = separateWords(string)
    let spaces = 0
    
    for (const char of string) {
        if (char == " ") spaces++
    }

    let wordNum = parseInt((spaces + 1) * Math.random())
    
    if (wordNum == 0) return string.slice(0, string.indexOf(" "))

    for (let i = 0; i < wordNum; i++) {
        string = string.slice(string.indexOf(" ") + 1)
    }

    if (string.indexOf(" ") == -1) return string

    return string.slice(0, string.indexOf(" "))
}

// console.log(randomWord("hola, Omar. Cómo estas?"));
// console.log(randomWord("l'Omar és el nostre profe"));
// console.log(randomWord(`El Carlos dijo: "¡Omar! ¡Cuidado!"`));
// console.log(randomWord(`   El Carlos    dijo: "¡Omar!    ¡Cuidado!"    `));


// TODO: paradoja del cumpleaños. Genera N fechas de cumpleaños aleatorias (1-365) en un array y comprueba si hay alguna repetida. Haz esto por N = 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 y muestra en la consola por cuáles ha habido coincidencias de cumpleaños

function checkCumple(num) {
    let fechas = []
    //genero array con tantas fecha aleatoreas como num
    for (let i = 0; i < num; i++) {
        fechas.push(Math.floor(Math.random() * 365 + 1));
    }
    console.log(fechas);
    //reviso los duplicados de cada elemento
    fechas.forEach((element, index) => {
        for (j = 0; j < fechas.length; j++) {
            //console log si hay elemento repetido y no es el mismo
            if (j != index & element == fechas[j]) {
                console.log(`Hay duplicado ${element}: index ${index} con ${j}`);
            }
        }
    })
}

//checkCumple(30)

// TODO: dos funciones que gestionen los datos recibidos en un array de strings o en una string con todas juntas
// data0 = "NOMBRE Omar"
// data1 = "COG Olmedo" -> [fecha0, fecha1, fecha2, ...]
// data2 = "AGE 33"

// La función debe devolver un objeto así:

// {
// nombre: "Omar",
// apellido: "Olmedo",
// edad: 33
// }

//{"NOMBRE Omar", "COG Olmedo", "AGE 33"}
function dataFromArray(array) {
    let result = {}
    array.forEach(data => {
        const [Key, valor] = data.split(" ")
        result[Key.toLowerCase()] = valor
    })
    return result
}
//console.log(dataFromArray(["NOMBRE Omar", "COG Olmedo", "AGE 33"]));

// data = "NOMBRE Omar COG Olmedo AGE 33"
function dataFromString(str) {
    const dataArray = str.split(" ")
    const result = {}
    console.log(dataArray);
    for (i = 0; i < dataArray.length; i++) {
        const [Key, valor] = [dataArray[i], dataArray[i + 1]]
        result[Key.toLowerCase()] = valor
        i++
    }
    return result
}

//console.log(dataFromString("NOMBRE Omar COG Olmedo AGE 33")); 

// TODO: gestionar un CSV. El programa debe tomar un string en formato CSV y meter toda la información dentro de un array de objetos con los nombres de las columnas como propiedades
// PISTA: necesitará ayuda. Pídala
// PISTA 2: aunque no haya \n para marcar los saltos de línea, los detexta igual porque uso comillas ``
var csvCotxes = `Year,Make,Model,Description,Price
1997,Ford,E350,ac abs moon,3000.00
1999,Chevy,Venture "Extended Edition",,4900.00
1999,Chevy,Venture "Extended Edition XL",,5000.00
1996,Jeep,Grand Cherokee,MUST SELL! air moon-roof loaded,4799.00`

const csvStudents = `ID,First Name,Last Name,Age,Grade,Email,Phone,Address
1,John,Doe,18,12,john.doe@example.com,555-1234,123 Main St
2,Jane,Smith,17,11,jane.smith@example.com,555-5678,456 Oak Ave
3,Bob,Johnson,16,10,bob.johnson@example.com,555-9012,789 Elm Rd
4,Sarah,Williams,19,12,sarah.williams@example.com,555-3456,321 Pine Ln
5,Michael,Brown,18,11,michael.brown@example.com,555-7890,654 Maple Dr
6,Emily,Davis,17,10,emily.davis@example.com,555-2468,987 Cedar Rd
7,David,Miller,16,9,david.miller@example.com,555-8642,159 Spruce St
8,Jessica,Wilson,18,12,jessica.wilson@example.com,555-4321,753 Oak Blvd
9,Daniel,Moore,17,11,daniel.moore@example.com,555-6789,246 Elm Ave
10,Ashley,Taylor,16,10,ashley.taylor@example.com,555-0123,468 Maple Ln`;

// var cotxes = [ { Year = 1997,
//                  Make = "Ford",
//                  Model = "E350",
//                  Description = "ac, abs, moon",
//                  Price = 3000.00
//                 },
//                { Year = 1997,
//                  Make = "Ford",
//                  Model = "E350",
//                  Description = "",
//                  Price = 3000.00
//                 } ];

function csvToArray(csv) {
    const array = csv.split(/\r?\n/) //cada fila del csv un elemento del array
    const arrayTitulos = array.shift().split(",") //quito la primera linea del csv y la paso a un array con cada titulo como elemento
    arrayResult = []    //array que tendra los objetos
    array.forEach((valor, index) => {
        //console.log(valor)
        //console.log(index);
        arrayResult[index] = {}  //elemento 'index' del array será un objeto
        for (i = 0; i < arrayTitulos.length; i++) {
            // console.log(arrayTitulos[i], valor.split(",")[i])
            arrayResult[index][arrayTitulos[i].toLowerCase()] = valor.split(",")[i]
        }
    })
    console.log(arrayResult);
    // console.log(arrayResult[0].address);
}

//csvToArray(csvStudents)
//csvToArray(csvCotxes)

2