let result = '';
const lines = 8;

for (let i = 0; i < lines; i++) {
    for (let j = 1; j < i; j++) {
        result += '*' + 2;
    }
    result += '\n';
}
console.log(result);