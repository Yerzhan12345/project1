//filter
//does return new array
//can manipulate the size of new array
//returns based in condtion

const people = [
    {name: 'bob', age: 20, position: 'developer'},
    {name: 'marina', age: 23, position: 'manager'},
    {name: 'alex', age: 30, position: 'CEO'},
    {name: 'anna', age: 35, position: 'accountant'},
];

const youngPeople = people.filter(function(person){
    return person.age <= 25;
})

const developers = people.filter(function(person){
    return person.position === 'developer';
})

console.log(youngPeople);
console.log(developers);
