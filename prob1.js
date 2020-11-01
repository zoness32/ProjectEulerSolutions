const answer = (max) => {
    let sum = 0;
    for (let i = 0; i < max; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum = sum + i;
        }
    }

    return sum;
};

exports.multiplesOf3And5 = answer;