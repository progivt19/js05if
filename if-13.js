//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function S(x1, y1, x2, y2, x3, y3){

var d1 = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
var d2 = Math.sqrt((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2));
var d3 = Math.sqrt((x1 - x3) * (x1 - x3) + (y1 - y3) * (y1 - y3));

/* Решение неверно:
   а) например, дает неправильный ответ 
   для S(0,0,1,5,2,0); 
   б) функция должна возвращать 
   логические true/false, а не 
   строки "true"/"false" 
*/

 if (d1 === d2)
 	return "true";
 else if (d1 === d3)
 	return "true";
 else if (d2 === d3)
 	return "true";

 return "false";
}

module.exports = S;