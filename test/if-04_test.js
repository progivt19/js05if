const f = require('../if-04.js');

QUnit.test("S(x1, y1, x2, y2,x3, y3)=true/false", function(assert){
	assert.deepEqual(S(1,1,3,1,1,3), true, "S(1,1,3,1,1,3) === true")
	assert.deepEqual(S(3,1,1,1,1,3), true, "S(3,1,1,1,1,3) === true")
	assert.deepEqual(S(1,1,1,3,3,1), true, "S(1,1,1,3,3,1) === true")
	assert.deepEqual(S(2,0,0,2,4,2), true, "S(2,0,0,2,4,2) === true")
	assert.deepEqual(S(1,1,4,1,1,3), false, "S(1,1,4,1,1,3) === false")
	assert.deepEqual(S(4,3,9,10,3,0), false, "S(4,3,9,10,3,0) === false")
	assert.deepEqual(S(-4,3,9,10,3,0), false, "S(-4,3,9,10,3,0) === false")
});

