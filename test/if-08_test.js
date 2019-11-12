const f = require('../if-08.js');

QUnit.test("ЗАДАЧА 08. f(x1,y1,x2,y2,x3,y3)=Площадь треугольника", 
  function(assert){
	assert.deepEqual(f(1,1,5,1,5,4), -1, "Не выполнено f(1,1,5,1,5,4) === -1");
	assert.deepEqual(f(14,14,16,16,18,18), -1, "Не выполнено f(14,14,16,16,18,18) === -1");
  }
);
