//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(a, b, c, d){
	a = Math.abs(a);
	b = Math.abs(b);
	c = Math.abs(c);
	d = Math.abs(d);
	var min1;
	var max2;

	if(a < b || a == b){
		min1 = a;
	}
	if(a > b){
		min1 = b;
	}
	if(c > d || c == d){
		max2 = c;
	}
	if(c < d){
		max2 = d;
	}
	if(min1 > max2 || min1 == max2){
		return min1;
	}
	if(min1 < max2){
		return max2;
	}
}

module.exports = f;
