const f = require('../if-02.js');

QUnit.test("ЗАДАЧА 02. f(a,b,c,d)=max{min{a,b}, min{c,d}}", 
  function(assert){
	assert.deepEqual(f(1, 2, 3, 4), 3, "Не выполнено");
	assert.deepEqual(f(4, 3, 2, 1), 3, "Не выполнено");
	assert.deepEqual(f(100, 234, 675, 324), 324, "Не выполнено");
	assert.deepEqual(f(0, 0, 0, 0), 0, "Не выполнено");
	assert.deepEqual(f(0.5, 0.3, 0.8, 0.6), 0.6, "Не выполнено");
  }
);
