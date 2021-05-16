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

// задание-4
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

// Change code below this line
const message = `You picked ${"Droid"}, price per item is ${3500} credits`;
