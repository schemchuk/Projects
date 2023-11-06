const form = document.querySelector("form")
const productName = document.querySelector(".product-name")
const productPrice = document.querySelector(".product-price")
const productsContainer = document.querySelector(".products")
const notification= document.querySelector(".notification")
const notificationText = document.querySelector(".notification-text")


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
    showNotification("Продукт успешно добавлен")
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
 
function showNotification(text) {
  
    notification.style.display = "block"
    notificationText.innerText = text
    setTimeout(function() {
      notification.style.display = "none"
    }, 2000)
}


function showProducts() {
    productsContainer.innerHTML = ``
    products.forEach(function(product, index) {
        productsContainer.innerHTML += `
        <div class="product-card">
        <h5 class="product-card-name">${product.name}</h5>
        <p class="product-card-price">${product.price}</p>
        <button class="delete-btn" id="${index}">X</button>
        </div>
        `
        }) 

}

showProducts()
function deleteProduct() {
    deleteBtns.forEach(function(button) {
        button.addEventListener("click", function() {
            button.parentElement.remove()
            const currentId = button.id
            products.splice(currentId, 1)
            showProducts()
        })
    })
}
const deleteBtns = document.querySelectorAll(".delete-btn") // [{btn}, {btn}, {btn}]



//showNotification("Продукт успешно удален")
