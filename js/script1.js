'use strict';

const box = document.getElementById('box');// получает один элемент по уникальному идентификатору id

const btns = document.getElementsByTagName('button');

console.log(btns[0]); // при обращении к определенному элемнту на странице мы используем элемент массива

const circles = document.getElementsByClassName('circle');
console.log(circles[0]);

const hearts = document.querySelectorAll('.heart'); // у него есть метод  for each

hearts.forEach(elements => {
    console.log(elements);
});

const oneHeart = document.querySelector('.heart');// использует толлько первый элемент
console.log(oneHeart);

