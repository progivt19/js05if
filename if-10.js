//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function MonthName(n) {
  var месяц;
  switch (n) {
    case 1: месяц = "январь"; break;
    case 2: месяц = "февраль"; break;
    case 3: месяц = "март"; break;
    case 4: месяц = "апрель"; break;
    case 5: месяц = "май"; break;
    case 6: месяц = "июнь"; break;
    case 7: месяц = "июль"; break;
    case 8: месяц = "август"; break;
    case 9: месяц = "сентябрь"; break;
    case 10: месяц = "октябрь"; break;
    case 11: месяц = "ноябрь"; break;
    case 12: месяц = "декабрь"; break;
    default: месяц = ""; break;
  }
  return месяц;
}
module.exports = MonthName;