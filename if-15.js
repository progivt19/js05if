//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function S(x1, y1, x2, y2,x3, y3){
    var a=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
    var b=Math.sqrt((x3-x1)*(x3-x1)+(y3-y1)*(y3-y1));
    var c=Math.sqrt((x3-x2)*(x3-x2)+(y3-y2)*(y3-y2));
if (a==b && Math.sqrt(a*a+b*b)==c)
    return true;
if (a==c && Math.sqrt(a*a+c*c)==b)
    return true;
if (c==b && Math.sqrt(b*b+c*c)==a)
    return true;
    return focus;
}

module.exports = S;
