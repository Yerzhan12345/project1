let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; // передача ссылки

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};
    
    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asasas';

console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet); // используем троеточие чтобы скопировать данные с одного массива и вставить его в другое.

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7]

log(...num); // можно даже передать массив состоящий из трех значений в функцию с тремя аргументами.

const array = ["a", "b"];
const newAaray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

console.log(newObj);
console.log(newAaray);