const answer = (desiredDivisors) => {
    let numDivisors = 0;
    let num = 1;
    let counter = 1;

    while (numDivisors < desiredDivisors) {
        numDivisors = 0;
        for (let i = 1; i < Math.sqrt(num); i++) {
            if (num % i === 0) {
                if (num / i === i) {
                    numDivisors++;
                } else {
                    numDivisors += 2;
                }
            }
        }

        num += ++counter;
    }

    return num - counter;
}

exports.highlyDivisibleTriangularNumber = answer;