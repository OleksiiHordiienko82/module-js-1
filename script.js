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

const max = 10;

for (let i = 0; i < max; i += 1) {
  console.log(i);
}
Задание
Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

Тесты
Объявлена переменная start
Значение переменной start это число 3
Объявлена переменная end
Значение переменной end это число 7
Объявлена переменная i - счётчик цикла
Начальное значение переменной i равно 3
Условие цикла приводится к true до тех пор, пока i меньше либо равно 7
На каждой итерации значение переменной i увеличивается на единицу
Вывод в консоль переменной i покажет числа 3, 4, 5, 6, 7