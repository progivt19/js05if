//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function WeekdayName(n){
	switch(n){
		case 1:
			WeekdayName = 'Понедельник';
			break;
		case 2:
			WeekdayName = 'Вторник';
			break;
		case 3:
			WeekdayName = 'Среда';
			break;
		case 4:
			WeekdayName = 'Четверг';
			break;
		case 5:
			WeekdayName = 'Пятница';
			break;
		case 6:
			WeekdayName = 'Суббота';
			break;
		case 7:
			WeekdayName = 'Воскресенье';
			break;
		default:
			WeekdayName = '';					
	}
	return WeekdayName;
}

module.exports = WeekdayName;
