function f(a, b, c, d) {
    if (Math.abs(a) < Math.abs(b))
    { 
        min = Math.abs(a);}
    else {min = Math.abs(b)
            }
    if (Math.abs(c) > Math.abs(d))
    {
        max = Math.abs(c);}
    else {max = Math.abs(d)
            }
    if (min < max)
        f = max;
    else f = min;

    return f;
    
}
    module.exports = f;
