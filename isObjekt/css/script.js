// const user = {}
// const doctor = {
//     username: "Arsen",
//     prof: "stomatolog",
//     exp: 20,
//     skills: ["Terapevt", "Ginekolog", "Implantolog"],
//     age: 45,
//     room: {
//         terapevt: ["Rengenapparat", "bormashine"],
//         ortodont: ["operateroom"],
//     },
//     shedule: {
//         monday: [ "9:00", "17:00"]
//     }
// }
// console.log(doctor.username)
// console.log(doctor.shedule.monday[1])
const product = {
    name: "Apple",
    price: 2,
}
// console.log(`you can bye in the store ${product.name} , price ${product.price} `)
 
// const products = [
//     {
//         name: "молоко",
//         price: 500
//     },
//     {
//         name: "масло",
//         price: 400
//     }
// ]
// for (let i =0;  i < products.name; i++ )
//  console.log(`you can bye in the storis ${product[i].name} , your price ${products[i].price}`)

// const products = [
//     {
//         name: "молоко",
//         price: 500
//     },
//     {
//         name: "масло",
//         price: 400
//     },
//     {
//         name: "гречка",
//         price: 700
//     },
// ]
// let sum = 0
// for (let i = 0;  i < products.length; i++ ) {
//     sum += products[i].price

// }
// console.log(sum)


// const user = {
//     name: "Wasja",
//     age: 25,
//     skills: ["html", "css", "js"],
// }

// const {name, age, skills} = user
// console.log(name)
// console.log(age)
// console.log(skills)

const products = [
    {
        name: "ACER",
        model: "G500",
        price: 50000,
        category: "laptop"
    },
    {
        name: "Samsung",
        model: "G200",
        price: 45000,
        category: "laptop"
    },
    {
        name: "Samsung",
        model: "T237",
        price: 60000,
        category: "TV"
    },
    {
        name: "Iphone",
        model: "15",
        price: 70000,
        category: "phone"
    },
    {
        name: "Lenovo",
        model: "T700",
        price: 65000,
        category: "TV"
    }
]
// for (let i = 0; i < products.length; i ++) {
//     const {name, model, price, category} = products[i]
    // console.log(`  Название товара ${name}, цена товаров со скидкой ${price -(price * 0.1 )}` )
    // console.log(`
    //  Название модели: ${name},
    //  модель: ${model},
    //  цена: ${price},
    //  Категория: ${category}`)
//}

// for (let i = 0; i < products.length; i ++) {
//     const {name, model, price, catryego} = products[i]
//     const productsTV = []
//     if (category == "TV") {
//         productsTV.push({name, model, price,})
//        console.log( sraka `${productsTV.}
//        `)
//     }
// }