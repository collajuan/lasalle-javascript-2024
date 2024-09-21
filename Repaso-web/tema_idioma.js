let cat = document.querySelector('#cat')
let es = document.querySelector('#es')
let en = document.querySelector('#en')

cat.addEventListener('click', () => {
    console.log('click en cat')    
    localStorage.setItem('lang', 'cat')
})

es.addEventListener('click', () => {
    console.log('click en es')
})

en.addEventListener('click', () => {
    console.log('click en en')
})


let copy = {cat:'catalan', es:'español', en:'English'}