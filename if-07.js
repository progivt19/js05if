//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию


function S(x1,y1,x2,y2,x3,y3){
	var a = Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
    var b = Math.sqrt((x1-x3)*(x1-x3)+(y1-y3)*(y1-y3));
    var c = Math.sqrt((x3-x2)*(x3-x2)+(y3-y2)*(y3-y2));
    if (a==b){
    	return c/4*Math.sqrt(4*a*b-c*c);
    } else if (b==c){
    	return a/4*Math.sqrt(4*b*c-a*a);
    } else if (a==c){
    	return b/4*Math.sqrt(4*a*c-b*b);
    } else {
    	return 1;
    }
}

module.exports = S;