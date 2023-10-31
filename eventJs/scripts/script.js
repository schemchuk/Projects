// const button = document.querySelector(".button")
// button.addEventListener("click", function() {
//     console.log("На мене тицьнули")
// })

// function hello() {
//     console.log("Hello")
// }

// const button = document.querySelector(".button")
// const minus = document.querySelector("minus")
// const title = document.querySelector("h1")

// let counter = 0
// button.addEventListener("click", function() {
//     counter++
//     title.innerText = counter   
// })

// buttonMinus.addEventListener("click", function() {
//     counter--
//     title.innerText = counter  
// })       
//При нажатии на кнопку "red", менять ее цвет на красный
//const buttonRed = document.querySelector(".red") // Ищем кнопку red по классу .red
//const buttonGreen = document.querySelector(".green") // Ищем кнопку green по классу .green
//const buttonBlue = document.querySelector(".blue") // Ищем кнопку blue по классу .blue
//const buttonYellow = document.querySelector(".yellow") // Ищем кнопку yellow по классу .yellow
const square = document.querySelector(".item") // Ищем div по классу .item

const buttons = document.querySelectorAll("button") // [{}, {}, {}, {}]  nodeList

for(let i = 0; i < buttons.length; i++) {
    // console.log(buttons[i])
    buttons[i].addEventListener("click", function(event) {
         console.log(event)
        // console.log(event.target.className) // конкретно та кнопка из четырех, на которую кликнули
        square.style.backgroundColor = event.target.className
    })

}

