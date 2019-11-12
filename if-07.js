//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function s(x1,y1,x2,y2,x3,y3){
	var a = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2));
	var b = Math.sqrt(Math.pow(x2-x3,2) + Math.pow(y2-y3,2));
	var c = Math.sqrt(Math.pow(x3-x1,2) + Math.pow(y3-y1,2));

if ((a == b || b == c || c == a)); {

	var p = (a+b+c)/2;

	return Math.floor(Math.sqrt (p*(p-a)*(p-b)*(p-c)));
}else{ 
	return -1;
  }
}

 module.exports = s;
