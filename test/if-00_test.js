const f = require('../if-00.js');

QUnit.test("ЗАДАЧА 00. f(x,y,z)=min{x+y+z, x*y*z, x*y+z}", function(assert){
	assert.deepEqual(f( 1, 1, 1), 1, "Не выполнено 1")
	assert.deepEqual(f(-1, 0,-1),-2, "Не выполнено 2")
	assert.deepEqual(f(-1,-2, 1),-2, "Не выполнено 3")
	assert.deepEqual(f( 0, 0, 0), 0, "Не выполнено 4")
	assert.deepEqual(f(-1, 1, 0),-1, "Не выполнено 5")
	assert.deepEqual(f(-2, 0, 2), 0, "Не выполнено 6")
});
