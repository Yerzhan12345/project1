function sayHello(name) {
    return `Привет, ${name}`;
}

sayHello('Антон');
sayHello('Андрей');

function returnNeighboringNumbers(number) {
  return [number - 1, number, number + 1];
}

returnNeighboringNumbers(5);

function getMathResult(num1, num2) {
    let str = '';
    for (let i = 1; i <= num2; i++) {
        str += num1 * i + '---';
    }
    return str;
}

console.log(getMathResult(5,4));



