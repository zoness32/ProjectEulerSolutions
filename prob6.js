const answer = (max) => {
    let squaresSum = 0;
    let sum = 0;

    for (let i = 1; i <= max; i++) {
        squaresSum = squaresSum + i * i;
        sum += i;
    }

    sum = sum * sum;
    return sum - squaresSum;
}

exports.sumSquareDifference = answer;