const answer = (sourceStr) => {
    let startIndex = 0;
    let seriesSize = 13;
    let largestProduct = 0;
    let series;

    const findProduct = (series) => {
        let product = 1;

        while (series > 0) {
            let digit = series % 10;
            series = Math.floor(series / 10);
            product = product * digit;
        }

        return product;
    }

    while (startIndex + seriesSize < sourceStr.length) {
        series = sourceStr.slice(startIndex, seriesSize + startIndex);
        series = parseInt(series);

        let product = findProduct(series);
        largestProduct = product > largestProduct ? product : largestProduct;
        startIndex++;
    }

    return largestProduct;
}

exports.largestProductInSeries = answer;