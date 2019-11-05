const f = require('../if-03.js');

QUnit.test("ЗАДАЧА 03.", function(assert){
	assert.deepEqual(f( 1, 1, 1, 1), 1, "Не выполнено ")
	assert.deepEqual(f(-1, 0,-1, 1),0, "Не выполнено ")
	assert.deepEqual(f(-1,-2, 1, 1),-1, "Не выполнено ")
	assert.deepEqual(f( 0, 0, 0, 0), 0, "Не выполнено ")
	assert.deepEqual(f(-1, 1, 0, 2),1, "Не выполнено ")
	assert.deepEqual(f(-2, 0, 2, 1),0, "Не выполнено ")
});
