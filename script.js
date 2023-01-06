const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const{languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: ${languages}`;

        languages.forEach(function(item, languages) {
            str = str + `${languages.toUpperCase()}`;
        });
        return str;
        }
    } ;

function showExperience(plan) {
        const {exp} = plan.skills;
        return exp;
}

console.log(showExperience(personalPlanPeter));
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }

    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));

let user = { name: "John", years: 30 };

let {name, years: age, isAdmin = false} = user;

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  function maxSalary (salary) {
    let
  }

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let message;
    (arr.length === 0) ? message = 'Семья пуста' : message = 'Семья состоит из: ';
    
    arr.forEach(value => {
        message += `${value} `
    });
    return message;
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let message;
    
    arr.forEach(value => {
        console.log(value.toLowerCase())
    }) ;
}
standardizeStrings(favoriteCities);

const someString = 'This is some strange string';

function reverse(str) { // данная функция возвращает принимаемую строку задом наперед
    let stri = '';
    let message = str.split('');
    for (let i = message.length-1; i >= 0; i--) {
        stri += `${message[i]}`;

    }
    return stri;
}

console.log(reverse(someString));