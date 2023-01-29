//map
//does return new array
//does not change a size of original array
//uses values from original array

const people = [
    {name: 'bob', age: 20, position: 'developer'},
    {name: 'marina', age: 23, position: 'manager'},
    {name: 'alex', age: 30, position: 'CEO'},
];

const ages = people.map(function (person) {
    return person.age;
});
const newPeople = people.map(function(person){
    return{
        firstName:person.name,
        oldAge: person.age
    };
});

console.log(newPeople);