console.log("hello");
// задание-1

const productName = "Droid";
const pricePerItem = 2000;

// задание-2

// Переменная pricePerItem объявлена с помощью let
//При объявлении переменной pricePerItem присвоено значение - число 2000
// Переменной pricePerItem присвоено новое значение, больше чем предыдущее на 1500
// Переменная productName объявлена с помощью let
// При объявлении переменной productName присвоено значение - строка "Droid"
// Переменной productName присвоено новое значение - строка "Repair droid"

productName = "Repair droid";
pricePerItem = 3500;
productName = "Repair droid";
console.log(productName);
pricePerItem = 3500;
console.log(pricePerItem);

// задание-3

//Объяви следующие переменные используя ключевое слово const или
//let и присвой им соответствующие значения.
//topSpeed - число 160.
//distance - число 617.54.
//login - строка "mango935".
//isOnline - буль true.
//isAdmin - буль false.

//Объявлена переменная topSpeed
//Значение переменной topSpeed это число 160
//Объявлена переменная distance
//Значение переменной distance это число 617.54
//Объявлена переменная login
//Значение переменной login это строка "mango935"
//Объявлена переменная isOnline
//Значение переменной isOnline это буль true
//Объявлена переменная isAdmin
//Значение переменной isAdmin это буль false
const topSpeed = 160;
const distance = 617.54;
const login = "mango935";
const isOnline = true;
const isAdmin = false;

// задание-4

// Дополни код, присвоив переменной totalPrice выражение для подсчёта
// общей суммы заказа.Переменная pricePerItem хранит цену одной единицы товара,
// а orderedQuantity - количество единиц товара в заказе.

// Объявлена переменная pricePerItem
// Значение переменной pricePerItem это число 3500
// Объявлена переменная orderedQuantity
// Значение переменной orderedQuantity это число 4
// Объявлена переменная totalPrice
// Значение переменной totalPrice это число 14000
// Использован оператор умножение

const pricePerItem = 3500;
const orderedQuantity = 4;

// Change code below this line
const totalPrice = pricePerItem * orderedQuantity;
console.log("totalPrice:", totalPrice);

// задание-5
// Объяви переменную message и запиши в неё сообщение о покупке, строку в формате:
// "You picked <имя товара>, price per item is <цена товара> credits".Где < имя товара > и
//     < цена товара > это значения переменных productName и pricePerItem.Используй синтаксис шаблонных строк.

// Объявлена переменная productName
// Значение переменной productName это строка "Droid"
// Объявлена переменная pricePerItem
// Значение переменной price это число 3500
// Объявлена переменная message
// Значение переменной message это строка "You picked Droid, price per item is 3500 credits"
const productName = "Droid";
const pricePerItem = 3500;
const message = `You picked ${"Droid"}, price per item is ${3500} credits`;

// задание-6
// Магазин по продаже ремонтных дроидов готов к открытию, осталось написать
// скрипт для их заказа.Объяви переменные и присвой им соответствующие значения:
// pricePerDroid - цена одного дроида, значение 800
// orderedQuantity - количество дроидов в заказе, значение 6
// deliveryFee - стоимость доставки, значение 50
// totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки
// message - сообщение о состоянии заказа в формате
// "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits)
// is included in total price."

// Объявлена переменная orderedQuantity
// Значение переменной orderedQuantity это число 6
// Объявлена переменная pricePerDroid
// Значение переменной pricePerDroid это число 800
// Объявлена переменная deliveryFee
// Значение переменной deliveryFee это число 50
// Объявлена переменная totalPrice
// Значение переменной totalPrice это число 4850
// Объявлена переменная message
// Значение переменной message это строка
// "You ordered droids worth 4850 credits. Delivery (50 credits) is included in total price."
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
console.log("totalPrice:", totalPrice);
const message = `You ordered droids worth ${totalPrice} credits.
 Delivery (${deliveryFee} credits) is included in total price.`;

// Задание-7
// Объяви функцию sayHi, внутри которой добавь console.log() со строкой
// "Hello, this is my first function!".После объявления вызови функцию sayHi.
// Ожидается объявление функции
// Функции присвоено имя sayHi
// В теле функции sayHi есть console.log("Hello, this is my first function!")
// После объявления есть вызов функции sayHi
function sayHi() {
  console.log("Hello, this is my first function!");
}

sayHi();

// Задание-8
// Функция add должна уметь складывать три числа и выводить результат в консоль. Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.

// Дополни console.log() так, чтобы он логировал строку "Addition result equals <result>", где <result> это сумма переданных чисел.

// Объявлена функция add(a, b, c)
// Вызов add(15, 27, 10) выводит в консоль "Addition result equals 52"
// Вызов add(10, 20, 30) выводит в консоль "Addition result equals 60"
// Вызов add(5, 10, 15) выводит в консоль "Addition result equals 30"
function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

// Задание - 9

// Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.
// Объявлена функция add(a, b, c)
// В функции add есть оператор return
// Вызов add(15, 27, 10) возвращает 52
// Вызов add(10, 20, 30) возвращает 60
// Вызов add(5, 10, 15) возвращает 30
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
function add(a, b, c) {
  return a + b + c;
}
add(2, 5, 8); // 15
console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));

// Задание - 10

// Функция makeMessage(name, price) составляет и возвращает сообщение о покупке. Она объявляет два параметра, значения которых будут задаваться во время её вызова.

// name - название товара
// price - цена товара
// Дополни код функции так, чтобы в переменную message записывалась строка "You picked <product name>, price per item is <product price> credits", где < product name >
// и < product price > это значения параметров name и price.Используй синтаксис шаблонных строк.
// Объявлена функция makeMessage(name, price)
// Вызов makeMessage('Radar', 6150) возвращает "You picked Radar, price per item is 6150 credits"
// Вызов makeMessage('Scanner', 3500) возвращает "You picked Scanner, price per item is 3500 credits"
// Вызов makeMessage('Reactor', 8000) возвращает "You picked Reactor, price per item is 8000 credits"
// Вызов makeMessage('Engine', 4070) возвращает "You picked Engine, price per item is 4070 credits"
function makeMessage(name, price) {
  const message = `You picked ${name}, price per item is ${price} credits`;
  return message;
}
