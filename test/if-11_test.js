const f = require('../if-11.js');

QUnit.test("ЗАДАЧА 11. WeekdayName(n)", 
  function(assert){
	assert.deepEqual(f(3), "Среда", "Не выполнено WeekdayName(n) === Среда");
	assert.deepEqual(f(5), "Пятница", "Не выполнено WeekdayName(n) === Пятница");
	assert.deepEqual(f(-4), "", "Не выполнено WeekdayName(n) === ");
	assert.deepEqual(f(18), "", "Не выполнено WeekdayName(n) === ");
  }
);
