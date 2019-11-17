const f = require('../if-06.js');

QUnit.test("ЗАДАЧА 06. f(k, b, R)",
  function(assert){
	assert.deepEqual(f( 0, 2, 4), 2, "Не выполнено f( 0, 2, 4) === 2");
	assert.deepEqual(f( 0, 2, 2), 1, "Не выполнено f( 0, 2, 2) === 1");
	assert.deepEqual(f( 0, 2, 1), 0, "Не выполнено f( 0, 2, 1) === 0");
  }
);
