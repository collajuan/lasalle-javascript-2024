document.addEventListener('keyup', event => console.log(event.key))

//JS vanilla
// document.querySelectorAll('p').forEach(addEventListener('mouseover', event => {
//     console.log(event.target);
// }))


//Con jQuery
// $("p").on("mouseover", event => {
//     console.log(event.target);
//     event.target.style.backgroundColor = `#b13cb9`
// });

$('#submit').on('click', () => {
    console.log('click en boton');
    console.log($('#name').val());
})