const f = require('../if-x2.js');

QUnit.test("ЗАДАЧА 06. f(k,b,R)", 
	function(assert){
	assert.deepEqual(f(1,2,3), 2, "Не выполнено f(1,2,3) === 2");
	assert.deepEqual(f(4,1,3), 2, "Не выполнено f(4,1,3) === 2");
	assert.deepEqual(f(2,0,2), 2, "Не выполнено f(2,0,2) === 2");
	assert.deepEqual(f(0,0,2), 2, "Не выполнено f(0,2,2) === 2");
	assert.deepEqual(f(0,2,2), 1, "Не выполнено f(0,2,2) === 1");
	assert.deepEqual(f(0,-2,2), 1, "Не выполнено f(0,-2,2) === 1");
	assert.deepEqual(f(1,5,2), 0, "Не выполнено f(1,5,2) === 0");
	assert.deepEqual(f(0,4,2), 0, "Не выполнено f(0,4,2) === 0");
  }
);