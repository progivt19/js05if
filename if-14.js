var vectorA = [0, 0];
var vectorB = [0, 0];
var ic = true;

function X4(x1, y1, x2, y2, x3, y3){
    if((x2-x1)*(x3-x1)+(y2-y1)*(y3-y1) == 0){
        return x1 + (x2-x1) + (x3-x1);
    }else if((x1-x2)*(x3-x2)+(y1-y2)*(y3-y2) == 0){
        return x2 + (x1-x2) + (x3-x2);
    }else if((x1-x3)*(x2-x3)+(y1-y3)*(y2-y3) == 0){
        return x3 + (x1-x3) + (x2-x3);
    }else{
        ic = false;
    }
}
function Y4(x1, y1, x2, y2, x3, y3){
    if((x2-x1)*(x3-x1)+(y2-y1)*(y3-y1) == 0){
        return y1 + (y2-y1) + (y3-y1);
    }else if((x1-x2)*(x3-x2)+(y1-y2)*(y3-y2) == 0){
        return y2 + (y1-y2) + (y3-y2);
    }else if((x1-x3)*(x2-x3)+(y1-y3)*(y2-y3) == 0){
        return x3 + (y1-y3) + (y2-y3);
    }else{
        ic = false;
    }
}

function f(x1, y1, x2, y2, x3, y3){
    vectorA[0] = x2 - x1;
    vectorA[1] = y2 - y1;
    vectorB[0] = x3 - x2;
    vectorB[1] = y3 - y2;
    if(ic == true){
        return 'X = '+X4(x1, y1, x2, y2, x3, y3)+', Y = '+Y4(x1, y1, x2, y2, x3, y3);
    }else{
        return 'Данные точки не могут быть вершинами прямоугольника';
    }
}

module.exports = f;