//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function X4(x1,y1,x2,y2,x3,y3) {
	var W = "It's not a rectangle"
	var ba1 = x1-x2; var ba2 = y1-y2; // Координаты стороны ВА
	var bc1 = x3-x2; var bc2 = y3-y2; // Координаты стороны ВС

	var balenght = Math.sqrt (ba1*ba1 + ba2*ba2) // Длина стороны BA
	var bclenght = Math.sqrt (bc1*bc1 + bc2*bc2) // Длина стороны ВС

	var cosA = ba1*bc1 + ba2*bc2 / balenght*bclenght
	if (cosA==0) {
		var Dx = x1+(x3-x2)
		return Dx
	} else return W
}

function Y4(x1,y1,x2,y2,x3,y3) {
	var I = "It's not a rectangle"
	var ba1 = x1-x2; var ba2 = y1-y2; // Координаты стороны ВА
	var bc1 = x3-x2; var bc2 = y3-y2; // Координаты стороны ВС

	var balenght = Math.sqrt (ba1*ba1 + ba2*ba2) // Длина стороны BA
	var bclenght = Math.sqrt (bc1*bc1 + bc2*bc2) // Длина стороны ВС

	var cosA = ba1*bc1 + ba2*bc2 / balenght*bclenght
	if (cosA==0) {
		var Dy = y1+(y3-y2)
		return Dy
	} else return I
}
module.exports = [X4,Y4];