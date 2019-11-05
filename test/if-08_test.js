const f = require('../if-08.js');

QUnit.test("ЗАДАЧА 08.", function(assert){
	assert.deepEqual(f( 1, 1, 1, 3,3,1), -1, "Не выполнено( 1, 1, 1, 3,3,1), -1")
	assert.deepEqual(f(1,3,2,1,5,1),3, "Не выполнено (1,3,2,1,5,1),3")
});
