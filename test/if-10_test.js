const MonthName = require('../if-10.js');

QUnit.test("ЗАДАЧА 10. MonthName(n) возварщает название месяца с номером n", function(assert){
	assert.deepEqual(MonthName(1), "январь", "Не выполнено MonthName(1) == январь")
	assert.deepEqual(MonthName(2), "февраль", "Не выполнено MonthName(2) == февраль")
	assert.deepEqual(MonthName(5), "май", "Не выполнено MonthName(5) == май")
	assert.deepEqual(MonthName(3), "март", "Не выполнено MonthName(3) == март")
	assert.deepEqual(MonthName(12), "декабрь", "Не выполнено MonthName(12) == декабрь")
	assert.deepEqual(MonthName(10), "октябрь", "Не выполнено MonthName(10) == октябрь")
	assert.deepEqual(MonthName(20), "", "Не выполнено 20");
});
