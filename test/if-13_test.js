const S = require('../if-13.js');

QUnit.test("ЗАДАЧА 13. S(x1,y1,x2,y2,x3,y3)=точки это вершины какого-то квадрата",
  function(assert){
	assert.deepEqual(S(1,3,1,1,3,1), "true", "Не выполнено S(1,3,1,1,3,1) === true");
	assert.deepEqual(S(6,1,6,4,3,4), "true", "Не выполнено S(6,1,6,4,3,4) === true");
	assert.deepEqual(S(-2,-1,-5,-1,-5,2), "true", "Не выполнено S(-2,-1,-5,-1,5,2) === true");
	assert.deepEqual(S(-2,-4,2,-4,-2,-8), "true", "Не выполнено S(-2,-4,2,-4,-2,-8) === true");
	assert.deepEqual(S(-1,-1,-1,1,1,1), "true", "Не выполнено S(-1,-1,-1,1,1,1) === true");
	assert.deepEqual(S(0,0,3,0,0,3), "true", "Не выполнено S(0,0,3,0,0,3) === true");
	assert.deepEqual(S(1,4,1,1,5,1), "false", "Не выполнено S(1,4,1,1,5,1) === false");
	assert.deepEqual(S(-2,2,-2,-3,1,-2), "false", "Не выполнено S(-2,2,-2,-3,1,-2) === false");
  }
);
