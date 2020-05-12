function h(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        let p = (a + b + c) / 2;
        return 2 / a * Math.sqrt(p * (p - a) * (p - b) * (p - c));
    }
    return -1;
}

module.exports = h;