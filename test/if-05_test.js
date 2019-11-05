const h = require('../if-05.js');

QUnit.test("ЗАДАЧА 05.", function(assert){
	assert.deepEqual(h( 5, 4, 3),2.4, "Не выполнено")
	assert.deepEqual(h(6, 2,5),1.5612494995995994, "Не выполнено")
	assert.deepEqual(h(8,1, 4),-1, "Не выполнено")
	assert.deepEqual(h( 1,1,3), -1, "Не выполнено")
	assert.deepEqual(h(7, 9, 4),3.8332593899996397, "Не выполнено")
	assert.deepEqual(h(10, 5, 2), -1, "Не выполнено")
});
