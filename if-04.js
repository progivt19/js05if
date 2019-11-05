//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(a, b, c, d){
	max1 = 0;
	min = 0;
	max2 = 0;
	a= Math.abs(a);
	b= Math.abs(b);
	c= Math.abs(c);
	d= Math.abs(d);
	if (a<=b){
		min=a;
		}else{
		min=b;
	}
	if (c>=d){
		max1=c;
		}else{
		max1=d;
	}
	if (min>=max1){
		max2=min;
		}else{
		max2=max1;
	}
	return max2;
}

module.exports = f;