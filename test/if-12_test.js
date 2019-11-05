const digitName = require('../if-12.js');

QUnit.test("ЗАДАЧА 12.", function(assert){
	assert.deepEqual(digitName(5),"FIVE", "Не выполнено")
	assert.deepEqual(digitName(6),"SIX", "Не выполнено")
	assert.deepEqual(digitName(8),"EIGHT", "Не выполнено")
	assert.deepEqual(digitName(1), "ONE", "Не выполнено")
	assert.deepEqual(digitName(7),"SEVEN", "Не выполнено")
	assert.deepEqual(digitName(13), "ERROR", "Не выполнено")
});
