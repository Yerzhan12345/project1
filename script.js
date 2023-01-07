const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let square = 0;
    let area = 0;
    data.shops.forEach(shops => {
        square += shops.width * shops.length;
    });
    area = square * data.height;
    if(area * data.moneyPer1m3 >= data.budget) {
        console.log('Бюджета достаточно');
    }else {
        console.log('Бюджета недостаточно');
    }

}


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let a = [], b = [], c = [], rest = [];
    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}

console.log(sortStudentsByGroups(students));
