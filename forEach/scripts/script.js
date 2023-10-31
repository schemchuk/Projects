 //const names = ["Nina", "Vlad", "Artem", "Olga", "Liudmyla"]
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }

// names.forEach(function(name, index, array) {
//     console.log(name)
//     // console.log(index)
//     // console.log(array)
// })

// const numbers = [10, 5, 18, 21, 5, 7]
// numbers.forEach(function(number) {
//     console.log( number ** 2)
// }) 
// const container = document.querySelector(".item")
// const names = ["Nina", "Vlad", "Artem", "Olga", "Liudmyla"]
//  names.forEach(function(name) {
//    container.innerHTML += `<p>${name}</p>`

   
    
//  })
const products = [
    {
        name: "Молоко",
        price: 500
    },
    {
        name: "Гречка",
        price: 600
    },
    {
        name: "Масло",
        price: 850
    },
]

const container = document.querySelector(".products")
products.forEach(function(product) {
    container.innerHTML += 
    `<div class="product">
            <h5>${product.name}</h5>
            <p>${product.price}</p>
    </div>`
    
})