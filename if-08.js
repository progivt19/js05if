//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(x1,y1,x2,y2,x3,y3){
     var a=(Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)));
     var b=(Math.sqrt((x3-x2)*(x3-x2)+(y3-y2)*(y3-y2)));
     var c=(Math.sqrt((x1-x3)*(x1-x3)+(y1-y3)*(y1-y3)));
     var p=(a*b*c)/2;
     var s=Math.sqrt(p*(p-a)*(p-b)*(p-c));
    if ((a>c && a>b) && (a*a>b*b+c*c)) {
         return s;}
    else {
         return -1;}
    if ((b>a && b>c) && (b*b>a*a+c*c)){
         return s;}
    else{
         return -1;}
    if ((c>a && c>b) && (c*c>a*a+b*b)){
         return s;}
    else{
         return -1;}
}

module.exports = f;