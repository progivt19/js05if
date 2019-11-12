//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

//S(x1, y1, x2, y2, x3, y3)

function S(x1, y1, x2, y2, x3, y3){
	var a = [x1, y1];
	var b = [x2, y2];
	var c = [x3, y3];
	var d = -1;

	var ab = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
	var ac = Math.sqrt(((x3 - x1) * (x3 - x1)) + ((y3 - y1) * (y3 - y1)));
	var bc = Math.sqrt(((x3 - x2) * (x3 - x2)) + ((y3 - y2) * (y3 - y2)));

	if(x1 == x2 && x1 == x3 && x2 == x3){
		return d;
	}
	if(y1 == y2 && y1 == y3 && y2 == y3){
		return d;
	}
	if(x1 == y1 && x2 == y2 && x3 == y3){
		return d;
	}
	if(Math.abs(x1) == Math.abs(y1) && Math.abs(x2) == Math.abs(y2) && Math.abs(x3) == Math.abs(y3)){
		return d;
	}
	if(ab == ac){
		d = ((bc*(Math.sqrt((ab*ab)-((bc/2)*(bc/2)))))/2);
	}
	if(ab == bc){
		d = ((ac*(Math.sqrt((ab*ab)-((ac/2)*(ac/2)))))/2);
	}
	if(ac == bc){
		d = ((ab*(Math.sqrt((ac*ac)-((ab/2)*(ab/2)))))/2);
	}
	return d;
}

module.exports = S;