// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   console.log(message);
// }

// getNameLength("tomat");
// getNameLength("simpson");

// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[20];

// console.log(courseTopic[20]);

// function getSubstring(string, length) {
//   const substring = "Hello world";

//   console.log(substring.slice(3, substring.length));
// }

// getSubstring("Hello world");

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line

//   if (message.length <= maxLength) {
//     result = message;
//   } else if (message.length > maxLength) {
//     result = message.slice(0, maxLength) + "...";
//   }

//   /// Change code above this line
//   return result;
// }
// console.log(formatMessage("Curabitur ligula sapien", 23));
// const name = "Mango";
// console.log(name.split(""));
// const message = "JavaScript essentials";
// console.log(message.split(" "));

// function splitMessage(message, delimeter) {
//   let words;

//   return words;
// }
// console.log(message.split(" "));
// function splitMessage(message, delimeter) {
//   let words;
//   word = "Mango hurries to the train";
//   return words;
// }
// console.log;
// function slugify(title) {
//   // Change code below this line

//   const array = title.split(" ");
//   const string = array.join("-");
//   const lowerString = string.toLowerCase();
//   console.log(lowerString);

//   // return array.join(" ");
//   // Change code above this line
// }
// slugify("Arrays for begginers");

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(i);
// }
// Задание25
// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

// Тесты
// Объявлена переменная start
// Значение переменной start это число 3
// Объявлена переменная end
// Значение переменной end это число 7
// Объявлена переменная i - счётчик цикла
// Начальное значение переменной i равно 3
// Условие цикла приводится к true до тех пор, пока i меньше либо равно 7
// На каждой итерации значение переменной i увеличивается на единицу
// Вывод в консоль переменной i покажет числа 3, 4, 5, 6, 7

// function filterArray(numbers, value) {
//   // Change code below this line

//   let array = [];
//   console.log(numbers);
//   for (let i = 0; i <= numbers.length - 1; i += 1) {
//     if (numbers[i] > value) {
//       array.push(numbers[i]);
//     }
//   }
//   console.log(array);
//   return array;

//   // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3);

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

// for (const qr of order) {
// }

// Change code above this line
//   return total;
// }
// Задание26
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// Тесты
// Объявлена функция calculateTotalPrice(order)
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
// Вызов функции calculateTotalPrice([]) возвращает 0
// Вызов функции calculateTotalPrice() со случайным массивом чисел возвращает правильную сумму
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (const qwe of order) {
//     total += qwe;
//   }

//   return total;
// }

// Задание27
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

// Тесты
// Объявлена функция filterArray(numbers, value)
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
// Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
// Функция calculateTotalPrice() использует цикл for..of
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line

// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);
// Задание13
// Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

// Тесты
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная keys.
// Значение переменной keys это массив ['descr', 'rating', 'price'].
// Значение переменной keys получено с помощью метода Object.keys().
// Объявлена переменная values.
// Значение переменной values это массив ['Spacious apartment in the city center', 4, 2153].
// Значение переменной values получено с помощью цикла for...of.

//
function add(...args) {
  // Change code above this line
  let totalElements = 0;

  for (const el of args) {
    totalElements += el;
  }
  console.log(totalElements);
  return totalElements;
}

add(1, 2, 3, 4, 5);
