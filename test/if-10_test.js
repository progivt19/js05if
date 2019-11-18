const MonthName = require('../if-10.js');

QUnit.test("ЗАДАЧА 10.", function(assert){
	assert.deepEqual(MonthName(1),'январь','error');
	assert.deepEqual(MonthName(2),'февраль','error');
	assert.deepEqual(MonthName(3),'март','error');
	assert.deepEqual(MonthName(4),'апрель','error');
	assert.deepEqual(MonthName(13),'ошибка!','error');
  }
);