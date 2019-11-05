//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(a,b,c,d){
    if ((a > b) || (a = b)) {
        var min1 = b; 
    } else {
        min1 = a;
    };
    if ((c > d) || (c = d)) {
        var min2 = d;
    } else {
        min2 = c;
    }
    if ((min1 > min2) || (min1 = min2)){
        return(min1);
    } else {
        return(min2);
    }

}
module.exports = f;