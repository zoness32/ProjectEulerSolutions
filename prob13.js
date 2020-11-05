const answer = (numbers, numDigits) => {
    const numArray = numbers.split('\n');
    const sumArray = [];
    let carry = 0;
    let sum = 0;

    for (let i = numDigits - 1; i >= 0; i--) {
        sum = 0;
        for (let j = 0; j < numArray.length; j++) {
            sum += parseInt(numArray[j][i]);
        }

        sum += carry;
        sumArray.push('' + sum % 10);
        carry = Math.floor(sum / 10);
    }

    sumArray.push('' + carry);

    return sumArray.reverse().join('');
};

exports.largeSum = answer;