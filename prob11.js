const answer = (grid, segmentLength) => {
    let array = grid.replace(/[ ]{2,}/g, ' ').split('\n');
    const gridHeight = array.length;
    const gridWidth = array[0].split(' ').length;
    array = array.join('').split(' ');

    const ltor = {
        rMostIndex: ""
    }

    // const array = grid.replace(/\n+/g, ' ').replace(/[ ]{2,}/g, ' ').split(' ');
    let index = 0;
    let rMostIndex = index + segmentLength % gridWidth > index ? index + segmentLength : undefined;
    let lowestIndex = index + gridHeight * segmentLength < array.length ? index + gridHeight * segmentLength : undefined;

}

exports.largestProductInAGrid = answer;