//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

//X4(x1, y1, x2, y2, x3, y3) и Y4(x1, y1, x2, y2, x3, y3)

function X4(x1, y1, x2, y2, x3, y3){
	if((x2 > x1 || x2 < x1) && (y3 > y2 || y3 < y2)){
		return x1;
	}
	if((x2 == x1) && (x3 > x2 || x3 < x2)){
		return x3;
	}
}

module.exports = X4;

function Y4(x1, y1, x2, y2, x3, y3){
	if(X4(x1, y1, x2, y2, x3, y3) == x1){
		Y4 = y3;
		return [X4(x1, y1, x2, y2, x3, y3), Y4];
	}
	if(X4(x1, y1, x2, y2, x3, y3) == x3){
		Y4 = y1;
		return [X4(x1, y1, x2, y2, x3, y3), Y4]
	}
}

module.exports = Y4;