// const arr = []
// const array = ["Fn", "200", [1, 23],100,]
// console.log(array)
// console.log(array[1])
// console.log(array[2][1])
// console.log(array[0][0])
// const numbers = [1,2,3,4]
// numbers.push(5, "Vasja")
// console.log(numbers)

// const names = ["Vlad", "Vasja", "petro"]
// names.push("Anton")
// console.log(names)
// names.pop()
// console.log(names)
// const deleteName = names.pop()
// console.l

// const numbers = []
// const num1 = +prompt("Введите  числ 1")
// const num2 = +prompt("Введите числа 2")
// numbers = numbers.push(num1, num2)
// console.log(numbers)
// const names = ["Vlad", "Iren", "Dmitrii"]

// for(i = 0; i < names.length; i++)
// console.log(names[i])

// for(i = 0; i < 5; i++)
//  console.loonst names =
// const names = ["Арсен", "Vkf" ,"ghkjk","Arsen", "Vlad", "Olga", "Irina"]
// const numbers = [-100, 0, 50, -20, 0, 15, 25, -40];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     console.log(numbers[i]);
//   }
// }
// const numbers = [10, 11, 23, 56, 79]
// for (let i =0; i < numbers.length; i++) {
//     if (numbers[i] % 2 != 0)
//     console.log(numbers[i])
// }

// const numbers = [10, 11, 23, 56, 79];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 0) {
//     sum = sum + numbers[i];
//   }
// }

// console.log(`End `);
// const numbers = [10, 11, 23, 56, 79];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 0) {
//     sum = sum + numbers[i];
//   }
// }

const numbers = [10, 11, 23, 56, 79];
let sum1 = 0;
let sum2 = 0
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 != 0) {
    sum1 = sum1+ numbers[i];
  } else { 
    sum2 = sum2 + numbers[1]
  }
}

console.log(`Result ${sum1 - sum2}`);

