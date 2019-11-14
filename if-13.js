//S(x1, y1, x2, y2, x3, y3)

function S(x1, y1, x2, y2, x3, y3){

	var a = Math.sqrt( (Math.pow(x2 - x1), 2) + (Math.pow(y2 - y1), 2) );
	var b = Math.sqrt( (Math.pow(x2 - x3), 2) + (Math.pow(y2 - y3), 2) );
	var c = Math.sqrt( (Math.pow(x1 - x3), 2) + (Math.pow(y1 - y3), 2) );


	if Math.pow(a, 2) + Math.pow(b, 2) <= (Math.pow(c, 2)) / 2 {
		return "true" 
		else return "false";
	}

}

module.exports = S;