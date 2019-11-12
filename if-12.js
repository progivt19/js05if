//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function digitName(n){
	var result = n;
	switch (result) {
		case 0: result =("ZERO");
            break;
        case 1: result = ("ONE");
			break;
		 case 2: result = ("TWO");
            break;
        case 3: result = ("THREE");
            break;  
        case 4: result = ("FOUR");
			break;
        case 5: result = ("FIVE");
            break;
        case 6: result = ("SIX")
			break;
        case 7: result = ("SEVEN");
            break;
		case 8: result = ("EIGHT");
			break;
		case 9: result = ("NINE");
		break;
        default: result = ("ERROR");
            break;
    }
    return result;
}

module.exports = digitName;