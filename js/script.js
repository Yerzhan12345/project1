function morning(name) {
    return `Good morning ${name.toUpperCase()}`;
}

function afternoon(name) {
    return `Good afternoon ${name.toUpperCase()}`;
}

function greet(name, callback) {
    const myName = 'John';
    console.log(`${callback(name)}, my name is ${myName}`);
}

greet('bobo', morning);
greet('peter', afternoon);
