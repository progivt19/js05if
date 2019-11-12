const f = require('../if-07.js');

QUnit.test("ЗАДАЧА 07. f(x1, y1, x2, y2, x3, y3)}", function(assert){
	assert.deepEqual(f( 1, 0, 3, 0, 2, 2), 2, "Не выполнено f( 1, 0, 3, 0, 2, 2) === 2")
	assert.deepEqual(f(-1, 0, 1, 0, 0,-2), 2, "Не выполнено f(-1, 0, 1, 0, 0,-2) === 2")
	assert.deepEqual(f( 0, 0, 0, 3, 8, 3),-1, "Не выполнено f( 0, 0, 0, 3, 8, 3) === -1")

});