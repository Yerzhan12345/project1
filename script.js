const hamburger = 0;
const fries = null;
const cola = 0;
const nuggets = 2;

if(hamburger===3 && cola === 2 || fries ===3 && nuggets) {
    console.log('Все сыты');
} else {
    console.log('Мы уходим');
}

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);