const digitName = require('../if-12.js');

QUnit.test("ЗАДАЧА 12}",
	function(assert) {
		assert.deepEqual(digitName(1), "ONE", "Не выполнено n >= 0 && n <=9");
		assert.deepEqual(digitName(3), "THREE", "Не выполнено n >= 0 && n <=9");
		assert.deepEqual(digitName(5), "FIVE", "Не выполнено n >= 0 && n <=9");
		assert.deepEqual(digitName(-1), "ERROR", "Не выполнено n <= 0");
		assert.deepEqual(digitName(10), "ERROR", "Не выполнено n >= 9");
	}
);
