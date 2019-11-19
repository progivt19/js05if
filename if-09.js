//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(x1,y1,x2,y2,x3,y3){
	var t=0;
var a=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2))
var b=Math.sqrt((x2-x3)*(x2-x3)+(y2-y3)*(y2-y3))
var c=Math.sqrt((x3-x1)*(x3-x1)+(y3-y1)*(y3-y1))
var p=(a+b+c)/2
console.log (p)
s=Math.sqrt(p*(p-a)*(p-b)*(p-c))
if ((a>b) && (a>c)) d = a
else if ((b>a) && (b>c)) d = b
	else d = c
		console.log (d)
if ((a+b>c) && (a+c>b) && (b+c>a))
{if (d === a) 
	if (d*d>b*b+c*c) return s;t=1
if (d === b)
	if (d*d>a*a+c*c) return s;t=1
if (d === c)
	if (d*d>a*a+b*b) return s;t=1
if (t===0) return ('-1')}
	else return ('ERROR')
}

module.exports = f;