
dni = document.querySelector('input')
button = document.querySelector('button')
card = document.querySelector('#card')


button.addEventListener('click', () => { if (dni.value.length == 8) digitoControl(dni.value) })

function digitoControl(dni) {
    let letras = 'TRWAGMYFPDXBNJZSQVHLCKE'
    let indexLetra = dni % 23;
    console.log(indexLetra);
    console.log(letras[indexLetra]);
}