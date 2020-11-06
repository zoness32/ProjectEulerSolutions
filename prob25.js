const answer = (numDigits) => {
    let start = Date.now();
    let digits = 0;

    const getNextFibonacciTerm = (x, y) => {
        return x + y;
    }

    let x = 1n;
    let y = 1n;
    let temp = x;
    let counter = 2;
    while (digits < numDigits) {
        temp = y;
        y = getNextFibonacciTerm(x, y);
        x = temp;
        digits = y.toString().length;
        counter++;
    }

    console.log(`${Date.now() - start}ms`);
    return counter;
}

exports.thousandDigitFibonacciNumber = answer;