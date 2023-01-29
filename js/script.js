//find
//returns signal instance - (in this case object)
//returns first match, if no match - undefined
//great for getting unique value
 
const people = [
    {name: 'bob', age: 20, position: 'developer', id: 1},
    {name: 'marina', age: 23, position: 'manager', id: 2},
    {name: 'alex', age: 30, position: 'CEO', id: 3},
    {name: 'anna', age: 35, position: 'accountant', id: 4},
];

const person = people.find(function(person){
    return person.id === 3;
})

console.log(person.name);
