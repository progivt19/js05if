//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(a, b, c, d){
    if(minab(a, b) > mincd(c, d))
        return minab(a, b);
    else
        return mincd(c, d);
}

function minab(a, b){
    if(a < b)
        return a;
    else
        return b;
}
function mincd(c, d){
    if(c < d)
        return c;
    else
        return d;
}

module.exports = f;