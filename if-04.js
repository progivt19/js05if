 function f(a, b, c, d){

 	if (a < b) min = a
 		else min = b
 if (c > d) max1 = c
 	else max1 = d
 if (min > max1) max = min
 else max = max1	
return max	

}
module.exports = f;
 