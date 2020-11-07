const answer = () => {
    const singleDigits = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const tenToTeens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const doubleDigits = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let letterCount = 0;
    let word = "";

    const getTensWord = (num) => {
        let tens = Math.floor(num / 10) % 10;
        return tens > 0 ? doubleDigits[tens - 1] : "";
    }

    const getOnesWord = (num) => {
        let ones = num % 10;
        return ones > 0 ? singleDigits[ones - 1] : "";
    }

    const getHundredsWord = (num) => {
        let hundreds = Math.floor(num / 100);
        return singleDigits[hundreds - 1] + "hundred" + (num % 100 > 0 ? "and" : "");
    }

    const getTeensWord = (num) => {
        let teens = num % 100;
        return tenToTeens[teens - 10]
    }

    for (let i = 1; i <= 1000; i++) {
        word = "";

        if (i - 10 < 0) {
            word = getOnesWord(i);
        } else if (i - 20 < 0) {
            word = getTeensWord(i);
        } else if (i - 1000 < 0) {
            if (i - 100 < 0) {
                word = getTensWord(i) + getOnesWord(i);
            } else {
                if (i % 100 >= 10 && i % 100 < 20) {
                    word = getHundredsWord(i) + getTeensWord(i);
                } else {
                    word = getHundredsWord(i) + getTensWord(i) + getOnesWord(i);
                }
            }
        } else {
            word = "onethousand";
        }

        letterCount += word.length;
    }

    return letterCount;
};

exports.numberLetterCounts = answer;