const f = require('../if-03.js');

QUnit.test("ЗАДАЧА 03. f(a,b,c,d)=min(max(a,b), max(c,d)", function(assert){
	assert.deepEqual(f( 1, 2, 3, 4), "Не выполнено f( 1, 1, 1) === min {3,1,2} === 1")
	assert.deepEqual(f(-1, 0,-1),-2, "Не выполнено f(-1, 0,-1) === min {-2,0,-1} === -2")
	assert.deepEqual(f(-1,-2, 1),-2, "Не выполнено f(-1,-2, 1) === min {-2,2,3} === -2")
	assert.deepEqual(f( 0, 0, 0), 0, "Не выполнено f( 0, 0, 0) === min {0,0,0} === 0")
	assert.deepEqual(f(-1, 1, 0),-1, "Не выполнено f(-1, 1, 0) === min {0,0,-1} === -1")
	assert.deepEqual(f(-2, 0, 2), 0, "Не выполнено f(-2, 0, 2) === min {0,0,2} === 0")
});
