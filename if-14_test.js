const f = require('../if-11.js');

QUnit.test("ЗАДАЧА 07. f(x1, y1, x2, y2, x3, y3)}", function(assert){
	assert.deepEqual(f( 1), 'Понедельник', "Не выполнено f(x1, y1, x2, y2, x3, y3) === 'Понедельник'")
	assert.deepEqual(f(7), 'Воскресенье', "Не выполнено f(x1, y1, x2, y2, x3, y3) === 'Воскресенье'")
	assert.deepEqual(f( 123), '', "Не выполнено f(x1, y1, x2, y2, x3, y3) === ''")
	assert.deepEqual(f( -123), '', "Не выполнено f(x1, y1, x2, y2, x3, y3) === ''")
});