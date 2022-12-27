"use strict"; // используется для использования последней версии языка

const num = 50;

(num == 50) ? console.log('OK!') : console.log('Error');

switch (num) {
    case 49:
        console.log('Incorrect');
        break;
    case 50:
        console.log('Exactly');
        break;
    default:
        console.log('Not this time');
}