const f = require('../if-02.js');

QUnit.test("ЗАДАЧА 02. f(a,b,c,d)=max{min{a,b}, min{c,d}}", 
  function(assert){
	assert.deepEqual(f(1, 2, 3, 4), 3, "Не выполнено f(1, 2, 3, 4) === max {1, 3} === 3");
	assert.deepEqual(f(2, 3, 1, 4), 2, "Не выполнено f(2, 3, 1, 4) === max {2, 1} === 2");
	assert.deepEqual(f(3, 0, 1, 5), 1, "Не выполнено f(3, 0, 1, 5) === max {0, 1} === 1");
	assert.deepEqual(f(2, 1, 2, 1), 1, "Не выполнено f(2, 1, 2, 1) === max {1, 1} === 1");
	assert.deepEqual(f(1, 1, 1, 1), 1, "Не выполнено f(1, 1, 1, 1) === max {1, 1} === 1");
	assert.deepEqual(f(-1, 0, -2, -4), -1, "Не выполнено f(-1, 0, -2, -4) === max {-1, -4} === -1");
	assert.deepEqual(f(0, 0, 0, 0), 0, "Не выполнено f(0, 0, 0, 0) === max {0, 0} === 0");
	assert.deepEqual(f(6, -3, 8, -4), -3, "Не выполнено f(6, -3, 8, -4) === max {-3, -4} === -3");
  }
);
