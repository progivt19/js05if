const WeekdayName = require('../if-11.js');

QUnit.test("ЗАДАЧА 11. WeekdayName(n) = Дни в неделе",
  function(assert){
	assert.deepEqual(WeekdayName(1), "понедельник", "Не выполнено WeekdayName(1) === понедельник");
	assert.deepEqual(WeekdayName(2), "вторник", "Не выполнено WeekdayName(2) === вторник");
	assert.deepEqual(WeekdayName(3), "среда", "Не выполнено WeekdayName(3) === среда");
	assert.deepEqual(WeekdayName(4), "четверг", "Не выполнено WeekdayName(4) === четверг");
	assert.deepEqual(WeekdayName(5), "пятница", "Не выполнено WeekdayName(5) === пятница");
	assert.deepEqual(WeekdayName(6), "суббота", "Не выполнено WeekdayName(6) === суббота");
	assert.deepEqual(WeekdayName(7), "воскресенье", "Не выполнено WeekdayName(7) === воскресенье");
	assert.deepEqual(WeekdayName(24), "", "Не выполнено WeekdayName(24) === ");
  }
);
