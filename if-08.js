//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function S(x1, y1, x2, y2, x3, y3){
	a = Math.sqrt((x2-x1)^2+(y2-y1)^2);
	b = Math.sqrt((x3-x2)^2+(y3-y2)^2);
	c = Math.sqrt((x1-x3)^2+(y1-y3)^2);
	p = (a + b + c)/2;
	if (a^2 + b^2 > c^2) 
		S = Math.sqrt(p*(p-a)*(p-b)*(p-c));
	
	else S = -1;
	return S;
}

module.exports = S;
