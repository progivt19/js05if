var a1=-1000; var b1=-2000; var c1=-3000;
function X4(x1,y1,x2,y2,x3,y3){
	if ( max_length(x1,y1,x2,y2,x3,y3)===a1)
		return x1+x2-x3;
	if ( max_length(x1,y1,x2,y2,x3,y3)===b1)
		return x1+x3-x2;
	if ( max_length(x1,y1,x2,y2,x3,y3)===c1)
		return x2+x3-x1;
}

function Y4(x1,y1,x2,y2,x3,y3){
	if ( max_length(x1,y1,x2,y2,x3,y3)===a1)
		return y1+y2-y3;
	if ( max_length(x1,y1,x2,y2,x3,y3)===b1)
		return y1+y3-y2;
	if ( max_length(x1,y1,x2,y2,x3,y3)===c1)
		return y2+y3-y1;
}

function max_length(x1,y1,x2,y2,x3,y3) {
	var a = Match.sqrt ((x1-x2)*(x1-x2)*(y1-y2)*(y1-y2));
	var b = Match.sqrt ((x1-x3)*(x1-x3)*(y1-y3)*(y1-y3));
	var c = Match.sqrt ((x3-x2)*(x3-x2)*(y3-y2)*(y3-y2));
	
	if (a>=b && a>=c)
	return a1;
	if (b>=a && b>=c)
	return b1;
	if (c>=a && c>=b)
	return c1;
}

function XY(x1,y1,x2,y2,x3,y3) {
	return "x4="+X4(x1,y1,x2,y2,x3,y3)+"y4="+Y4(x1,y1,x2,y2,x3,y3);
}

module.exports = XY;