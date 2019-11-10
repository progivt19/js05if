//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(k,b,R){
	var d = k * k * R * R - b * b + R * R;
	if (d > 0){
		return 2;
	}
	else if (d === 0){
		return 1;
	}
	else if (d < 0){
		return 0;
	}
}

module.exports = f;