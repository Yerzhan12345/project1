let num = 51;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

for (let i = 1; i <= 10; i++) {
    if(i == 6){
        continue; //пропускает данное значение и проходит дальше по условию
    }
    console.log(i);
}