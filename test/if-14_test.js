const f = require('../if-14.js');

QUnit.test("ЗАДАЧА 14. f(x1,y1,x2,y2,x3,y3)=x4;y4", 
  function(assert){
	assert.deepEqual(f(1,1,1,1,1,1), 1+";"+1, "Не выполнено f(1,1,1,1,1,1) === 1;1");
	assert.deepEqual(f(1,2,3,4,5,6), 4+";"+5, "Не выполнено f(1,2,3,4,5,6) === 4;5");
	assert.deepEqual(f(4,5,3,1,8,9), 5.5+";"+5, "Не выполнено f(4,5,3,1,8,9) === 5.5;5");
  }
);
