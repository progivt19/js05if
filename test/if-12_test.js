const digitName = require('../if-12.js');

QUnit.test("ЗАДАЧА 12. digitName(n)", function(assert){
	assert.deepEqual(digitName(5),"FIVE", "Не выполнено digitName(5) === FIVE")
	assert.deepEqual(digitName(0),"ZERO", "Не выполнено digitName(0) === ZERO")
	assert.deepEqual(digitName(8),"EIGHT", "Не выполнено digitName(8) === EIGHT")
	assert.deepEqual(digitName(-2),"ERROR", "Не выполнено digitName(-2) === ERROR")
	assert.deepEqual(digitName(2),"TWO", "Не выполнено digitName(2) === TWO")
	assert.deepEqual(digitName(13),"ERROR", "Не выполнено digitName(13) === ERROR")
});
