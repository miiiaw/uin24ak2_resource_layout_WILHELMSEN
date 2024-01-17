// Array til konsoll
console.log(resources)

// Variabler for lagring av HTML 
let navHTML = ""
let mainHTML = ""


// Legg til array-items i navHTML
resources.map(items => navHTML += 
    `<li>${items.category}</li>`)

// Legg navHTML i nav
const nav = document.getElementsByTagName("nav")
nav[0].innerHTML = navHTML



// Hent ut spesifisert objekt
function getObject(categoryTitle) {
    return resources.filter(resource => resource.category === categoryTitle)
    // MÅ ENDRES - BRUK IF ... RETURN ...
}

// Lagre objekt i variabel
let objects = getObject("HTML");

console.log(objects);

// Hent ut items fra objekt og konkatiner
objects.map(mainItems => {
    mainHTML += `<h1>${mainItems.category}</h1>
    <p>${mainItems.text}</p>`
    
    mainItems.sources.map(sources => {
        mainHTML += `<li><a href="${sources.url}">${sources.title}</a></li>`
    })
})

// Vis i main
const main = document.getElementsByTagName("main")
main[0].innerHTML = mainHTML


/*
// Eventlistener til liste-element i nav
document.querySelectorAll("nav li").forEach(li => {
    li.addEventListener("click", getObject)
}) 
*/