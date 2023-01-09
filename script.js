

// console.log([] + false - null + true); NaN - пустой массив всегда будет значение string.
// [] + false = false, then + null = NaN, then NaN + true = NaN

// console.log([] + 1 + 2); '12' строка + 1 = "1", "1" + "2" = 12

// alert ("1"[0]);  "1", так как к строке можно обратиться через ее элемент как к массиву.

// console.log(2 && 1 && null && 0 && undefined); null
// и запинается на лжи, тоесть здесь 2 и 1 это true, след идет null значит здесь код остановливается и выдает в консоль null.

// console.log(!! (1 && 2) === (1 && 2)); "false", так как !! вернет нам boolean значение

// console.log(( null || 2 && 3 || 4 )); && по приоритету выще ||, так что 2 && 3 = 3, null || 3 = 3, 3 || 4 = 3; Answer: 3;

// const a = [1, 2, 3], b = [1, 2, 3]; 
// console.log(a === b); false, так как это разные массивы, разные хранилища информации.

// console.log(+"Infinity"); значение будет Infinity но тип данных будет Number;

// console.log(0 || "" || 2 || undefined || true || false); ответ будет 2, так как лог значение || запинается на правде. 0 - false, "" - false, 2 - true;
