const f = require('../if-03.js');

QUnit.test("ЗАДАЧА 03. f(a,b,c,d)=min(max(a,b), max(c,d)", function(assert){
	assert.deepEqual(f( 1, 2, 3, 4), 2, "Не выполнено")
	assert.deepEqual(f(-1, -2, -3, -4), -3, "Не выполнено")
	assert.deepEqual(f(8, 6, 4, 2), 4, "Не выполнено")
	assert.deepEqual(f( 2, 8, 4, 6), 6, "Не выполнено")
	assert.deepEqual(f(2, 6, 8, 4), 6, "Не выполнено")
	assert.deepEqual(f(2, 2, 2, 2), 2, "Не выполнено")
	assert.deepEqual(f(2, 2, 4, 4), 2, "Не выполнено")
	assert.deepEqual(f(-2, -2, -2, -2), -2, "Не выполнено")
	assert.deepEqual(f(-2, -2, -4, -4), -4, "Не выполнено")
});
