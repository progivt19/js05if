
 function f( a, b, c, d){
	var min, max
 a1 =  Math.abs(a), 
 b1 =  Math.abs(b),
 c1 =  Math.abs(c),
 d1 =  Math.abs(d);
	if (a1 <=  b1)
 min = a1;
	else
 min =  b1;
	
	if (c1 <=  d1)
 max = d1;
	else
 max = c1;

	if (max >= min)
		return max;
	else
		return min;

}
module.exports = f;
 