//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

const MonthName1 = 'Январь';
const MonthName2 = 'Февраль';
const MonthName3 = 'Март';
const MonthName4 = 'Апрель';
const MonthName5 = 'Май';
const MonthName6 = 'Июнь';
const MonthName7 = 'Июль';
const MonthName8 = 'Август';
const MonthName9 = 'Сентябрь';
const MonthName10 = 'Октябрь';
const MonthName11 = 'Ноябрь';
const MonthName12 = 'Декабрь';

function f(n) {
	switch (n) {
		case 1:
			return MonthName1;
			break;
		case 2:
			return MonthName2;
			break;
		case 3:
			return MonthName3;
			break;
		case 4:
			return MonthName4;
			break;
		case 5:
			return MonthName5;
			break;
		case 6:
			return MonthName6;
			break;
		case 7:
			return MonthName7;
			break;
		case 8:
			return MonthName8;
			break;
		case 9:
			return MonthName9;
			break;
		case 10:
			return MonthName10;
			break;
		case 11:
			return MonthName11;
			break;
		case 12:
			return MonthName12;
			break;
		default:
			return "";
	}
}

module.exports = f;