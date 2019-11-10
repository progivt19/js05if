const f = require('../if-03.js');

QUnit.test("ЗАДАЧА 03. f(a, b, c, d) = min(max(a, b),  max(c, d))", function(assert) {
	assert.deepEqual(f( 4, 3, 2, 1), 2, "Не выполнено f( 4, 3, 2, 1) === min(max(4, 3),  max(2, 1)) === 2");
	assert.deepEqual(f( 7, 6, 9, 8), 7, "Не выполнено f( 7, 6, 9, 8) === min(max(7, 6),  max(9, 8)) === 7");
	assert.deepEqual(f( 9, 2, 7, 8), 8, "Не выполнено f( 9, 2, 7, 8) === min(max(9, 2),  max(7, 8)) === 8");
	assert.deepEqual(f( 0,-2,-4, 1), 0, "Не выполнено f( 0,-2,-4, 1) === min(max(a, b),  max(c, d)) === 0");
	assert.deepEqual(f( 2, 6, 5, 1), 5, "Не выполнено f( 2, 6, 5, 1) === min(max(a, b),  max(c, d)) === 0");
	assert.deepEqual(f( 1, 2, 3, 2), 2, "Не выполнено f( 1, 2, 3, 2) === min(max(a, b),  max(c, d)) === 4");
	assert.deepEqual(f( 4, 7, 3, 6), 6, "Не выполнено f( 4, 7, 3, 6) === min(max(a, b),  max(c, d)) === 0");
	assert.deepEqual(f( 5, 8, 7, 9), 8, "Не выполнено f( 5, 8, 7, 9) === min(max(a, b),  max(c, d)) === 4");
  }
);