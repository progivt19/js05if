const f = require('../if-11.js');

QUnit.test("ЗАДАЧА 12. digitName(n)=N in English", 
	function(assert){
		assert.deepEqual(f(0), "", "Не выполнено");
		assert.deepEqual(f(1), "понедельник", "Не выполнено");
		assert.deepEqual(f(3), "среда", "Не выполнено");
		assert.deepEqual(f(6), "суббота", "Не выполнено");
		assert.deepEqual(f(7), "воскресенье", "Не выполнено");
		assert.deepEqual(f(10), "", "Не выполнено");
	}
);
