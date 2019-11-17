const f = require('../if-07.js');

QUnit.test("ЗАДАЧА 07. S(x1, y1, x2, y2, x3, y3) = s", function(assert){

	assert.deepEqual(S(0, 0, 0, 0, 0, 0), -1, "Не выполнено S(0, 0, 0, 0, 0, 0) === -1")
	assert.deepEqual(S(0, 0, 5, 0, 0, 0), -1, "Не выполнено S(0, 0, 5, 0, 0, 0) === -1")
	assert.deepEqual(S(0, 0, 2, 0, 0, -2), 2, "Не выполнено S(0, 0, 2, 0, 0, -2) === 2");

});