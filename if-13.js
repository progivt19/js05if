import './if-05';

function S(x1, y1, x2, y2, x3, y3) {
    let a = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    let b = Math.sqrt((x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3));
    let c = Math.sqrt((x3 - x1) * (x3 - x1) + (y3 - y1) * (y3 - y1));
    return (a === b && h(c, a, b) === c / 2) || (b === c && h(a, b, c) === a / 2) || (c === a && h(b, c, a) === b / 2);
}

module.exports = S;