const WeekdayName = require('../if-11.js');

QUnit.test("ЗАДАЧА 11.  Написать функцию WeekdayName(n), которая по целому числу n — номеру дня недели, дает название этого дня. Для n > 7 или n < 1 функция должна возвращать пустую строку", function(assert){
	assert.deepEqual(WeekdayName(1), "Понедельник", "Не выполнено WeekdayName(1) === Понедельник")
	assert.deepEqual(WeekdayName(2), "Вторник", "Не выполнено WeekdayName(2) === Вторник")
	assert.deepEqual(WeekdayName(3), "Среда", "Не выполнено WeekdayName(3) === Среда")
	assert.deepEqual(WeekdayName(4), "Четверг", "Не выполнено WeekdayName(4) === Четверг")
	assert.deepEqual(WeekdayName(5), "Пятница", "Не выполнено WeekdayName(5) === Пятница")
	assert.deepEqual(WeekdayName(6), "Суббота", "Не выполнено WeekdayName(6) === Суббота")
	assert.deepEqual(WeekdayName(7), "Воскресенье", "Не выполнено WeekdayName(7) === Воскресенье")
	assert.deepEqual(WeekdayName(8), "", "Не выполнено WeekdayName(8) === ''")
	assert.deepEqual(WeekdayName(0), "", "Не выполнено WeekdayName(0) === ''")
});
