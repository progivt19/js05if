//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

var m = Math;

function f(a, b, c, d){
    var min = null;
    var max = null;

    if (m.abs(a) < m.abs(b))
        min = m.abs(a);
    else
        min = m.abs(b);

    if (m.abs(c) > m.abs(d))
        max = m.abs(c);
    else
        max = m.abs(d);
    
    if (max > min)
        return max;
    else
        return min;
}

module.exports = f;