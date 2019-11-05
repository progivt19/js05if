const f = require('../if-01.js');

QUnit.test("ЗАДАЧА 01. f(x,y,z)=max{x+y+z, x*y*z, x*y+z}", function(assert){
	assert.deepEqual(f( 1, 1, 1),3, "Не выполнено f( 1, 1, 1) === max {3,1,2} === 3")
	assert.deepEqual(f(-1, 0,-1),0, "Не выполнено f(-1, 0,-1) === max {-2,0,-1} === 0")
	assert.deepEqual(f(-1,-2, 1),3, "Не выполнено f(-1,-2, 1) === max {-2,2,3} === 3")
	assert.deepEqual(f( 0, 1, 0), 1, "Не выполнено f( 0, 0, 0) === max {1,0,0} === 1")
	assert.deepEqual(f(-1, 1, 0),0, "Не выполнено f(-1, 1, 0) === max {0,0,-1} === 0")
	assert.deepEqual(f(-2, 0, 2), 2, "Не выполнено f(-2, 0, 2) === max {0,0,2} === 2")
});
