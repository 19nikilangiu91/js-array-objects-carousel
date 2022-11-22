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

// Dichiaro l'indece attuale.
let index = 0;

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

images.forEach((element, index, arrey) => {

    let nuovaCarta = [
    `<div id="index${index}" class ="element">
        <img src="${element.image}">
            <h1>${element.title}</h1>
            <p>${element.text}</p>
    </div>`   
    ]

    // Stampo la "nuovaCarta" nel "div.elements-container".
    divElementsContainer.innerHTML += nuovaCarta;
});  

// Andiamo a selezionare il "div.element".
let divElement = document.getElementById("index" + index);

// Creo una condizione "Se l'indice è uguale a 0, vado ad aggiungere la classe 'active', altrimenti avrà la classe 'hidden'".

if(index === 0){
    divElement.classList.add("active");
}else
    divElement.classList.add("hidden");

// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se l’img attiva è la prima e l’utente clicca la freccia prev, l’img che deve attivarsi sarà l’ultima e viceversa per l’ultima img se l’utente clicca la freccia next.

// Andiamo a collegare il nostro bottone "next" e inserirlo all' interno del nostro "div.carousel".

let btnNext = document.querySelector(".next");
divCarousel.append(btnNext);

// Creo un evento al "button.next"
btnNext.addEventListener("click", function () {
    
    // Incrementiamo di +1 con l'index.
    index++;

    // Quando l'index sara maggiore dell'ultima "image".
    if (index > images.length - 1) {
    
    // L'index ritorna a 0.
    index = 0;
  }

    // Andiamo a rimuovere l'active all'index precedente
    divElement.classList.remove("active");  

    // Andiamo ad aggiungere l'hidden all'index precedente
    divElement.classList.add("hidden"); 

    // incrementiamo di +1 richiamando "div.elemtent"
    divElement = document.getElementById("index" + index); 

    // Andiamo ad aggiungere l'active all'index seguente.
    divElement.classList.add("active");     

    // Andiamo a rimuovere l'hidden all'index seguente.   
    divElement.classList.remove("hidden");
    }
);

// Andiamo a collegare il nostro bottone "prev" e inserirlo all' interno del nostro "div.carousel".

let btnDown = document.querySelector(".prev");
divCarousel.append(btnDown);

// Creo un evento al "button.prev"

btnDown.addEventListener("click", function (){
  
    // Decrementiamo di -1 con l'index.
    index--;

    // Quando l'index sarà minore di 0.
    if (index < 0) {

    // L'index partirà dall'ultima "image".
    index = images.length - 1;
  }
    
    // Andiamo a rimuovere l'active all'index precedente
    divElement.classList.remove("active");  

    // Andiamo ad aggiungere l'hidden all'index precedente
    divElement.classList.add("hidden"); 

    // incrementiamo di +1 richiamando "div.elemtent"
    divElement = document.getElementById("index" + index); 

    // Andiamo ad aggiungere l'active all'index seguente.
    divElement.classList.add("active");     

    // Andiamo a rimuovere l'hidden all'index seguente.   
    divElement.classList.remove("hidden");
  }
);

