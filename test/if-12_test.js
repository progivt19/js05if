const f = require('../if-12.js');

QUnit.test("ЗАДАЧА 12. digitName(n)=N", 
	function(assert){
		assert.deepEqual(f(0), "ZERO", "Не выполнено digitName(0) === ZERO");
		assert.deepEqual(f(3), "THREE", "Не выполнено digitName(3) === THREE");
		assert.deepEqual(f(5), "FIVE", "Не выполнено digitName(5) === FIVE");
		assert.deepEqual(f(9), "NINE", "Не выполнено digitName(9) === NINE");
		assert.deepEqual(f(10), "ERROR", "Не выполнено digitName(10) === ERROR");
		assert.deepEqual(f(-1), "ERROR", "Не выполнено digitName(-1) === ERROR");
	}
);