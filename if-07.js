
function f(x1, y1, x2, y2, x3, y3){
	r1 = Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)); 
	r2 = Math.sqrt((x1-x3)*(x1-x3)+(y1-y3)*(y1-y3));
	r3 = Math.sqrt((x3-x2)*(x3-x2)+(y3-y2)*(y3-y2));
	if((r1===r2)||(r1===r3)||(r2===r3)){
		if (r1===r2){
			S=r3*Math.sqrt(r1*r1-r3*r3/4)/2;
		}
		if (r1===r3){
			S=r2*Math.sqrt(r1*r1-r2*r2/4)/2;
		}
		if (r3===r2){
			S=r1*Math.sqrt(r3*r3-r1*r1/4)/2;
		}
	}else{
		S=-1;
	}
	return S;
}

module.exports = f;