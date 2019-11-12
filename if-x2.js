//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию
//6 zadanie
function f(k, b, R){
	var D;
	D = (4*k*k*b*b)-4*(k*k+1)*(b*b-R*R);
	if (D === 0) return 1;
	if (D > 0) return 2;
	if (D < 0) return 0;
}

module.exports = f;
