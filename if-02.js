// Задание 2
// f(a, b, c, d) = max(min(a, b), min(c, d))

function f(a, b, c, d){
	var minAB = null;
	var minCD = null;

	if ( a < b )
		minAB = a;
	else 
		minAB = b;

	if ( c < d )
		minCD = c;
	else 
		minCD = d;

	if (minAB > minCD)
		return minAB;
	else 
		return minCD;
}


module.exports = f;