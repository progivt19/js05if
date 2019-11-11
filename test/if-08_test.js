const S = require('../if-08.js');

QUnit.test("ЗАДАЧА 08. могут быть вершинами остроугольного треугольника", 
  function(assert){
	assert.deepEqual(S(0,0, 2,0, 1,8), 8, "S(0,0, 2,0, 1,8)");
	assert.deepEqual(S(0,0, 2,0, 2,8), -1, "S(0,0, 2,0, 2,8)");
	assert.deepEqual(S(2,0, 2,0, 2,0), -1, "S(2,0, 2,0, 2,0)");
	assert.deepEqual(S(-3,2, 0,0, 2,0), -1, "S(-3,2, 0,0, 2,0)");
  }
);
