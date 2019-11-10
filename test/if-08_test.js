const f = require('../if-08.js');

QUnit.test("ЗАДАЧА 08. S(x1, y1, x2, y2, x3, y3) returns S(a,b,c) если остроугольный, иначе -1", 
	function(assert){
		assert.deepEqual(f(-4, 1, -2, 2, -3, 3), 1.5, "Не выполнено");
		assert.deepEqual(f(4, 1, 2, 2, 3, 3), 1.5, "Не выполнено");
		assert.deepEqual(f(4.5, 3, 6, 4, 4, 4), 1, "Не выполнено");
		assert.deepEqual(f(2, 1, 1, 3, 4, 2), -1, "Не выполнено");
		assert.deepEqual(f(1, 2, 3, 4, 5, 6), -1, "Не выполнено");
		assert.deepEqual(f(-2, -1, -1, -3, -4, -2), -1, "Не выполнено");
	}
);
