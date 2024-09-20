
promise = new Promise((resolve, reject) => {

})

// Then...Catch...
promise()
    .then(res => { })
    .catch(err => { })


// ASYNC...await..
async function gestionarPromise() {
    let res
    console.log('esperando promesa');
    try { //la peticion debe ser gestionada con captura de errores
        res = await promise
    } catch (err) { 
        console.log(err);        
    }
}