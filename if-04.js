//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

//f(a, b, c, d) = max(min(|a|, |b|), max(|c|, |d|))

function f(a, b, c, d){
	a = Math.abs(a);
	b = Math.abs(b);
	c = Math.abs(c);
	d = Math.abs(d);

	var ab = a + b;
	var cd = c + d;

	if(ab > cd){
		if(a > b || a == b){
			return b;
		}
		if(a < b){
			return a};		
		}
	if(ab < cd || ab == cd)
		if(c > d || c == d){
			return c;
		}
		if(c < d){
			return d;
		}
}

module.exports = f;