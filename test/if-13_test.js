const f = require('../if-13.js');

QUnit.test("ЗАДАЧА 13. S(x1, y1, x2, y2, x3, y3)", function(assert){
	assert.deepEqual(f( 2, 3, 2, 7, 6, 7), "true", "Не выполнено f( 2, 3, 2, 7, 6, 7) === true")
	assert.deepEqual(f( 2, 3, 2, 7, 9, 9), "false", "Не выполнено f( 2, 3, 2, 7, 9, 9) === false")
	assert.deepEqual(f( 0, 0, 0, 1, 1, 1), "true", "Не выполнено f( 0, 0, 0, 1, 1, 1) === true")
	assert.deepEqual(f( 0, 0, 0, 1, 1, 100), "false", "Не выполнено f( 0, 0, 0, 1, 1, 100) === false")
});