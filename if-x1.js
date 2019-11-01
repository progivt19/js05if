//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(a, b, c, d){
	var ab=a+b;
	var cd=c+d;

	if(ab>cd || ab==cd){
		if(c>d || c==d){
			return c
		}
		if(c<d){
			return d
		}
	};
	if(ab<cd || ab==cd){
		if(a>b || a==b){
			return a
		}
		if(a<b){
			return b;
		}
	}
}

module.exports = f;
