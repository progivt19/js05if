//Написатьфункциюf(a,b,c,d)=max(min(|a|,|b|),max(|c|,|d|))
function f(a, b, c, d) {
    let min = Math.abs(a);
    if (Math.abs(b) < min) min = Math.abs(b);
    let max = Math.abs(c);
    if (Math.abs(d) > max) max = Math.abs(d);
    if (min > max) max = min;
    return max;
}

module.exports = f;