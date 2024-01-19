// Last inn HTML ved innlasting av siden
document.addEventListener("DOMContentLoaded", getObject(`HTML`)
)

// Array til konsoll
console.log(resources)

// Variabel for lagring av HTML i nav
let navHTML = ""


// Legg til array-items i navHTML
resources.map(items => navHTML += 
    `<li onclick="getObject('${items.category}')">${items.category}</li>`)

// Legg navHTML i nav
const nav = document.getElementsByTagName("nav")
nav[0].innerHTML = navHTML



// Hent ut spesifisert objekt
function getObject(categoryTitle) {
    // Variabel for lagring av HTML i main
    let mainHTML = ""
    // Hent ut spesifisert objekt med filter
    let objects = resources.filter(resource => resource.category === categoryTitle)

    // Hent ut items fra objekt og konkatiner
    objects.map(mainItems => {
        mainHTML += `<h1>${mainItems.category}</h1>
        <p>${mainItems.text}</p>`
        
        mainItems.sources.map(sources => {
            mainHTML += `<li><a href="${sources.url}">${sources.title}</a></li>`
        })
    })

    console.log(objects);

    // Vis i main
    const main = document.getElementsByTagName("main")
    main[0].innerHTML = mainHTML
}







