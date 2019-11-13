const f = require('../if-05.js');

QUnit.test("ЗАДАЧА 05. f(a, b, c)", function(assert){
	assert.deepEqual(f( 5,  4,  3),  2, "Не выполнено f(  5,  4,  3) ===  2")
	assert.deepEqual(f(15,  8,  7), -1, "Не выполнено f( 15,  8,  7) === -1")
	assert.deepEqual(f( 5,  3,  2), -1, "Не выполнено f(  5,  3,  2) === -1")
	assert.deepEqual(f( 1,  1,  3), -1, "Не выполнено f(  1,  1,  3) === -1")
	assert.deepEqual(f( 5,  9,  6),  6, "Не выполнено f(  5,  9,  6) ===  6")
	assert.deepEqual(f(40, 34, 22), 19, "Не выполнено f( 40, 34, 22) === 19")
});