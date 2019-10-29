//13 задача
var m = Math

function S(x1, y1, x2, y2, x3, y3){
	var a = Math.sqrt(m.pow(x2-x1, 2) + m.pow(y2-y1, 2))
	var b = Math.sqrt(m.pow(x3-x2, 2) + m.pow(y3-y2, 2))
	var c = Math.sqrt(m.pow(x3-x1, 2) + m.pow(y3-y1, 2))
	var d = 0

	if (a == b) {
		d = m.sqrt(a*a+b*b)

		if (d = c*Math.sqrt(2)) {
			return true
		}
	}
	else if (a == c) {
		d = m.sqrt(a*a+c*c)

		if (d = b*Math.sqrt(2)) {
			return true
		}
	}
	else if (b == c) {
		d = m.sqrt(b*b+c*c)

		if (d = a*m.sqrt(2)) {
			return true
		}	
	}

	return false
}

module.exports = S;