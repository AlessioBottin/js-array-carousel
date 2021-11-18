const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


// MILESTONE 3
// Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventa visibile in formato
// grande a sinistra e nel suo angolo in basso a destra dovranno comparire relativi:
//  - titolo e
//  - testo.
// Allo stesso tempo nelle miniature l'immagine attiva dovrà apparire in evidenza rispetto alle altre.

// Seleziono i contenitori 
const currentImg = document.querySelector('.current-img');
const thumbnails = document.querySelector('.thumbnails');

// Per ogni immagine creo il suo elemento nel html 
for ( i = 0; i < items.length; i++) {
    let thisPath = items[i];
    let thisTitle = title[i];
    let thisText = text[i];

    // Popolo il current img 
    const newImg = 
    `
        <div class="single-img">
            <img src="${thisPath}" alt="${i}">

            <div class="desc">
                <div class="title">${thisTitle}</div>
                <p class="text">${thisText}</p>    
            </div>
        </div>
    `;

    currentImg.innerHTML += newImg;

    // Popolo le thumbnails 
    const newThumbnail =
    `
        <div class="single-thumbnail">
            <div class="overlay"></div>
            <img src="${thisPath}" alt="${i}">
        </div>
    `;

    thumbnails.innerHTML += newThumbnail;

}

// Devo mettere la prima immagine come default 
let activeImg = 0;

// Creo un array con gli elementi di una classe
const allImg = document.getElementsByClassName('single-img');
const allThumbnails = document.getElementsByClassName('single-thumbnail');

// Aggiungo la classe active 
allImg[activeImg].classList.add('active');
allThumbnails[activeImg].classList.add('active');

// Seleziono i bottoni 
const upBtn = document.querySelector('.up');
const downBtn = document.querySelector('.down');

// Incremento activeImg al click di up 
upBtn.addEventListener('click', 
    function () {

        // Rimuovo la classe active dall elemento corrente 
        allImg[activeImg].classList.remove('active');
        allThumbnails[activeImg].classList.remove('active');

        if ( activeImg < items.length - 1 ) {
            activeImg++;
        } else {
            activeImg = 0;
        }

        // Aggiungo la classe active al nuovo elemento 
        allImg[activeImg].classList.add('active');
        allThumbnails[activeImg].classList.add('active');
    }   
)

// Decremento activeImg al click di down 
downBtn.addEventListener('click', 
    function () {

        // Rimuovo la classe active dall elemento corrente 
        allImg[activeImg].classList.remove('active');
        allThumbnails[activeImg].classList.remove('active');

        if ( activeImg > 0 ) {
            activeImg--;
        } else {
            activeImg = items.length - 1;
        }

        // Aggiungo la classe active al nuovo elemento 
        allImg[activeImg].classList.add('active');
        allThumbnails[activeImg].classList.add('active');
    }   
)