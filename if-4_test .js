const f = require('../if-10.js');

QUnit.test("ЗАДАЧА 4.f(a, b, c, d) = max{min{|a|,|b|}, max{|c|,|d|}}", function(assert){
	assert.deepEqual(f(5, 2, 3, 4),4, "Не выполнено f(5, 2, 3, -4) === max {2,4} === 4")
	assert.deepEqual(f(2, 5, -4, 3),4, "Не выполнено f(2, 5, -4, 3) === max {2,4} ===4")
	assert.deepEqual(f(-5, 2, 4, 4),4, "Не выполнено f(-5, 2, 4, 4) === max {2,4} ===4")
	assert.deepEqual(f(-5,-6, -3, -4),-5, "Не выполнено f(-5, -6, -3, -4) === max {5,4} ===5")
	assert.deepEqual(f(-6, -5, -3, -4),5, "Не выполнено f(-6, -5, -3, -4) === max {5,4} ===5")
	assert.deepEqual(f(-5, -5, -3, -4),5, "Не выполнено f(-5, -5, -3, -4) === max {5,4} ===5")
});
