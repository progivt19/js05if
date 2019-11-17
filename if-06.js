//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(k, b, R){
	var dis;
	dis = (R * R) * (1 + k * k) - (b * b);
	if(dis > 0)
		return 2;
	else if(dis === 0)
		return 1;
	else
		return 0;
}
module.exports = f;