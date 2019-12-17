
function S(x1, y1, x2, y2, x3, y3) {
	var a = Math.sqrt(Math.pow(x1-x2, 2)+Math.pow(y1-y2, 2)); //12
	var b = Math.sqrt(Math.pow(x2-x3, 2)+Math.pow(y2-y3, 2)); //23
	var c = Math.sqrt(Math.pow(x1-x3, 2)+Math.pow(y1-y3, 2)); //13

	if (((a == b) && (a * Math.sqrt(2) == c)) || ((b == c) && (c * Math.sqrt(2) == a)) || ((a == c) && (a * Math.sqrt(2) == b)))
		return true;
	else
		return false;
}

module.exports = S; 