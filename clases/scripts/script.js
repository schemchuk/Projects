//const title = document.querySelector("h1")
//console.log(title.classList)
//title.classList.add("item")
const todo = ["Сварить суп", "Сделать ДЗ", "Убраться дома", "Поваляться"]
const container = document.querySelector(".todo-list")
todo.forEach(function(text){
    container.innerHTML += `
    <div class="todo-item">
        <h5>${text}</h5>
    </div>`
})

const todoCards = document.querySelectorAll(".todo-item") // Нахожу все карточки
todoCards.forEach(function(todoCard) {
    todoCard.addEventListener("click", function(event) {
        // event.target.classList.add("active")
        todoCard.classList.add("active") // 
    })
})

