const f = require('../if-03.js');

QUnit.test("ЗАДАЧА 03. f(a, b, c, d) = min(max(a, b), max(c, d))", function(assert){
	assert.deepEqual(f( 1, 2, 3, 4), 2, "Не выполнено f(1, 2, 3, 4) === 1")
	assert.deepEqual(f(-1, 0,-1, 2), 0, "Не выполнено f(-1, 0, -1, 2) === 0")
	assert.deepEqual(f(-2, 2, -3, -5),-3, "Не выполнено f(-2,-2, -2, -5) === -3")
	assert.deepEqual(f( 0, 0, 0, 0), 0, "Не выполнено f(0, 0, 0, 0) === 0")
	assert.deepEqual(f(-112, 123, -123, -233),-123, "Не выполнено f(-112, 123, -123, 233) === -123")
	assert.deepEqual(f(-2, -2, -3, -3), -3, "Не выполнено f(-2, -2, -3, -3) === -3")
});