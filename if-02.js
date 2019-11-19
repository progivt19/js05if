//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(a,b,c,d){
if (c<=a && a<=b)
	return a;
if(d<=a && a<=b)
	return a;
if(c<=b && b<=a)
	return b;
if(d<=b && b<=a)
	return b;
if(a<=c && c<=d)
	return c;
if(b<=c && c<=d)
	return c;
if(a<=d && d<=c)
	return d;
if(b<=d && d<=c)
	return d;
}

module.exports = f;