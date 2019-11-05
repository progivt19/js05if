//TODO: Николаев Сандал
//TODO: Добавьте правильные параметры
//TODO: h(a, b, c)

function h(a, b, c){
	if (a+b>c && a+c>b && b+c>a) {
		var p = (a+b+c) / 2;
		var s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
		var h = (2*s) / a;
		return h;
	}else{
		var h = -1;
		return h;
	}

}

module.exports = h;
