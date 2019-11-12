//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function h(a, b, c){
  
     if (a + b > c && a + c && b + c > a) {
         var p = (a + b + c) / 2;
         return (2 / a) * (Math.sqrt(p * (p - a) * (p - b) * (p - c)))
     } 
     else {
     	return - 1;
     }
}

module.exports = h;
