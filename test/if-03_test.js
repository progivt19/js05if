const f = require('../if-03.js');

QUnit.test("ЗАДАЧА 03. f(a, b, c, d) = min(max(a, b), max(c, d))", function(assert){
	assert.deepEqual(f(0,10, -4,12),10, "Не выполнено f(0,10, -4,12) === 10")
	assert.deepEqual(f( 1, 2, 3, 4), 2, "Не выполнено f(1, 2, 3, 4) === 1")
	assert.deepEqual(f(-1, 0,-1, 2), 0, "Не выполнено f(-1, 0, -1, 2) === 0")
	assert.deepEqual(f(-2, 2, -3, -5),-3, "Не выполнено f(-2,-2, -2, -5) === -3")
	assert.deepEqual(f( 0, 0, 0, 0), 0, "Не выполнено f(0, 0, 0, 0) === 0")
});
