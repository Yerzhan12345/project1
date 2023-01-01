"use strict"; 

const str = "test";

console.log(str.toUpperCase()); // метод для большой буквы
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));// показывает в каком месте находятся данные символы

const logg = "Hello world";

console.log(logg.substring(6, 11 )); //обрезка слова 
console.log(logg.substr(6, 11 ));

const num = 12.2;

console.log(Math.round(num)); // метод округления до десятков

const test = "12.2px";
console.log(parseInt(test));// изменение типа данных с символа в int
console.log(parseFloat(test));// изменение типа данных с символа во float