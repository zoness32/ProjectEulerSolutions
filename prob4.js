const answer = () => {
    let palindrome = 0;
    let iterations = 0;

    const mul = (a, b) => {
        return a * b;
    }

    const checkIfPalindrome = (product) => {
        let strArray = product.toString().split('');
        const midpoint = Math.ceil(strArray.length / 2);

        if (strArray.length % 2 !== 0) {
            // remove middle number
            strArray.splice(midpoint, 1);
        }

        let back = strArray.splice(midpoint, midpoint).reverse().join();
        return strArray.join().toString() === back.toString();
    }

    const checkIfPalindromeWithMath = (product) => {
        let reverseNum = 0;
        let copy = product;
        while (product > 0) {
            reverseNum = (reverseNum * 10) + (product % 10);
            product = Math.floor(product / 10);
        }

        return copy === reverseNum;
    }

    const startFast = Date.now();
    for (let i = 999; i >= 100; i--) {
        for (let j = i; j >= 10; j--) {
            let num = mul(i, j);
            if (num <= palindrome) {
                break;
            }

            let isPalindrome = checkIfPalindromeWithMath(num);
            if (isPalindrome) {
                palindrome = num > palindrome ? num : palindrome;
            }

            iterations++;
        }
    }
    const endFast = Date.now();

    const startMed = Date.now();
    for (let i = 999; i >= 100; i--) {
        for (let j = i; j >= 100; j--) {
            let num = mul(i, j);
            // if (num <= palindrome) {
            //     break;
            // }

            let isPalindrome = checkIfPalindromeWithMath(num);
            if (isPalindrome) {
                palindrome = num > palindrome ? num : palindrome;
            }

            iterations++;
        }
    }
    const endMed = Date.now();

    const startSlow = Date.now();
    for (let i = 999; i >= 100; i--) {
        for (let j = 999; j >= 100; j--) {
            let num = mul(i, j);

            let isPalindrome = checkIfPalindromeWithMath(num);
            if (isPalindrome) {
                palindrome = num > palindrome ? num : palindrome;
            }

            iterations++;
        }
    }
    const endSlow = Date.now();

    const fast = endFast - startFast;
    const med = endMed - startMed;
    const slow = endSlow - startSlow;

    return {palindrome, fast, med, slow };

}

exports.largestPalindromeProduct = answer;