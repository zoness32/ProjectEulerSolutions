const answer = (initX, initY, max) => {
    const getNextFibonacci = (x, y) => {
        return x + y;
    }

    let sum = 0;
    let x = initX;
    let y = initY;
    let nextVal = getNextFibonacci(x, y);
    // while num < max
    while (nextVal < max) {
        // if even, add to sum
        if (nextVal % 2 === 0) {
            sum += nextVal;
        }
        x = y;
        y = nextVal;
        // getNextFibonacci
        nextVal = getNextFibonacci(x, y);
    }

    return sum;
};

exports.evenFibonacciNumbers = answer;