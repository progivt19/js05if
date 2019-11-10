// Пример функции - задание 1
// f(x,y,z) = min(x+y+z, xyz, xy+z)

function S(x1, y1, x2, y2, x3, y3){
	// тр-к S(x1, y1, x2, y2, x3, y3) return S||-1

	var a = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1))
	var b = Math.sqrt((x3-x2)*(x3-x2) + (y3-y2)*(y3-y2))
	var c = Math.sqrt((x3-x1)*(x3-x1) + (y3-y1)*(y3-y1))

	if (a == 0 || b == 0 || c == 0) {
		return -1
	}

	cosCAB = b*b + c*c - a*a
	cosABC = a*a + c*c - b*b
	cosACB = a*a + b*b - c*c

	if (cosCAB > 0 && cosABC > 0 && cosACB > 0) {
		return (1/2)*b*c*Math.sin(Math.acos(cosCAB/(2*b*c)))
	}
	else return -1
}

module.exports = S;