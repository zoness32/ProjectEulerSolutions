const answer = (maxStartingNumber) => {
    const foundSequences = {1: 1};
    let longestSequenceStartNum = 0;
    let longestSequenceCount = 0;

    const countTermsInSequence = (num) => {
        let termCount = 0;
        while (num > 1) {
            if (foundSequences[num]) {
                return termCount += foundSequences[num];
            }

            if (num % 2 === 0) {
                num = num / 2;
                foundSequences[num] = countTermsInSequence(num);
                termCount++;
            } else {
                num = (3 * num) + 1;
                foundSequences[num] = countTermsInSequence(num / 2);
                termCount++;
            }
        }

        return ++termCount;
    }

    for (let i = maxStartingNumber / 2; i < maxStartingNumber; i++) {
        const count = countTermsInSequence(i);
        if (count > longestSequenceCount) {
            longestSequenceStartNum = i;
            longestSequenceCount = count;
        }
    }

    return longestSequenceStartNum;
}

exports.longestCollatzSequence = answer;