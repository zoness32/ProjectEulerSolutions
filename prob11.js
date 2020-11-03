const answer = (grid, segmentLength) => {
    let array = grid.replace(/[ ]{2,}/g, ' ').split('\n');
    const gridHeight = array.length;
    const gridWidth = array[0].split(' ').length;

    if (segmentLength * 2 > gridHeight * gridWidth) {
        return "Error: segment length cannot be greater than one of the grid dimensions";
    }

    array = array.join('').split(' ');

    const ltor = {
        rMostIndex: ""
    }

    // const array = grid.replace(/\n+/g, ' ').replace(/[ ]{2,}/g, ' ').split(' ');
    let index = 0;
    let rightIndex = index + segmentLength % gridWidth > index ? index + segmentLength : undefined;
    let downIndex = index + gridHeight * segmentLength < array.length ? index + gridHeight * segmentLength : undefined;
    let leftDiagIndex = index + (gridWidth * segmentLength) - (segmentLength - 1)
}

exports.largestProductInAGrid = answer;