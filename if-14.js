//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

var a1=-1000; var b1=-2000; var c1=-3000;

function X4(x1,y1,x2,y2,x3,y3){
	//для непараллельных осям координат сторонам прямоугольника
	//есть правило: x1 + x3 = x2 + x4, где точки 1 и 3 - диагональные

	if (max_length(x1,y1,x2,y2,x3,y3) == a1)
		return x1+x2-x3;
	if (max_length(x1,y1,x2,y2,x3,y3) == b1)
		return x1+x3-x2;
	if (max_length(x1,y1,x2,y2,x3,y3) == c1)
		return x2+x3-x1; 

}

function Y4(x1,y1,x2,y2,x3,y3){
	//аналогично и дли иксов
	if (max_length(x1,y1,x2,y2,x3,y3) == a1)
		return y1+y2-y3;
	if (max_length(x1,y1,x2,y2,x3,y3) == b1)
		return y1+y3-y2;
	if (max_length(x1,y1,x2,y2,x3,y3) == c1)
		return y2+y3-y1; 
}

function max_length(x1,y1,x2,y2,x3,y3){
	//нужно найти самую максимальную длину между заданными вершинами
	//чтобы вычислить диагональные точки
	var a = Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)); //длины сторон
	var b = Math.sqrt((x1-x3)*(x1-x3)+(y1-y3)*(y1-y3));
    var c = Math.sqrt((x3-x2)*(x3-x2)+(y3-y2)*(y3-y2));
    //так как другие функции не распознают локальные переменные a,b,c
    //решила создать глобальные переменные a1,b1,c1 и использовать их
    if (a>=b && a>=c)
    	return a1;  
    if (b>=a && b>=c)
    	return b1;
    if (c>=a && c>=b)
    	return c1;
}

function XY(x1,y1,x2,y2,x3,y3){
	return "x4="+X4(x1,y1,x2,y2,x3,y3)+" y4="+Y4(x1,y1,x2,y2,x3,y3);
}
//module.exports = X4;
//module.exports = Y4;
module.exports = XY;