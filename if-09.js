//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function S(x1,y1,x2,y2,x3,y3) {
	let a = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
	let b = Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2))
	let c = Math.sqrt(Math.pow(x2 - x3, 2) + Math.pow(y2 - y3, 2))
	let p = (a+b+c)/2
	if (a*a >= b*b + c*c || b*b >= a*a + c*c || c*c >= a*a + b*b)
		return Math.round(Math.sqrt(p*(p-a)*(p-b)*(p-c)))
	else
		return -1

}

module.exports = S;