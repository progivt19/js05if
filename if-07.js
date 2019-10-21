function S(x1, y1, x2, y2, x3, y3){
    var coordinateX = [x1, x2, x3];
    var coordinateY = [y1, y2, y3];
    var sides = [];
    var count = 0;
    for (var i = 0; i < 3; i++){
        if(i != 2)
            sides.push(distance(coordinateX[i], coordinateY[i], coordinateX[i+1], coordinateY[i+1]));
        else
            sides.push(distance(coordinateX[i], coordinateY[i], coordinateX[0], coordinateY[0]));
    }
    if(sides[0] == sides[1] | sides[1] == sides [2] | sides[0] == sides[2])
        return Math.abs(delta(x1, y1, x2, y2, x3, y3)) / 2;
    else
        return -1;
}

function delta(x1, y1, x2, y2, x3, y3){
    return ((x1 - x3) * (y2 - y3)) - ((y1 - y3) * (x2 - x3));
}

function distance(ax, ay, bx, by){
    return Math.sqrt(((bx - ax)*(bx - ax))+((by - ay)*(by - ay)));
}

module.exports = S;