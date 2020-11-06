const answer = (maxFactorial) => {
    let factorial = 1n;

    for (let i = 1n; i < maxFactorial; i++) {
        factorial *= i;
    }

    let digits = factorial.toString().split('');
    let sum = 0;
    digits.forEach(digit => {
        sum += parseInt(digit);
    });

    return sum;
}

exports.factorialDigitSum = answer;