//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(a, b, c, d){
	var num1, num2;
	if(a < b)
		num1 = a;
	else
		num1 = b;
	if(c < d)
		num2 = c;
	else
		num2 = d;
	if(num1 > num2)
		return num1;
	else
		return num2;
}
module.exports = f;