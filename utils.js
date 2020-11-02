exports.isPrime = (n) => {
    let sqrt = Math.sqrt(n);

    if (n % 2 === 0 && n > 2) {
        return false;
    }

    for (let i = 3; i <= sqrt; i += 2) {
        if (n % i === 0 && n > i) {
            return false;
        }
    }

    return true;
};