// const item = document.querySelector(".item-1")
// const texts = document.querySelectorAll(".item-1 p")
// item.addEventListener("click", function(){
//     texts.forEach(function(text) {
//         text.classList.toggle("hidden")  
//     })
// })

// const item2 = document.querySelector(".item-2")
//  const texts2 = document.querySelectorAll(".item-2 p")
// item2.addEventListener("click", function(){
//     texts2.forEach(function(text) {
//         text.classList.toggle("hidden")  
//     })
// })



// const items = document.querySelectorAll(".item")
// items.forEach(function(item) {
//     item.addEventListener("click", function() {
//         const texts = item.querySelectorAll("p")
//         texts.forEach(function(text) {
//             text.classList.toggle("hidden")
//         })
//     })
// })
const itemsDiv = document.getElementById('items');
const strings = [
    {
        en: "Car",
        ru: "Машина"
    },
    {
        en: "book",
        ru: "Книга"
    },
    {
        en: "hello",
        ru: "Привет"
    }
];

for (const item of strings) {
    const card = createCard(item);
    itemsDiv.appendChild(card);
}

const items = document.querySelectorAll(".item");
items.forEach(function(item) {
    item.addEventListener("click", function() {
        const texts = item.querySelectorAll("p");
        texts.forEach(function(text) {
            text.classList.toggle("hidden");
        });
    });
});

// const btnRU = document.getElementById('btnRU');
// const btnEN = document.getElementById('btnEN');

// btnRU.addEventListener('click', function() {
//     displayLanguage('ru');
// });

// btnEN.addEventListener('click', function() {
//     displayLanguage('en');
// });

// function displayLanguage(language) {
//     for (const item of items) {
//         const texts = item.querySelectorAll("p");
//         texts.forEach(function(text) {
//             if ((language === 'ru' && text.classList.contains('hidden')) ||
//                 (language === 'en' && !text.classList.contains('hidden'))) {
//                 text.classList.toggle("hidden");
//             }
//         });
//     }
//}
