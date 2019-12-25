//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function S(x1,y1,x2,y2,x3,y3){
	var a = Number((Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2))).toFixed(5));
	var b = Number((Math.sqrt((x1-x3)*(x1-x3)+(y1-y3)*(y1-y3))).toFixed(5));
	var c = Number((Math.sqrt((x2-x3)*(x2-x3)+(y2-y3)*(y2-y3))).toFixed(5));
	console.log(a)
	console.log(b)
	console.log(c)
	if (a>b && a>c) {
		if (a ==  Number((Math.sqrt(2)*b).toFixed(5))) {
			return 'true';
		}
		else {
			return 'false';
		}
	}
	else if (b>a && b>c) {
		if (b == Number((Math.sqrt(2)*a).toFixed(5))) {
			return 'true';
		}
		else {
			return 'false';
		}
	}
	else if (c>a & c>b) {
		if (c == Number((Math.sqrt(2)*a).toFixed(5))) {
			return 'true';
		}
		else {
			return 'false';
		}
	}
	else{
		return 'false'
	}
}

module.exports = S;