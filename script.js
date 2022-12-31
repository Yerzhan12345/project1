const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9; 

function convert (amount, curr) {
    return curr * amount; 
}
// желательно чтобы функция выполняла лишь одно действие. Типа как здесь возращала только значение, а выведение в консоль делалось в другом месте.
function promotion(result) {
    console.log(result * discount);
}

console.log(convert(500, usdCurr));
convert(500, eurCurr);

promotion(convert(500, usdCurr)); // здесь мы можем использовать одну функцию для вызова другой.

function test() {
    for (let i = 0; i < 5; i++){
        console.log(i);
        if(i === 3) return // здесь используется данный return чтобы досрочно завершить программу.
    }
    console.log("done");
}
test();

function diNothing() {}
    console.log(diNothing() === undefined);
