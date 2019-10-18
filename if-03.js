//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию
//f(a, b,c, d) = min(max(a, b), max(c, d))
function f(a,b,c,d){
	if (max(a,b)<max(c,d)) {
		return max(a,b);
	} else {
		return max(c,d);
	}
}

function max(a,b){
	if (a>b) {
		return a;
	} else {
		return b;
	}
}

function max(c,d){
	if (c>d) {
		return c;
	} else {
		return d;
	}
}


module.exports = f;
