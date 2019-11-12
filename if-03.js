//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(a, b, c, d){
	var max1;
	var max2;

	if(a < b || a == b){
		max1 = b;
	}
	if(a > b){
		max1 = a;
	}
	if(c > d || c == d){
		max2 = c;
	}
	if(c < d){
		max2 = d;
	}
	if(max1 > max2 || max1 == max2){
		return max2;
	}
	if(max1 < max2){
		return max1;
	}
}

module.exports = f;
