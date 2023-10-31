

// function getSum(firstName, secondName) {
//     return firstName + secondName
//     // console.log(firstName + secondName)
// }

// const resalt = getSum(3, 8)
// console.log(resalt)
// var num = 4

// console.log(num)

// function test() {
//   var text = "Hello"
// }
// test()
// // console.log(text)

// var word = "hello"
// var word = "world"
// console.log(word);

// if (true) {
//     var num = 4
//   }
//   console.log(num)
  
//   function test() {
//     var text = "Hello"
//   }
//   test()
//   // console.log(text)
  
//   var word = "hello"
//   var word = "world"
//   console.log(word);
  
//   // function expression
//   let getSum = function(a, b) {
//     return a + b
//   }
  
//   console.log(getSum(4, 5))

/*
Напишите функцию, которая в качестве 
аргументов получает два числа и возвращает 
массив чисел со значениями 
от меньшего числа к большему. 
*/
// (9, 3) => [3, 4, 5, 6, 7, 8, 9]
// 1
/*
Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает объект со свойствами min, max, 
avg с соответствующими значениями по массиву
*/


// function getStatsOfArray(arr) {
//     if (arr.length === 0) {
//     return null
//   }
//   let sum = 0
//   let min = arr[0]
//   let max = arr[0]

//   for(let i = 0; i < arr.length; i++) {
//     sum += arr[i]

//     if(arr[i] < min) {
//       min = arr[i]
//     }
//     if(arr[i] > max) {
//       max = arr[i]
//     }
//   }

//   let avg = sum / arr.length
//   const obj = {
//     min,
//     max,
//     avg
//   }

//   return obj
// }

// console.table(getStatsOfArray([2, 1, 3, 5]))
/*
В программе объявлена переменная word 
со строковым значением. Используя цикл, 
разверните слово.

*/

// В программе объявлена переменная word со строковым значением. Используя цикл, разверните слово.
// Напишите функцию, которая в качестве аргументов получает слово и определяет, является ли оно палиндромом. Если да, функция возвращает true, в ином случае false.
// Anna, казак, мадам, оно, hello

// const text = "hello" // olleh

// function checkPalindrome(word) {
//     let reversed = ''
//     for(let i = word.length - 1; i >= 0; i--) {
//       reversed += word[i]
//     }
    
//     return reversed === word
//   }
  
//   console.log(checkPalindrome("hello"))
//   console.log(checkPalindrome("anna"))

// Используя цикл, выведите в консоль сумму чисел из диапазона значений от 0 до 50 кратные 5.
// let sum = 0
// for(let i = 0; i <= 50; i += 5) {
//   sum += i
// }
// console.log(sum)

// // В программе объявлена переменная list, содержащая массив данных. Используя цикл, посчитайте сумму значений до первого булевого значения. Дойдя до булевого значения остановите цикл. Результат суммы выведите в консоль
// const list = [2, -6, 15, 23, true, 100]
// let sum = 0
// for(let i = 0; i < list.length; i++){
//   if(typeof list[i] === "number") {
//     sum += list[i]
//   }
//   if(typeof list[i] === "boolean") {
//     break
//   }
// }

// console.log(sum);

// Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена со скидкой>)”

// DOMASKY


// Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
// function getMin(a, b) {
//     if(a < b) {
//       return a
//     }
//     if(a > b) {
//       return b
//     }
//     return "Они равны"
//   }
//   console.log(getMin(9, 4))
//   console.log(getMin(5, 9))
//   console.log(getMin(9, 9))


// / Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
// function logEvenNums(a, b) {
//   if (a == b) {
//     console.log("числа равны")
//     return
//   }
//   let min = a
//   let max = b
//   if(a > b) {
//     min = b
//     max = a
//   }

//   for(let i = max; i >= min; i--) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }

// logEvenNums(10, 20)
// logEvenNums(33, 25)

////////////////////////////////////
///////////////////////////////////////
/////////////////////////////////////

// Напишите цикл for, который выводит консоль каждое второе число от 0 до 10
for(let i = 0; i <= 10; i += 2) {
    console.log(i);
  }
  
  
  // Напишите цикл for, который выводит в консоль  все числа от 55 до 20
  for(let i = 55; i >= 20; i--) {
    console.log(i);
  }
  
  // Дан массив numbers. Вывести в консоль все числа из массива
  const numbers = [3, 5, 11, 2, 8, 1, 6];
  for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
  
  // Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат
  const numbers_squared = []
  for(let i = 0; i < numbers.length; i++) {
    // numbers_squared[i] = numbers[i] ** 2
    numbers_squared.push(numbers[i] ** 2)
  }
  
  console.log(numbers_squared)
  
  // Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)
  const last_elem = numbers_squared[numbers_squared.length - 1]
  console.log(last_elem);
  
  
  const user = {
    first_name: 'Ivan', 
    last_name: 'Ivanov', 
    age: 20, 
    salary: 500
  }
  
  const {first_name, last_name, age } = user
  console.log(`User’s name is ${first_name} ${last_name}. He is ${age} years old`)
  
  // Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
  function getMin(a, b) {
    if(a < b) {
      return a
    }
    if(a > b) {
      return b
    }
    return "Они равны"
  }
  console.log(getMin(9, 4))
  console.log(getMin(5, 9))
  console.log(getMin(9, 9))
  
  // Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
  function logEvenNums(a, b) {
    if (a == b) {
      console.log("числа равны")
      return
    }
    let min = a
    let max = b
    if(a > b) {
      min = b
      max = a
    }
  
    for(let i = max; i >= min; i--) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
  
  logEvenNums(10, 20)
  logEvenNums(33, 25)
  
  
  // Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
  function power(a, b = 2) {
    return a ** b
  }
  
  console.log(power(3));
  console.log(power(3, 3));
  
  // Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
  function sumOfN(n) {
    if(n < 1) {
      return null
    }
    let sum = 0
  
    for(let i = 1; i <= n; i++) {
      sum += i
    }
  
    return sum
  }
  
  console.log(sumOfN(10));
  console.log(sumOfN(-3));
  
  // Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
  function logSumOfEvensAndOdds(n, m) {
    let sumOfOdds = 0
    let sumOfEvens = 0
  
    for(let i = n; i <= m; i++) {
      if(i % 2 === 0) {
        sumOfEvens += i
      } else {
        sumOfOdds += i
      }
    }
  
    console.log(sumOfEvens);
    console.log(sumOfOdds);
  }
  
  logSumOfEvensAndOdds(5, 95)
  
  
  
  //Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.
   
  // Пример: [ 'one', 'two', 'three' ] => 'three'
  
  function getLongerStr(arr) {
    if(arr.length === 0) {
      return null
    }
    let longerStr = arr[0] // three
  
    for(let i = 1; i < arr.length; i++) {
      if(arr[i].length > longerStr.length) { // 5 > 5
        longerStr = arr[i]
      }
    }
  
    return longerStr
  }
  
  const arr = [ 'one', 'two', 'three', 'qwert' ]
  console.log(getLongerStr(arr));


