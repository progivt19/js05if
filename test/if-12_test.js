const f = require('../if-12.js');

QUnit.test("ЗАДАЧА 12. f(n) = name number 0-9", function(assert){
	assert.deepEqual(f(1) ,"one"  , "Не выполнено f(1) === one")
	assert.deepEqual(f(2) ,"two"  , "Не выполнено f(2) === two")
	assert.deepEqual(f(3) ,"three", "Не выполнено f(3) === three")
	assert.deepEqual(f(4) ,"four" , "Не выполнено f(4) === four")
	assert.deepEqual(f(5) ,"five" , "Не выполнено f(5) === five")
	assert.deepEqual(f(-1),"error", "Не выполнено f(-1)=== error")
	assert.deepEqual(f(10),"error", "Не выполнено f(10)=== error")
});
