let t = 0;

function f1 (){
    t++;
    console.log(t);

}

// f1();

// цикл

function f2() {
    let out = '';
    for(let i = 1; i<=200; i++){
        out += i + ' ';
    }
    console.log (out);
}

// f2();

//рекурсия
let i = 0;
let out = '';

function f3 () {
    i++;
    out += i + ' ';
    if(i > 30) return;
    f3();
}
// f3();
// console.log(out);

// лицо с низкой социальной ответственностью

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let s1 = 0;
function moneyRecursion() {
    let m = randomInteger(1, 100);
    console.log('add: ' + m);
    s1+=m;
    console.log('sum: ' + s1);
    if(s1 > 10000) return;
    moneyRecursion();
}

moneyRecursion();