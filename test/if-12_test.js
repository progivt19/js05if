const digitName = require('../if-12.js');

QUnit.test("ЗАДАЧА 12. Написать функцию digitName(n), которая принимает n возвращает английское название соответствующий цифры от 0 до 9 заглавными буквами, либо ERROR", function(assert){
	assert.deepEqual(digitName(0), "ZERO", "Не выполнено")
	assert.deepEqual(digitName(1), "ONE", "Не выполнено")
	assert.deepEqual(digitName(9), "NINE", "Не выполнено")
	assert.deepEqual(digitName(-1), "ERROR", "Не выполнено")
	assert.deepEqual(digitName(10), "ERROR", "Не выполнено")
});
