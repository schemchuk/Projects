const form = document.querySelector("form")
const productName = document.querySelector(".product-name")
const productPrice = document.querySelector(".product-price")
const productsContainer = document.querySelector(".products")

form.addEventListener("submit", function(event) {
    event.preventDefault()
    // console.log(productName.value)
    // console.log(productPrice.value)

    const newProduct = {
        name: productName.value,
        price: productPrice.value
    }
    products.push(newProduct)

    showProducts()
    clearInputs()
})
function clearInputs() {
    productName.value = ""
    productPrice.value = ""
}


const products = [
  {
    name: "Велосипед",
    price: 40000,
  },

  {
    name: "Самокат",
    price: 15000,
  },
];

function showProducts() {
    productsContainer.innerHTML = ``
    products.forEach(function(product) {
        productsContainer.innerHTML += `
        <div class="product-card">
        <h5 class="product-card-name">${product.name}</h5>
        <p class="product-card-price">${product.price}</p>
        </div>
        `
        }) 
}

showProducts()



