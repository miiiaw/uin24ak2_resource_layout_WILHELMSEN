// Last inn HTML ved innlasting av siden (Hjelp fra ChatGPT for å finne rett eventListener). Vet ikke om dette er rett måte å gjøre det på, men det funker :)
document.addEventListener("DOMContentLoaded", getObject('HTML'))


// Array til konsoll
//console.log(resources)

// Variabel for lagring av HTML i nav
let navHTML = `<ul>`

// Legg til array-items i navHTML
resources.map(item => {
    navHTML += `<li onclick="getObject('${item.category}'); addActive(this);">${item.category}</li>`
})

// Legg navHTML i nav
const nav = document.getElementsByTagName("nav")[0]
nav.innerHTML += navHTML + `</ul>`


// Legg til klasse på klikket element (Hjelp fra ChatGPT med syntax'en for å forstå hvordan jeg kan legge til klassen på det klikkede elementet uten å referere til en ID el.)
function addActive(clickedElement) {
    // Fjern klassen fra alle li-elementene
    const listItems = document.querySelectorAll("nav ul li")
    listItems.forEach(li => li.classList.remove("active"))

    // Legg til klasse på klikket element
    clickedElement.classList.add("active")
}


// Hent ut spesifisert/valgt objekt
function getObject(categoryTitle) {
    // Variabel for lagring av HTML i main
    let mainHTML = ""
    // Hent ut spesifisert objekt
    let objects = resources.filter(resource => resource.category === categoryTitle)

    // Hent ut items fra objekt og konkatiner
    objects.map(mainItems => {
        mainHTML += `<h1>${mainItems.category}</h1><p>${mainItems.text}</p>`
        
        mainItems.sources.map(sources => {
            mainHTML += `<li><a href="${sources.url}">${sources.title}</a></li>`
        })
    })

    // Vis i main
    const main = document.getElementsByTagName("main")[0]
    main.innerHTML = mainHTML
}
