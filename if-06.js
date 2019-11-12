//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function fmax(a,b,c,d){
var min1=0; 
var min2=0;

if (a<b) {min1=a} else {min1=b};
if (c<d) {min2=c} else	{min2=d};
if (min1<min2) 
	return min1
 else min2;
}

module.exports = fmax;