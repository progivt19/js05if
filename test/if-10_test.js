const f = require('../if-10.js');

QUnit.test("ЗАДАЧА 10. MonthName(n)", function(assert){
	assert.deepEqual(f( 1), "Январь", "Не выполнено f(1) === Январь")
	assert.deepEqual(f( 6), "Июнь", "Не выполнено f(6) === Июнь ")
	assert.deepEqual(f( 7), "Июль", "Не выполнено f(7) === Июль ")
	assert.deepEqual(f( 13), "", "Не выполнено f(13) === ")
	assert.deepEqual(f( -1), "", "Не выполнено f(-1) === ")
	assert.deepEqual(f( -22), "", "Не выполнено f(-22)  === ")
});
