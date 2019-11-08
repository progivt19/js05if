var min,min1;
function f(a,b,c,d){
    if (a>b)
    	min=b;else min=a;
    if (c>d)
        min1=d;else min1=c;
     if (min>min1)
        return min;else return min1;
}

module.exports = f;
