//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function  WeekdayName(n){

	switch (n) {
		case (1):
		return "понедельник";
		break;
		case (2):
		return "вторник";
		break;
		case (3):
		return "среда";
		break;
		case (4):
		return "четверг";
		break;
		case (5):
		return "пятница";
		break;
		case (6):
		return "суббота";
		break;
		case (7):
		return "воскресенье";
		break;
		default:
	    return "";
		break;     

	}


}

module.exports = WeekdayName;