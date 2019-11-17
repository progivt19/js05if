const f = require('../if-10.js');

QUnit.test("ЗАДАЧА 5.h(a, b, c)", function(assert){
	assert.deepEqual(h(5, 4, 3),2, "Не выполнено h(a, b, c) ===2")
	assert.deepEqual(h(15, 8, 7),-1, "Не выполнено h(a, b, c) ===-1")
	assert.deepEqual(h(5, 3, 3),1, "Не выполнено h(a, b, c) ===1")
	assert.deepEqual(h(1, 1, 3),-1, "Не выполнено h(a, b, c) ===-1")
	assert.deepEqual(h(7, 9, 4),3, "Не выполнено h(a, b, c) ===3")
	assert.deepEqual(h(40, 34, 22),18, "Не выполнено h(a, b, c) ===18")
});
