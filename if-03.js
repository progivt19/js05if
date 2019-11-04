//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f (a, b, c, d) {
	if (a<b && c<d) { // Здесь рассматриваем b и d
		if (b<d)
			return b
		else return d
	}
	if (a>b && c>d) { // Здесь рассматриваем a и c
		if (a<c)
			return a
		else return c
	}
	if (a<b && c>d) {
		if (b<c) 
			return b
		else return c
	}
	if (a==b && c==d) {
		if (c==a)
			return a
		if (a<c)
			return a
		else return c
	}
}

module.exports = f;