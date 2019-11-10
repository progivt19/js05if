// Пример функции - задание 1
// f(x,y,z) = min(x+y+z, xyz, xy+z)

function f(a, b, c, d){
	// max(min(a, b), min(c, d))
	
	minAB = null
	minCD = null

	if (a < b) {
		minAB = a
	}
	else minAB = b

	if (c < d) {
		minCD = c
	}
	else minCD = d

	if (minAB > minCD) return minAB
	else return minCD
}

module.exports = f;