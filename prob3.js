const answer = (n) => {
    let maxPrime = -1;

    // divide by two until no longer possible
    while (n % 2 === 0) {
        maxPrime = 2;

        n >>= 1;
    }

    // start with three and divide until no longer possible, incrementing
    // by two each iteration, until i === number being divided
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            maxPrime = i;

            n = n / i;
        }
    }

    if (n > 2) {
        maxPrime = n;
    }

    return maxPrime;
}

exports.prob3 = answer;