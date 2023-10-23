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

const products = [
    {
        name: "молоко",
        price: 500
    },
    {
        name: "масло",
        price: 400
    },
    {
        name: "гречка",
        price: 700
    },
]
let sum = 0
for (let i = 0;  i < products.length; i++ ) {
    sum += products[i].price

}
console.log(sum) 