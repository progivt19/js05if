const MonthName = require('../if-10.js');

QUnit.test("ЗАДАЧА 10. Написать функцию MonthName(n), которая по целому числоу n - номеру месяца года, дает название этого месяца. Для n > 12 или n < 1 функция должна возвращать пустую строку."
  function(assert){
	assert.deepEqual(MonthName(1), "Январь", "Не выполнено MonthName(1) === Январь");
	assert.deepEqual(MonthName(2), "Февраль", "Не выполнено MonthName(2) === Февраль");
	assert.deepEqual(MonthName(3), "Март", "Не выполнено MonthName(3) === Март");
	assert.deepEqual(MonthName(4), "Апрель", "Не выполнено MonthName(4) === Апрель");
	assert.deepEqual(MonthName(11), "Ноябрь", "Не выполнено MonthName(11) === Ноябрь");
	assert.deepEqual(MonthName(12), "Декабрь", "Не выполнено MonthName(12) === Декабрь");
	assert.deepEqual(MonthName(13), "", "Не выполнено MonthName(13) === ''");
	assert.deepEqual(MonthName(0), "", "Не выполнено MonthName(0) === ''");
  }
);
