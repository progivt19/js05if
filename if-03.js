//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(a, b, c, d){
	var max1 = 0 ;
	var max2 = 0;
    if (a < b)
        max1 = b;
    else
    	max1 = a;
    if (c < d)
    	max2 = d;
    else
    	max2 = c;
    if (max1 < max2) 
    	return max1;
    else
    	return max2;
}

module.exports = f;