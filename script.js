// let number = 5; debugger

// function logNumber() {
   
//     console.log(number);
// }

// number = 6;

// logNumber();

// number = 8;

// logNumber();

function createCounter () {
    let counter = 0;

    const myFunction = function () {
        counter = counter + 1;
        return counter;
    }
    return myFunction;
}

const increment = createCounter();
const c1 = increment(); // сначала в функцией возвращается значение 1
const c2 = increment(); // при вызове функции во второй раз уже новой переменной c2, функция increment помнит значение с прошлого counter = 1;
const c3 = increment(); // при вызове функции в третий раз уже новой переменной c3, функция increment помнит значение с прошлого counter = 2;

console.log(c1, c2, c3); // в консоль выводится значение 1 2 3

