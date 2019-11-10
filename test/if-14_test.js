const [X4, Y4] = require('../if-14.js');

QUnit.test("ЗАДАЧА 14. X4(x1, y1, x2, y2, x3, y3) и Y4(x1, y1, x2, y2, x3, y3)", 
  function(assert){
	assert.deepEqual(X4(0, 0, 4, 0, 4, 2), 0, "Не выполнено X4(x1, y1, x2, y2, x3, y3) === 0");
	assert.deepEqual(Y4(0, 0, 4, 0, 4, 2), 2, "Не выполнено Y4(x1, y1, x2, y2, x3, y3) === 2");

	assert.deepEqual(X4(0, 0, 3, -3, 1, -5), -2, "Не выполнено X4(x1, y1, x2, y2, x3, y3) === -2");
	assert.deepEqual(Y4(0, 0, 3, -3, 1, -5), -2, "Не выполнено X4(x1, y1, x2, y2, x3, y3) === -2");

	assert.deepEqual(X4(0, 0, 8, 0, 0, -3), 8, "Не выполнено X4(x1, y1, x2, y2, x3, y3) === 8"); 
	assert.deepEqual(Y4(0, 0, 8, 0, 0, -3), -3, "Не выполнено Y4(x1, y1, x2, y2, x3, y3) === -3");

	assert.deepEqual(X4(0, 0, 0, 0, 0, 0), "Ошибка", "Не выполнено X4(x1, y1, x2, y2, x3, y3) === Ошибка");
	assert.deepEqual(Y4(0, 0, 0, 0, 0, 0), "Ошибка", "Не выполнено Y4(x1, y1, x2, y2, x3, y3) === Ошибка");

	assert.deepEqual(X4(0, 2, 0, 2, 0, 4), "Ошибка", "Не выполнено X4(x1, y1, x2, y2, x3, y3) === Ошибка");
	assert.deepEqual(Y4(0, 2, 0, 2, 0, 4), "Ошибка", "Не выполнено Y4(x1, y1, x2, y2, x3, y3) === Ошибка");
  }
);s