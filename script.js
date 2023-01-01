function fibonacci (a) {
    let result = [0, 1];

    

    for (let i = 2; i <= a; i++) {
        const prevNum1 = result[i - 1];
        const prevNum2 = result[i - 2];
        result.push(prevNum1+prevNum2);
    }
    return result;
}

console.log(fibonacci(100));