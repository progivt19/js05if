//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

var max1 = 0
var max2 = 0

function f(a,b,c,d){
    if (a > b) {
        max1 = a
    }
    else {
        max1 = b
    }
    if (c > d) {
        max2 = c
    }
    else {
        max2 = d
    }
    if ( max1 < max2 ) {
        return (max1)
    }
    else {
        return (max2)
    }
}

module.exports = f;
