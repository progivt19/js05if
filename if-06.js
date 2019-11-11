// f(k, b, R)

function f(k, b, R){
	var D = k * k * R * R - b * b + R * R;

	if (D < 0) {
		return 0;
	}
	
	if (D > 0) {
		return 2;
	}

	if (D === 0) {
		return 1;
	}
}


module.exports = f;