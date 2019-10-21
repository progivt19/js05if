//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(k, b, r){
	let d = 4 * (b * b * r * r - k * k + r * r);
	if (d < 0){
		return 0;
	}
	else if (d == 0){
		return 1;
	}
	else{
		return 2;
	}
}

module.exports = f;