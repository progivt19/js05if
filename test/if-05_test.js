const f = require('../if-05.js');

QUnit.test("ЗАДАЧА 05. h(a, b, c)", 
  function(assert){
	assert.deepEqual(f( 3, 4, 5), 4, "Не выполнено f(3,4,5) === 4.00");
	assert.deepEqual(f( 10, 2, 56), -1, "Не выполнено f(10,2,56) === -1");
	assert.deepEqual(f( 2, 3, 4), 2, "Не выполнено f(2,3,4) === 2.9");
	assert.deepEqual(f( 10, 18, 10), 7, "Не выполнено f(10,18,10) === 7");
	assert.deepEqual(f( 10, 100, 10), -1, "Не выполнено f(10,100,10) === -1");
	assert.deepEqual(f( 12, 14, 15), 13, "Не выполнено f(12,14,15) === 13");
  }
);
