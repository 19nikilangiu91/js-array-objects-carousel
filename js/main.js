/* Consegna:
Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
Creare un carosello come nella foto allegata. */

/* Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider. */

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell’utente sulle frecce, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// Andiamo a selezionare il nostro "Container".
let container = document.querySelector(".container");
console.log(container);

// Andiamo a creare il nostro "div" e andiamo ad aggiungere la classe "carousel".
let divCarousel = document.createElement("div");

divCarousel.classList.add("carousel");
console.log(divCarousel);

// Andiamo a inserire il "div.carousel" all'interno del "container".
container.append(divCarousel);

// Andiamo a creare il nostro "div" e andiamo ad aggiungere la classe "elements-container".
let divElementsContainer = document.createElement("div");

divElementsContainer.classList.add("elements-container");
console.log(divElementsContainer);

// Andiamo a inserire il "div.elements-container" all'interno del "div.carousel".
divCarousel.append(divElementsContainer);

// Andiamo a creare il nostro "array" che conterrà le nostre immagini.

const images = [ 
    { 
        image: 'img/01.webp', 
        title: 'Marvel\'s Spiderman Miles Morale', 
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
    }, 
    { 
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
    }, 
    { 
        image: 'img/03.webp', 
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
    }, 
    { 
        image: 'img/04.webp', 
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
    }, 
    { 
        image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
    } 
];

console.log(images);

images.forEach((element,index) => {

     // Andiamo a creare il nostro "div" e andiamo ad aggiungere la classe "element" e la classe "active".

    let divElement = document.createElement("div");
    divElement.classList.add("element");

    if(index === 0){
        divElement.classList.add("active");
    }else
        divElement.classList.add("hidden");


    // Andiamo a inserire il "div.elements-container" all'interno del "div.carousel".
    divElementsContainer.append(divElement);
    console.log(divElement)

    let nuovaCarta = [
    `
        <img src="${element.image}" alt="image ${element.image +1}">
            <h1>${element.title}</h1>
            <p>${element.text}</p>
    `
    ]
    divElement.innerHTML += nuovaCarta;
})

// Andiamo a collegare il nostro bottone "next" e "prev" e inserirlo all' interno del noatro "div.carousel".

let btnNext = document.querySelector(".next");
divCarousel.append(btnNext);

let btnPrev = document.querySelector(".prev");
divCarousel.append(btnPrev);





