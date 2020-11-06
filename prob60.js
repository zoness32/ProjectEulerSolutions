const {isPrime} = require('./utils');

const answer = () => {
    let primes = [];
    for (let i = 3; i < 30000; i += 2) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    const concat = (a, b) => {
        let c = b;
        while (c > 0) {
            a *= 10;
            c = Math.floor(c / 10);
        }

        return a + b;
    }

    const makePairs = (a) => {
        const pairs = new Set();
        for (let b = a + 1; b < primes.length; b++) {
            if (isPrime(concat(primes[a], primes[b])) && isPrime(concat(primes[b], primes[a]))) {
                pairs.add(primes[b]);
            }
        }

        return pairs;
    }

    const pairs = new Map();
    let smallestSum = Number.MAX_VALUE;

    for (let i = 1; i < primes.length; i++) {
        if (primes[i] * 5 >= smallestSum) break;
        if (!pairs[i]) {
            pairs[i] = makePairs(i);
        }
        for (let j = i + 1; j < primes.length; j++) {
            if (primes[i] + primes[j] * 4 >= smallestSum) break;
            if (!pairs[i].has(primes[j])) continue;
            if (!pairs[j]) {
                pairs[j] = makePairs(j);
            }

            for (let k = j + 1; k < primes.length; k++) {
                if (primes[i] + primes[j] + primes[k] * 3 >= smallestSum) break;
                if (!pairs[i].has(primes[k]) || !pairs[j].has(primes[k])) continue;
                if (!pairs[k]) {
                    pairs[k] = makePairs(k);
                }

                for (let l = k + 1; l < primes.length; l++) {
                    if (primes[i] + primes[j] + primes[k] + primes[l] * 2 >= smallestSum) break;
                    if (!pairs[i].has(primes[l]) || !pairs[j].has(primes[l]) || !pairs[k].has(primes[l])) continue;
                    if (!pairs[l]) {
                        pairs[l] = makePairs(l);
                    }

                    for (let m = l + 1; m < primes.length; m++) {
                        if (primes[i] + primes[j] + primes[k] + primes[l] + primes[m] >= smallestSum) break;
                        if (!pairs[i].has(primes[m]) || !pairs[j].has(primes[m]) || !pairs[k].has(primes[m]) || !pairs[l].has(primes[m])) continue;

                        const sum = primes[i] + primes[j] + primes[k] + primes[l] + primes[m];
                        if (smallestSum > sum) {
                            smallestSum = sum;
                        }

                        break;
                    }
                }
            }
        }
    }

    return smallestSum;
}

exports.primePairSets = answer;