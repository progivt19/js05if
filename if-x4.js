//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function S(x1,y1,x2,y2,x3,y3)
{
	var a = Math.sqrt((x2-x1)^2 + (y2-y1)^2);
	var b = Math.sqrt((x3-x2)^2 + (y3-y2)^2);
	var c = Math.sqrt((x3-x1)^2 + (y3-y1)^2);
	var d = 0;
	if (a == b) {
		d = Math.sqrt(a*a+b*b);
		if (d = c*Math.sqrt(2)) {
			return true;
		}
	}
	else if (a == c) {
		d = Math.sqrt(a*a+c*c);
		if (d = b*Math.sqrt(2)) {
			return true;
		}
	}
	else if (b == c) {
		d = Math.sqrt(b*b+c*c);
		if (d = a*Math.sqrt(2)) {
			return true;
		}	
	}
	return false;
}


module.exports = S;
