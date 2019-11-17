//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function X4(x1, y1, x2, y2, x3, y3){
	if ((x2-x1)*(x3-x1)+(y2-y1)*(y3-y1) == 0 ){
        return x3+x2-x1;
    }
    else if ((x1-x2)*(x3-x2)+(y1-y2)*(y3-y2) == 0){
        return x3+x1-x2;
    }
    else if ((x1-x3)*(x2-x3)+(y1-y3)*(y2-y3) == 0){
        return x2+x1-x3;
    }
}
function Y4(x1, y1, x2, y2, x3, y3){
	if ((x2-x1)*(x3-x1)+(y2-y1)*(y3-y1) == 0 ){
        return y3+y2-y1;
    }
    else if ((x1-x2)*(x3-x2)+(y1-y2)*(y3-y2) == 0){
        return y3+y1-y2;
    }
    else if ((x1-x3)*(x2-x3)+(y1-y3)*(y2-y3) == 0){
        return y2+y1-y3;
    }
}

module.exports = [X4, Y4];