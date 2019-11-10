const WeekdayName = require('../if-11.js');

QUnit.test("ЗАДАЧА 11. Написать функцию WeekdayName(n), которая по целому числу n, дает номер дня", function(assert){
	assert.deepEqual(WeekdayName(1), "Monday",    "Не выполнено WeekdayName(0) === Monday");
	assert.deepEqual(WeekdayName(2), "Tuesday",   "Не выполнено WeekdayName(0) === Tuesday");
	assert.deepEqual(WeekdayName(3), "Wednesday", "Не выполнено WeekdayName(0) === Wednesday");
	assert.deepEqual(WeekdayName(4), "Thursday",  "Не выполнено WeekdayName(0) === Thursday");
	assert.deepEqual(WeekdayName(5), "Friday",    "Не выполнено WeekdayName(0) === Friday");
	assert.deepEqual(WeekdayName(6), "Saturday",  "Не выполнено WeekdayName(0) === Saturday");
	assert.deepEqual(WeekdayName(7), "Sunday",    "Не выполнено WeekdayName(0) === Sunday");
	assert.deepEqual(WeekdayName(8), "",          "Не выполнено WeekdayName(0) ===");
	assert.deepEqual(WeekdayName(-23), "",        "Не выполнено WeekdayName(0) ===");
	assert.deepEqual(WeekdayName(228), "",        "Не выполнено WeekdayName(0) ===");
  }
);
