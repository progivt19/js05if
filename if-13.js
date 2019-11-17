//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию
function f(x1, y1, x2, y2, x3, y3){
     var a = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2))
     var b = Math.sqrt(Math.pow(x3-x2, 2) + Math.pow(y3-y2, 2))
     var c = Math.sqrt(Math.pow(x3-x1, 2) + Math.pow(y3-y1, 2))
if ((x1 == x2 && y1 == y2)||(x2 == x3 && y2 == y3)||(x1 == x3 && y1 == y3)) 
	return false;

if (a != b && b != c && a != c)
return false

if (a == b)
if (c == Math.sqrt(a*a + b*b))
return true;
else 
	return false;

<<<<<<< HEAD
=======
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
>>>>>>> f450d45eb421cc02f109ba77c7fb833b4e321bb3

if (a == c)
if (b == Math.sqrt(a*a + c*c))
return true;
else 
	return false;


if (c == b) 
if (a == Math.sqrt(c*c + b*b))
return true;
else 
	return false;
}


module.exports = f;