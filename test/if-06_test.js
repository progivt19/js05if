const f = require('../if-06.js');

QUnit.test("ЗАДАЧА 06. Написать функцию f(k,b,R),которая дает количество общихт очек у прямой y=kx+b и окружности x2+y2=R2", 
  function(assert){
	assert.deepEqual(f(1,2,3), 2, "Не выполнено f(1,2,3) === 2");
	assert.deepEqual(f(0,0,0), 1, "Не выполнено f(0,0,0) === 1");
	assert.deepEqual(f(1,2,5), 2, "Не выполнено f(1,2,5) === 2");
	assert.deepEqual(f(9,9,9), 2, "Не выполнено f(9,9,9) === 2");
	assert.deepEqual(f(99,100,0), 0, "Не выполнено f(99,100,0) === 0");
	assert.deepEqual(f(-5,0,0), 1, "Не выполнено f(-5,0,0) === 1");
	assert.deepEqual(f(-1,-1,-1), 2, "Не выполнено f(-1,-1,-1) === 2");
  }
);
