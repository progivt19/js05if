const f = require('../if-10.js');

QUnit.test("ЗАДАЧА 10.", function(assert){
	assert.deepEqual(monthName(1), 'январь', "Не выполнено1")
	assert.deepEqual(monthName(2),'февраль', "Не выполнено2")
	assert.deepEqual(monthName(3),'март', "Не выполнено3")
	assert.deepEqual(monthName(11), 'ноябрь', "Не выполнено11")
	assert.deepEqual(monthName(-1),'error', "Не выполнено11")
});
