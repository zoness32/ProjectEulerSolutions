const answer = (grid, segmentLength) => {
    let maxProduct = 0;

    let array = grid.replace(/[ ]{2,}/g, ' ').split('\n').map(str => {
        return str.trimEnd();
    });
    const gridHeight = array.length;
    const gridWidth = array[0].split(' ').length;

    if (segmentLength * 2 > gridHeight * gridWidth) {
        return "Error: segment length cannot be greater than one of the grid dimensions";
    }

    array = array.join('').split(' ');

    let segmentLengthMinusOne = segmentLength - 1;

    for (let idx = 0; idx < array.length; idx++) {
        let directionObjArray = [];

        // left to right
        directionObjArray.push({
            getNextIndex: (idx) => {
                return idx + 1;
            },
            endIndex: (idx + segmentLengthMinusOne % gridWidth > idx) ? idx + segmentLengthMinusOne : undefined
        });

        // up and down
        directionObjArray.push({
            getNextIndex: (idx) => {
                return idx + gridWidth;
            },
            endIndex: idx + gridHeight * segmentLengthMinusOne < array.length ? idx + gridHeight * segmentLengthMinusOne : undefined
        });

        // left diagonal
        directionObjArray.push({
            getNextIndex: (idx) => {
                return idx + gridWidth - 1;
            },
            endIndex: idx + ((gridWidth - 1) * segmentLengthMinusOne) > gridWidth * segmentLengthMinusOne ? idx + ((gridWidth - 1) * segmentLengthMinusOne) : undefined
        });

        // right diagonal
        directionObjArray.push({
            getNextIndex: (idx) => {
                return idx + gridWidth + 1;
            },
            endIndex: idx + ((gridWidth + 1) * segmentLengthMinusOne) < (gridWidth * segmentLength) - 1 ? idx + ((gridWidth + 1) * segmentLengthMinusOne) : undefined
        });

        for (let j = 0; j < directionObjArray.length; j++) {
            let product = 1;
            let addrIndex = idx;
            let directionObj = directionObjArray[j];
            if (directionObj.endIndex) {
                for (let k = 0; k < segmentLength; k++) {
                    product *= array[addrIndex];
                    addrIndex = directionObj.getNextIndex(addrIndex);
                }

                maxProduct = product > maxProduct ? product : maxProduct;
            }
        }
    }

    return maxProduct;
}

exports.largestProductInAGrid = answer;