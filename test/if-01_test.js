const f = require('../if-x1.js');

QUnit.test("f(x,y,z)=max{x+y+z, x*y*z, x*y+z}", function(assert){
	assert.deepEqual(f( 1, 1, 1), 3, "Не выполнено f( 1, 1, 1) ===  3")
	assert.deepEqual(f(-1, 0,-1), 0, "Не выполнено f(-1, 0,-1) === -1")
	assert.deepEqual(f(-1,-2, 1), 3, "Не выполнено f(-1,-2, 1) === -2")
	assert.deepEqual(f( 0, 0, 0), 0, "Не выполнено f( 0, 0, 0) ===  0")
	assert.deepEqual(f(-1, 1, 0), 0, "Не выполнено f(-1, 1, 0) === -1")
	assert.deepEqual(f(-2, 0, 2), 2, "Не выполнено f(-2, 0, 2) ===  0")
});
