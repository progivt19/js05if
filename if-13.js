function S(x1,y1,x2,y2,x3,y3){
	var d1 =Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
	var d2 =Math.sqrt((x3-x2)*(x3-x2)+(y3-y2)*(y3-y2));
	var d3 =Math.sqrt((x1-x3)*(x1-x3)+(y1-y3)*(y1-y3));

    if (d1===d2){
	    var a=d3;
	    var b=d1;
	    var c=d2;

	    var angle = Math.acos(((b*b)+(c*c)-(a*a))/(2*b*c));
	    angle =angle.toFixed(2);
	    if (angle===(Math.PI / 2).toFixed(2))
		    return "true";
}
    else if (d1===d3)
	    var a=d2;
	    var b=d1;
	    var c=d3;

        var angle = Math.acos(((b*b)+(c*c)-(a*a))/(2*b*c));
	    angle =angle.toFixed(2);
	    if (angle===(Math.PI / 2).toFixed(2))
		    return "true";

	else if (d2===d3)
	    var a=d1;
	    var b=d2;
	    var c=d3;

        var angle = Math.acos(((b*b)+(c*c)-(a*a))/(2*b*c));
	    angle =angle.toFixed(2);
	    if (angle===(Math.PI / 2).toFixed(2))
		    return "true";

return "false"
}

module.exports = S;