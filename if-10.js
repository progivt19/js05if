//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function MonthName(f){
	
	switch(f) {
		case 1:
		  name='январь'
		  break;
		case 2:
		  name='февраль'
		  break;
		case 3:
		  name='март'
		  break;
		case 4:
		  name='апрель'
		  break;
		case 5:
		  name='май'
		  break;
		case 6:
		  name='июнь'
		  break;
		case 7:
		  name='июль'
		  break;
		case 8:
		  name='август'
		  break;
		case 9:
		  name='сентябрь'
		  break;
		case 10:
		  name='октябрь'
		  break;
		case 11:
		  name='ноябрь'
		  break;
		case 12:
		  name='декабрь'
		  break;
		default:return'ошибка!'
	}

return name;
	}
module.exports = MonthName;