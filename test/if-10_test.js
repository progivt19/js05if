const monthName = require('../if-10.js');

QUnit.test("ЗАДАЧА 10.", function(assert){
	assert.deepEqual(monthName(1),'Январь', "Не выполнено1")
	assert.deepEqual(monthName(2),'Февраль', "Не выполнено2")
	assert.deepEqual(monthName(12),'Декабрь', "Не выполненe12")
	assert.deepEqual(monthName(8),'Август', "Не выполнено8")
});
