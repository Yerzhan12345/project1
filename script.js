"use strict";

function showFirstMessage(text) {
    console.log(text);
    let num = 20;
}

showFirstMessage("Hello World");

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(5,6));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
    console.log("Hello");
};

logger();

const calc = (a, b) => a + b;

calc(2,3);