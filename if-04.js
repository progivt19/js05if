//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(a, b, c, d){

	var nun1, num2;
	
	if (Math.abs(a) > Math.abs(b))
		num1 = b;
	else
		num1 = a;


	if (Math.abs(c) > Math.abs(d))
		num2 = c;
	else
		num2 = d;


	if (num1 > num2)
		return num1;
	else
		return num2;

}

module.exports = f;