//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(a, b, c, d){

	var s1, s2;

	if(a > b)
		s1 = b;
	else
		s1 = a;
	

	if(c > d)
		s2 = d;
	else
		s2 = c;
	

	if (s1 > s2)
		return(s1);
	else
		return(s2);
	


}

module.exports = f;