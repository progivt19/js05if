//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию


function WeekDayName(n){
    switch (n) {
        case (1):
            return('Понедельник');
        case (2):
            return('Вторник');
        case (3):
            return('Среда');
        case (4):
            return('Четверг');
        case (5):
            return('Пятница');
        case (6):
            return('Суббота');
        case (7):
            return('Воскресенье');
        default:
            return ('нет такого дня');
    }

}

module.exports = WeekDayName;
