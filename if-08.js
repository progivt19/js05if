//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(x1, y1, x2, y2, x3, y3){
	var opr = ((x1 - x3) * (y2 - y3)) - ((x2 - x3) * (y2 - y3));
	var ab = Math.sqrt( ((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)) );
	var ac = Math.sqrt( ((x1 - x3) * (x1 - x3)) + ((y1 - y3) * (y1 - y3)) );
	var bc = Math.sqrt( ((x3 - x2) * (x3 - x2)) + ((y3 - y2) * (y3 - y2)) );
	if( (ab + ac > bc || ab + bc > ac || ac + bc > ab) && ((ab * ab) + (ac * ac) > (bc * bc) || (ab * ab) + (bc * bc) > (ac & ac) || (ac *ac) + (bc * bc) > (ab * ab)) ) {
		return opr * 0.5;
	}else{
		return -1;
	}
}

module.exports = f;