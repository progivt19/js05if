var vectorA = [0, 0];
var vectorB = [0, 0];

function X4(x1, y1, x2, y2, x3, y3){
    return -vectorA[0]+x3;
}
function Y4(x1, y1, x2, y2, x3, y3){
    return -vectorA[1]+y3;
}

function f(x1, y1, x2, y2, x3, y3){
    vectorA[0] = x2 - x1;
    vectorA[1] = y2 - y1;
    vectorB[0] = x3 - x2;
    vectorB[1] = y3 - y2;
    if(cos() == 0){
        return 'X = '+X4(x1, y1, x2, y2, x3, y3)+', Y = '+Y4(x1, y1, x2, y2, x3, y3);
    }else{
        return 'Данные точки не могут быть вершинами прямоугольника';
    }
}
function cos(){
    return ((vectorA[0]*vectorB[0]) + (vectorA[1]*vectorB[1]))/(Math.sqrt(Math.pow(vectorA[0], 2) + Math.pow(vectorA[1], 2))*Math.sqrt(Math.pow(vectorB[0], 2) + Math.pow(vectorB[1], 2)));
}

module.exports = f;