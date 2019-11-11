const MonthName = require('../if-10.js');

QUnit.test("ЗАДАЧА 10. Месяц по числу", function(assert){
	assert.deepEqual(MonthName(1), "январь", "Не выполнено 1");
	assert.deepEqual(MonthName(2), "февраль", "Не выполнено 2");
	assert.deepEqual(MonthName(3), "март", "Не выполнено 3");
	assert.deepEqual(MonthName(4), "апрель", "Не выполнено 4");
	assert.deepEqual(MonthName(5), "май", "Не выполнено 5");
	assert.deepEqual(MonthName(6), "июнь", "Не выполнено 6");
	assert.deepEqual(MonthName(7), "июль", "Не выполнено 7");
	assert.deepEqual(MonthName(8), "август", "Не выполнено 8");
	assert.deepEqual(MonthName(9), "сентябрь", "Не выполнено 9");
	assert.deepEqual(MonthName(10), "октябрь", "Не выполнено 10");
	assert.deepEqual(MonthName(11), "ноябрь", "Не выполнено 11");
	assert.deepEqual(MonthName(12), "декабрь", "Не выполнено 12");
	assert.deepEqual(MonthName(13), "", "Не выполнено 13");
  
  }
);
