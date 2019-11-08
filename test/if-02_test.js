const f = require('../if-06.js');

QUnit.test("ЗАДАЧА 06. f(k, b, R) возвращает количества общих точек y = kx + b и y^2 + x^2 = R^2", function(assert){
	assert.deepEqual(f( 0, 0, 0), 1, "Не выполнено f( 0, 0, 0) == 1")
	assert.deepEqual(f(2, 3, 4), 2, "Не выполнено f(2, 3, 4) == 2")
	assert.deepEqual(f(1, 55, -2), 0, "Не выполнено f(1, 55, -2) == 0")
	assert.deepEqual(f( 2, 0, 23), 2, "Не выполнено f( 2, 0, 23) == 2")
	assert.deepEqual(f(-1, 32, 0), 0, "Не выполнено f(-1, 32, 0) == 0")
	assert.deepEqual(f(2, 0, 0), 1, "Не выполнено f(2, 0, 0) == 1")
});