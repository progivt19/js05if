//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(a,b,c,d){
    var k
    var l
    if (a>b){
    	k=a;
    }else{
    	k=b;
    }
    if (c>d){
    	l=c;
    }
    else{
    	l=d;
    }
    if (k>l){
    	return l;
    }
    else{
    	return k;
    }
    
}

module.exports = f;