const h = require('../if-x2.js');

QUnit.test("h(a,b,c)=hа", function(assert){
	assert.deepEqual(h( 6, 2, 1), 1, "h( 6, 2, 1) === такого треугольника не существует")
	assert.deepEqual(h( 3, 4, 5), 4, "h( 3, 4, 5) === 4")
	assert.deepEqual(h( 4, 3, 5), 3, "h( 4, 3, 5) === 3")
	assert.deepEqual(h( 0, 0, 0), 1, "h( 0, 0, 0) === 1")
	assert.deepEqual(h( 1, 1, 0), 1, "h( 1, 1, 0) === 1")
	assert.deepEqual(h( 2, 0, 2), 1, "h( 2, 0, 2) === 1")
	assert.deepEqual(h( 0, 1, 2), 1, "h( 0, 1, 2) === 1")
	assert.deepEqual(h( -1, 1, 1), 1, "h(-1, 1, 2) === 1")
});
