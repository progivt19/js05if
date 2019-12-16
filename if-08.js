//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function h(a, b, c){

if (a+b<c || a+c<c || b+c<a || a===0 || b===0 || c===0)
return 1 ;
var p=(a+b+c)/2;
var s=Math.sqrt(p*(p-a)*(p-b)*(p-c));
return s*2/a;

}

module.exports = h;
