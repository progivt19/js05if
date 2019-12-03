function f(a,b,c,d) {
	let min1;
	let min2;
	if (a>b) {
		min1 = a;
	} 
	else {
		min1 = b;
	}
	if (c>d) {
		min2 = c;
	} 
	else {
		min2 = d;
	}
	if (min1<min2) {
		return min1;
	} 
	else {
		return min2;
	}
}
module.exports = f;