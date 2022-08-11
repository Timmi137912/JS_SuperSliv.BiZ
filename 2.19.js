/* // ТИПЫ данных
ПРОСТЫЕ ТИПЫ

ЧИСЛА 123
 3 4 6 
СТРОКИ "STRING"
'string'
"string"
ЛОГИЧЕСКИЙ "BOOLEAN"
TRUE / false

null
undefined
Symbol

ОБЪЕКТЫ

СПЕЦ ОБЪЕКТЫ
Массивы[]
Функции
function
Объект Даты
Регулярные выражения
Ошибки




ОБЫЧНЫЕ ОБЪЕКТЫ */

/* const obj = {
    name: 'Alex'
}

const arr = [1, 2, 3]; */

// - to String
//1)

console.log(typeof (String(4)));
//2)
console.log("ww" + "5");
console.log(typeof ("ww" + "5"));
console.log('https://vk.com/catalog/' + 5);

// - to Number

//1)
console.log(typeof (Number('5')));
//2)
console.log(typeof (5 + +'5'));
//3)
console.log(typeof (parseInt('15px', 10)));

let ans = +prompt("hello?", '');

// FASLE
// 0, '', null, undefined, NaN


//1 ЛОГИЧЕСКОЕ ПРЕОБРАЗОВАНИЕ
let switcher = null;

if (switcher) {
    console.log("working..");
} else {
    console.log("no.");
}

switcher = 1;
if (switcher) {
    console.log("working..");
}

//2 ЛОГИЧЕСКОЕ ПРЕОБРАЗОВАНИЕ

console.log(typeof (Boolean('5')));

console.log(typeof (!!('5')));