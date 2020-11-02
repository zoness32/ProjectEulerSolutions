const {isPrime} = require('./utils');

const answer = (n) => {
    let primesSum = 0;

    for (let a = 2; a < n; a++) {
        primesSum += isPrime(a) ? a : 0;
    }

    return primesSum;
}

exports.summationOfPrimes = answer;