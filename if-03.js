//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

//задание 3: написать функцию f(a, b, c, d) = min(max(a, b),  max(c, d))

function f(a, b, c, d){
	if ((a >= b) && (c >= d) && (a >= c))
		return c;
	if ((a >= b) && (c >= d) && (a < c))
		return a;

	if ((a >= b) && (c < d) && (a >= d))
		return d;
	if ((a >= b) && (c < d) && (a < d))
		return a;

	if ((a < b) && (c >= d) && (b >= c))
		return c;
	if ((a < b) && (c >= d) && (b < c))
		return b;
	
	if ((a < b) && (c < d) && (b >= d))
		return d;
	if ((a < b) && (c < d) && (b < d))
		return b;
}

module.exports = f;