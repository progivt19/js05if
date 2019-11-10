//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(a, b, c, d){
<<<<<<< HEAD
	if ((a<=b) && (c<=d) && (a>=c)){
		return a
	}
	if ((a<=b) && (c<=d) && (a<=c)){
		return c
	}
	if ((a<=b) && (c>=d) && (a>=d)){
		return a
	}
	if ((a<=b) && (c>=d) && (a<=d)){
		return d
	}
	if ((a>=b) && (c<=d) && (b>=c)){
		return b
	}
	if ((a>=b) && (c<=d) && (b<=c)){
		return c
	}
	if ((a>=b) && (c>=d) && (b>=d)){
		return b
	}
	if ((a>=b) && (c>=d) && (b<=d)){
		return d
	}
}
=======
	if (a<b) & (c<d) & (a>c){
		return a
	}
	if (a<b) & (c<d) & (a<c){
		return c
	}
	if (a<b) & (c>d) & (a>d){
		return a
	}
	if (a<b) & (c>d) & (a<d){
		return d
	}
	if (a>b) & (c<d) & (b>c){
		return b
	}
	if (a>b) & (c<d) & (b<c){
		return c
	}
	if (a>b) & (c>d) & (b>d){
		return b
	}
	if (a>b) & (c>d) & (b<d){
		return d
	}
>>>>>>> fab6b87dfa5e6e2ab278116e2ba9bd293b78c7a1
module.exports = f;