function manhattan(num){
    const layer = getLayer(num);
    const perfSq = nextSquare(layer);
    let dist = Math.sqrt(perfSq) - 1;

    // identify 4 corners
    const corners = getCorners(perfSq);
    const c1 = corners[0];
    const c2 = corners[1];
    const c3 = corners[2]
    const c4 = corners[3];

    let pos = 0;
    // if corner, otherwise...
    if (num === c1 || num === c2 || num === c3 || num === c4){
        return dist;
    } else if (num > c2){
        pos = closerTo(num, c2, c1);
    } else if (num > c3){
        pos = closerTo(num, c3, c2);
    } else {
        pos = closerTo(num, c4, c3);
    }
    dist = decrementDist(pos, num, dist);
    return dist;
}

function decrementDist(pos, num, dist){
    while (pos !== num){
        pos = (pos < num) ? pos + 1 : pos - 1;
        dist--;
    }
    return dist;
}

function getLayer(num){
    const sq = Math.sqrt(num);
    if (Number.isInteger(sq)){
        return (sq % 2) === 0 ? sq / 2 : (sq - 1) / 2;
    }
    return (Math.ceil(sq) % 2) === 0 ? (Math.floor(sq) + 1) / 2 : Math.floor(sq / 2); 
}

function nextSquare(layer){
    return ((layer * 2) + 1) ** 2;
}

function getCorners(perfSq){
    const sub = Math.sqrt(perfSq) - 1;
    let corners = [perfSq];
    corners.push(corners[0] - sub);
    corners.push(corners[1] - sub);
    corners.push(corners[2] - sub);
    return corners;
}

function closerTo(num, min, max){
    // if in the middle, returns smaller value
    return num - min > max - num ? max : min;
}
 
function nextCoord(currIdx, x, y){
    const layer = getLayer(currIdx);
    const corners = getCorners(nextSquare(layer));
    let newX = x;
    let newY = y;
    // what side is this index on
    if (currIdx < corners[3]) {
        newY++;
    } else if ((corners[3] <= currIdx) && (currIdx < corners[2])) {
        newX--;
    } else if ((corners[2] <= currIdx) && (currIdx < corners[1])) {
        newY--;
    } else if ((corners[1] <= currIdx) && (currIdx <= corners[0])) {
        newX++;
    }
    return [currIdx + 1, newX, newY];
}
  
function sumSpiral(grid, x, y){
    const testCoord = [[x - 1, y + 1], [x, y + 1], [x + 1, y + 1], 
    [x - 1, y], [x + 1, y], [x - 1, y - 1], [x, y - 1], [x + 1, y - 1]];
    return testCoord.reduce((prev, curr) => curr in grid ? prev + grid[curr] : prev, 0);
}

function firstLarger(sum, num, currIdx, x, y, grid){
    while (sum <= num){
        [currIdx, x, y] = nextCoord(currIdx, x, y);
        grid[[x, y]] = sumSpiral(grid, x, y);
        sum = grid[[x, y]];
    }
    return sum;
}

function part2(num){
    const grid = {};
    // inital values 
    grid[[0, 0]] = 1; 
    const x = 0;       
    const y = 0;
    const currIdx = 1; // index starts at 1 
    const sum = grid[[x, y]];
    return firstLarger(sum, num, currIdx, x, y, grid);
}

module.exports = {
    manhattan,
    closerTo,
    sumSpiral,
    nextCoord,
    nextSquare,
    getCorners,
    getLayer,
    decrementDist,
    firstLarger,
    part2
};
