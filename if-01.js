//1 задача

function f(x,y,z) {
	
  x1 = x + y + z;
	x2 = x * y * z;
	x3 = x * y + z;
	if ((x1 <= x2) && (x3 <= x2))
		return x2;
	if ((x1 <= x3) && (x2 <= x3))
		return x3;
	if ((x2 <= x1) && (x3 <= x1))
		return x1;
}

module.exports = f;
