//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(k,b,R){
n:=4*sqr(k)*sqr(R)-4*sqr(b)+4*sqr(R);
if (n<0 )
	return 0; 
else 
	if (n=0) return 1;
		else return 2;

}

module.exports = f;