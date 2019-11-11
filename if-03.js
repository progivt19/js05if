//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(a,b,c,d){
	if (a>b)
		max=a;
	else 
		max=b;
	if (c>d)
		max1=c;
	else 
		max1=d;
	if (max<max1)
		return max;
	else 
		return max1;


}

module.exports = f;