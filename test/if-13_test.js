const f = require('../if-13.js');

QUnit.test("ЗАДАЧА 13. S(x1, y1, x2, y2, x3, y3)", function(assert){
	assert.deepEqual(f( 0, 0, 0, 3, 3, 3), "true", "Не выполнено f( 0, 0, 0, 3, 3, 3) === true")
	assert.deepEqual(f( 0, 0, 0, 3, 4, 4), "false", "Не выполнено f( 0, 0, 0, 3, 4, 4) === false")
	assert.deepEqual(f( 1, 2, 1, 6, 5, 6), "true", "Не выполнено f( 1, 2, 1, 6, 5, 6) === true")
	assert.deepEqual(f( 1, 2, 1, 6, 5, 8), "false", "Не выполнено f( 1, 2, 1, 6, 5, 8) === false")
});
