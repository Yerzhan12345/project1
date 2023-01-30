//reduce
//iterates, callback function
//reduces to a single value - number, array, object
//1 parametr ('acc') - total of all calculations
//2 parametr ('curr') - current itteration/value
 
const people = [
    {name: 'bob', age: 20, position: 'developer', id: 1, salary: 200},
    {name: 'marina', age: 23, position: 'manager', id: 2, salary: 300},
    {name: 'alex', age: 30, position: 'CEO', id: 3, salary: 500},
    {name: 'anna', age: 35, position: 'accountant', id: 4, salary: 500},
];

const total = people.reduce(function(acc, curentItem){
    console.log(`total: ${acc}`);
    console.log(`current money: ${curentItem.salary}`);
    acc += curentItem.salary;
    return acc;
},0)

console.log(total);