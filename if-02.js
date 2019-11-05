//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(a, b, c, d){
	if (a<b) & (c<d) & (a>c){
		return a
	}
	if (a<b) & (c<d) & (a<c){
		return c
	}
	if (a<b) & (c>d) & (a>d){
		return a
	}
	if (a<b) & (c>d) & (a<d){
		return d
	}
	if (a>b) & (c<d) & (b>c){
		return b
	}
	if (a>b) & (c<d) & (b<c){
		return c
	}
	if (a>b) & (c>d) & (b>d){
		return b
	}
	if (a>b) & (c>d) & (b<d){
		return d
	}
module.exports = f;