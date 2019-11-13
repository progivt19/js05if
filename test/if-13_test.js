const f = require('../if-13.js');

QUnit.test("ЗАДАЧА 13. f(x1, y1, x2, y2, x3, y3)", function(assert){
	assert.deepEqual(f( 0, 0, 0, 0, 0, 0), false, "Не выполнено f( 0, 0, 0, 0, 0, 0) === false");
	assert.deepEqual(f( 1, 1, 1, 2, 2, 1), true , "Не выполнено f( 1, 1, 1, 2, 2, 1) === true");
	assert.deepEqual(f( 1,-1, 2,-1, 1,-2), true , "Не выполнено f( 1,-1, 2,-1, 1,-2) === true");
	assert.deepEqual(f( 1,-1, 2,-1, 3,-2), false, "Не выполнено f( 1,-1, 2,-1, 3,-2) === false");
	assert.deepEqual(f(-1, 1, 0, 0, 1, 0), false, "Не выполнено f(-1, 1, 0, 0, 1, 0) === false");
	assert.deepEqual(f(-1,-1,-2,-1,-2,-2), true , "Не выполнено f(-1,-1,-2,-1,-2,-2) === true");
	assert.deepEqual(f(-2, 2,-1, 2,-2, 1), true , "Не выполнено f(-2, 2,-1, 2,-2, 1) === true");
});