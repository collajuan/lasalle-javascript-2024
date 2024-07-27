console.log("Exercicis DOM");

// tot el document HTML
console.log(document)

// accés a propietats del DOM
console.log(document.title);
console.log(document.URL);

// accés a les propietats d'un element concret
console.log(document.querySelector("h1").style)
console.log(document.querySelector("h1").innerHTML)
console.log(document.querySelector("h1").innerText)

// accés a les propietats renderitzades d'un element (NO ÉS DOM!! ⚠)
const titol = document.querySelector("h1")
console.log(window.getComputedStyle(titol).getPropertyValue("color"))
console.log(window.getComputedStyle(titol).getPropertyValue("font-family"))

// innerHTMl vs innerText vs textContent
console.log(document.querySelector("header").innerHTML)
console.log(document.querySelector("header").textContent)
console.log(document.querySelector("header").innerText)

// guardar un element dins una variable
const header = document.querySelector("header")
header.innerHTML = "<h1>Document Object Model</h1>"
header.innerHTML += "<h3>Pàgina de proves modificant el DOM amb JavaScript</h3>"

console.log(document.querySelector("style").textContent)



setTimeout(() => {
    header.style.backgroundColor = `#b13cb9`
    document.querySelector('input[type="submit"]').style.backgroundColor = `#b13cb9`
    // document.querySelector('input[type="submit"]:hover').style.backgroundColor = `#67196d`
}, 4000)

setTimeout(canviarCSS, 6000)

function canviarCSS() {
    document.querySelector("link[rel='stylesheet']").href = "../styles/dom_styles.css"
}

// selecciona més d'un element amb un selector
const images = document.querySelectorAll("img")
console.log(images);

for (const img of images) {
    img.src = "https://cataas.com/cat?width=600&height=400"
}

// afegir contingut a una secció
section2 = document.querySelector("#section2") 
section2OriginalContent = document.querySelector("#section2").innerHTML

section2.innerHTML += '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, itaque! Explicabo quibusdam harum mollitia dolorem asperiores quis. Cupiditate est, perferendis quasi cumque iste molestiae reprehenderit!</p>'

section2.innerHTML += '<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus amet sunt voluptates consequuntur ad perspiciatis labore error impedit aliquid architecto veniam earum exercitationem aliquam tenetur, <span class="custom">blanditiis voluptatibus explicabo quod numquam enim fugiat!</span> Tenetur doloremque assumenda cupiditate blanditiis saepe necessitatibus omnis!</p>'

console.log(section2OriginalContent);
console.log(section2.innerHTML);

const customTexts = document.querySelectorAll(".custom")

customTexts[0].style.fontWeight = "bold"
customTexts[1].style.fontStyle = "italic"
customTexts[2].style.color = "#b13cb9"
customTexts[3].style.fontVariant = "small-caps"