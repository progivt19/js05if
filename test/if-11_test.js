const WeekdayName = require('../if-11.js');

QUnit.test("ЗАДАЧА 11. WeekdayName(n)", 
  function(assert){
	assert.deepEqual(WeekdayName(1), 'Понедельник', "Не выполнено WeekdayName(1) === Понедельник");
	assert.deepEqual(WeekdayName(3), 'Среда', "Не выполнено WeekdayName(3) === Среда");
	assert.deepEqual(WeekdayName(5), 'Пятница', "Не выполнено WeekdayName(5) === Пятница");
	assert.deepEqual(WeekdayName(69), '', "Не выполнено WeekdayName(69) === ");
	assert.deepEqual(WeekdayName(0), '', "Не выполнено WeekdayName(0) === ");
	assert.deepEqual(WeekdayName(-13), '', "Не выполнено WeekdayName(-13) === ");
	assert.deepEqual(WeekdayName(2.5), '', "Не выполнено WeekdayName(2.5) === ");
  }
);
