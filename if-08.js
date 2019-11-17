//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(x1,y1,x2,y2,x3,y3){

let a; let b; let c; let S = -1;

	a = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));

	b = Math.sqrt(Math.pow(x3-x2, 2) + Math.pow(y3-y2, 2));

	c = Math.sqrt(Math.pow(x3-x1, 2) + Math.pow(y3-y1, 2));

if (Math.pow(c, 2) < Math.pow(a, 2) + Math.pow(b, 2)) {

		S = (a * b) / 2;
	}

return S;

}

module.exports = f;
