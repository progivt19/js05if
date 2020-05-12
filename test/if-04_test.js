const f = require('../if-04.js');

QUnit.test("ЗАДАЧА 04. Написатьфункциюf(a,b,c,d)=max(min(|a|,|b|),max(|c|,|d|))", function(assert){
	assert.deepEqual(f( 0, 1, 2, 3), 3, "?")
	assert.deepEqual(f(2, 3, 1, 0), 2, "?")
	assert.deepEqual(f(-4,-3, -2, -1), 3, "?")
});
