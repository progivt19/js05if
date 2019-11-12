//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function MountName(n){
	switch(n){
		case 1:
		 return ("Январь"); break;
		case 2:
		 return ("февраль"); break;
		case 3:
		return ("март"); break;
		case 4: 
		 return ("апрель"); break;
		case 5:
		 return ("май"); break;
		case 6:
		 return ("июнь"); break;
		case 7:
		 return ("июль"); break;
		case 8:
		 return ("август"); break;
		case 9:
		 return ("сентябрь"); break;
		case 10:
		return ("октябрь"); break;
		case 11:
		 return ("ноябрь"); break;
		case 12:
		 return ("декабрь"); break;
		 default: return('')
	}
}
module.exports =MountName;