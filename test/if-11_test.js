const WeekdayName = require('../if-x3.js');

QUnit.test("ЗАДАЧА 11. WeekdayName(n)", 
   function(assert){
	assert.deepEqual(WeekdayName(1), "Понедельник", "Не выполнено WeekdayName(1) === Понедельник");
	assert.deepEqual(WeekdayName(2), "Вторник", "Не выполнено WeekdayName(2) === Вторник");
	assert.deepEqual(WeekdayName(3), "Среда", "Не выполнено WeekdayName(3) === Среда");
	assert.deepEqual(WeekdayName(4), "Четверг", "Не выполнено WeekdayName(4) === Четверг");
	assert.deepEqual(WeekdayName(5), "Пятница", "Не выполнено WeekdayName(5) === Пятница");
	assert.deepEqual(WeekdayName(6), "Суббота", "Не выполнено WeekdayName(6) === Суббота");
	assert.deepEqual(WeekdayName(7), "Воскресенье", "Не выполнено WeekdayName(7) === Воскресенье");
  }
);