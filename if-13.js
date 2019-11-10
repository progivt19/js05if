//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function S(x1,y1,x2,y2,x3,y3){
	if (y1===y2 && ((x1===x3)||(x2===x3)) && Math.abs(x2-x1)===(Math.abs(y2-y3)||(Math.abs(y1-y3)))){
		return "true";
	}
	if (y1===y3 && ((x1===x2)||(x3===x2)) && Math.abs(x3-x1)===(Math.abs(y3-y2)||(Math.abs(y1-y2)))){
		return "true";
	}
	if (y2===y1 && ((x2===x3)||(x1===x3)) && Math.abs(x2-x1)===(Math.abs(y2-y3)||(Math.abs(y1-y3)))){
		return "true";
	}
	if (y2===y3 && ((x2===x1)||(x3===x1)) && Math.abs(x2-x3)===(Math.abs(y2-y1)||(Math.abs(y3-y1)))){
		return "true";
	}
	if (y3===y1 && ((x3===x2)||(x1===x2)) && Math.abs(x3-x1)===(Math.abs(y3-y2)||(Math.abs(y1-y2)))){
		return "true";
	}
	if (y3===y2 && ((x3===x1)||(x2===x1)) && Math.abs(x3-x2)===(Math.abs(y3-y1)||(Math.abs(y2-y1)))){
		return "true";
	}
	else{
		return "false";
	}
}

module.exports = S;