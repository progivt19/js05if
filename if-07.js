//TODO: S(x1,y1,x2,y2,x3,y3)
//TODO: 1,1,1,3,3,3

function S(x1,y1,x2,y2,x3,y3){
	var Sq = 0 // Площадь
	var w = -1
	var a1 = x2-x1; var a2 = y2-y1; // Координаты стороны АВ
	var b1 = x3-x2; var b2 = y3-y2; // Координаты стороны ВС
	var c1 = x3-x1; var c2 = y3-y1; // Координаты стороны АС
	
	var ab = Math.sqrt (a1*a1 + a2*a2) // Длина стороны AB
	var bc = Math.sqrt (b1*b1 + b2*b2) // Длина стороны ВС
	var ac = Math.sqrt (c1*c1 + c2*c2) // Длина стороны АС

	var p = 1/2 * (ab+bc+ac);
	if (ab==bc) {
		Sq = Math.sqrt(p*(p-ab)*(p-bc)*(p-ac))
		return Sq
	} else return w
}

module.exports = S;