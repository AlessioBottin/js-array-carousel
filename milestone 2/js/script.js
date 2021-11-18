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


// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo le immagini e i testi delle immagini dinamicamente servendoci
//  dell'array fornito e un semplice ciclo for che concatena un template literal. Al termine di questa fase ci ritroveremo 
//  con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.

// Seleziono i contenitori 
const currentImg = document.querySelector('.current-img');
const thumbnails = document.querySelector('.thumbnails');

console.log(currentImg);

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
