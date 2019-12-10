const S = require('../if-09.js');

QUnit.test("ЗАДАЧА 02. Площадь тупого треугольника", 
  function(assert){
	assert.deepEqual(S(3,1,5,2,1,2), 2, "Не выполнено1");
	// assert.deepEqual(S(1,2,4,3), 3, "Не выполнено2");
	// assert.deepEqual(S(1,2,4,4), 4, "Не выполнено3");
	// assert.deepEqual(S(-1,-2,-3,-4),-2, "Не выполнено4");
});
 