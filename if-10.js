//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

let MonthName1 = 'Январь';
let MonthName2 = 'Февраль';
let MonthName3 = 'Март';
let MonthName4 = 'Апрель';
let MonthName5 = 'Май';
let MonthName6 = 'Июнь';
let MonthName7 = 'Июль';
let MonthName8 = 'Август';
let MonthName9 = 'Сентябрь';
let MonthName10 = 'Октябрь';
let MonthName11 = 'Ноябрь';
let MonthName12 = 'Декабрь';

function f(n) {
	switch (n) {
		case 1:
			console.log(MonthName1);
			break;
		case 2:
			console.log(MonthName2);
			break;
		case 3:
			console.log(MonthName3);
			break;
		case 4:
			console.log(MonthName4);
			break;
		case 5:
			console.log(MonthName5);
			break;
		case 6:
			console.log(MonthName6);
			break;
		case 7:
			console.log(MonthName7);
			break;
		case 8:
			console.log(MonthName8);
			break;
		case 9:
			console.log(MonthName9);
			break;
		case 10:
			console.log(MonthName10);
			break;
		case 11:
			console.log(MonthName11);
			break;
		case 12:
			console.log(MonthName12);
			break;
		default:
			console.log("");
	}
}

module.exports = f;