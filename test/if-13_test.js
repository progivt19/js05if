const S = require('../if-13.js');

QUnit.test("ЗАДАЧА 13. Напишите функцию S(x1,y1,x2,y2,x3,y3), проверить являются ли точки вершинами квадрата", function(assert){
	assert.deepEqual(S( 1, 2, 2, 5, 4, 1), true, "Не выполнено S( 1, 2, 2, 5, 4, 1) === true"); //меняю местами точки
	assert.deepEqual(S( 1, 2, 4, 1, 2, 5), true, "Не выполнено S( 1, 2, 4, 1, 2, 5) === true");
	assert.deepEqual(S( 2, 5, 1, 2, 4, 1), true, "Не выполнено S( 2, 5, 1, 2, 4, 1) === true");
	assert.deepEqual(S( 2, 5, 4, 1, 1, 2), true, "Не выполнено S( 2, 5, 4, 1, 1, 2) === true");
	assert.deepEqual(S( 4, 1, 1, 2, 2, 5), true, "Не выполнено S( 4, 1, 1, 2, 2, 5) === true");
	assert.deepEqual(S( 4, 1, 2, 5, 1, 2), true, "Не выполнено S( 4, 1, 2, 5, 1, 2) === true");
	assert.deepEqual(S(-3,-2,-5,-6,-9,-4), true, "Не выполнено S(-3,-2,-5,-6,-9,-4) === true"); //произвольный
	assert.deepEqual(S( 6,-4, 6, 0, 6, 9), false, "Не выполнено S( 6,-4, 6, 0, 6, 9) === false"); //лежат на прямой x = const
	assert.deepEqual(S( 1, 0, 2, 0, 4, 0), false, "Не выполнено S( 1, 0, 2, 0, 4, 0) === false"); // лежат на прямой y = const
	assert.deepEqual(S( 3, 1,-1,-1,-2,-3), false, "Не выполнено S( 3, 1,-1,-1,-2,-3) === false"); // лежат на прямой y = 2x + 1

	assert.deepEqual(S( 1, 1, 3, 2, 5, 2), false, "Не выполнено S( 1, 1, 3, 2, 5, 2) === false"); //...
	assert.deepEqual(S( 1, 1, 3, 2, 5, 2), false, "Не выполнено S( 1, 1, 3, 2, 5, 2) === false");
	assert.deepEqual(S( 1, 1, 3, 2, 5, 2), false, "Не выполнено S( 1, 1, 3, 2, 5, 2) === false");
	assert.deepEqual(S( 3, 2, 5, 2, 1, 1), false, "Не выполнено S( 3, 2, 5, 2, 1, 1) === false");
	assert.deepEqual(S( 5, 2, 1, 1, 3, 2), false, "Не выполнено S( 5, 2, 1, 1, 3, 2) === false");
	assert.deepEqual(S( 5, 2, 3, 2, 1, 1), false, "Не выполнено S( 5, 2, 3, 2, 1, 1) === false");
	assert.deepEqual(S( 1, 3, 3, 4, 2, 8), false, "Не выполнено S( 1, 3, 3, 4, 2, 8) === false"); //произвольный
  }
);
