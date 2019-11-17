//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function X4(x1, y1, x2, y2, x3, y3){
	if(x1==x2 && x1==x3 && x2==x3){
	return "error";
	}
	if(x1==x2){
		return x3;
	}
	if(x1==x3){
		return x2;
	}
	if(x2==x3){
		return x1;
	}
	else{
		return (x1+x3-x2);
	}
}

function Y4(x1, y1, x2, y2, x3, y3){
	if(y1==y2 && y1==y3 && y2==y3){
		return "error";
	}
	if(X4(x1,y1,x2,y2,x3,y3)=="error"){
		return "error";
	}
	if(y2==y3){
		return y1;
	}
	if(y1==y2){
		return y3;
	}
	if(y1==y3){
		return y2;
	}
	else{
		return (y1+y3-y2);
	}
}

module.exports = [X4, Y4];