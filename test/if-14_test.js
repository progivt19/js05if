const [X4, Y4] = require('../if-14.js');

QUnit.test("ЗАДАЧА 14. Написать две функции X4(x1,y1,x2,y2,x3,y3) и Y4(x1,y1,x2,y2,x3,y3), которые дают абсциссу и ординату четвёртой вершины.", function(assert){
	assert.deepEqual(X4(4,1,4,3,8,3), 8, "Не выполнено")
	assert.deepEqual(Y4(4,1,4,3,8,3), 1, "Не выполнено")
	
	assert.deepEqual(X4(1,1,4,4,7,1), 4, "Не выполнено")
	assert.deepEqual(Y4(1,1,4,4,7,1), -2, "Не выполнено")

	assert.deepEqual(X4(-4,-1,-4,-3,-8,-3), -8, "Не выполнено")
	assert.deepEqual(Y4(-4,-1,-4,-3,-8,-3), -1, "Не выполнено")
});