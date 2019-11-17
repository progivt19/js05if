const f = require('../if-04.js');

QUnit.test("ЗАДАЧА 04. Написать функцию f(a,b,c,d)=max(min(|a|,|b|),max(|c|,|d|))", 
  function(assert){
	assert.deepEqual(f( 8, 9, 1, 3), 8, "Не выполнено f( 8, 9, 1, 3) === max {8, 3} === 8");
	assert.deepEqual(f(-6, -10, -1, 3), 6, "Не выполнено f(-6, -10,-1, 3) === max {|-6|, 3} === 6");
	assert.deepEqual(f(34, 56, 79, 0), 79, "Не выполнено f(34, 56, 79, 0) === max {34, 79} === 79");
	assert.deepEqual(f(0, 0, 0, 0), 0, "Не выполнено f(0, 0, 0, 0) === 0");
  }
);
